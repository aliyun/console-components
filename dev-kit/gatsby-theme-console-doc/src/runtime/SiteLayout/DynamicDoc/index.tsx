import React, { useEffect, useState, useRef } from 'react'
import { usePageCtx } from '../context'

const DynamicDoc: React.FC<{}> = () => {
  const pageCtx = usePageCtx()
  const [DocComp, setDocComp] = useState<any>(null)
  const lockRef = useRef<any>(null)

  if (pageCtx.pageMeta.type !== 'dynamic-doc') return null

  const docDef = {
    prodPkgName: pageCtx.pageMeta.prodPkgName,
    actualLoadPkgName:
      pageCtx.pageMeta.actualLoadPkgName || pageCtx.pageMeta.prodPkgName,
    actualLoadPkgVersion: pageCtx.pageMeta.actualLoadPkgVersion || 'latest',
  }

  useEffect(() => {
    setDocComp(null)
    lockRef.current = docDef
    window
      .loadDocModule(docDef)
      .then(res => res.default)
      .then(comp => {
        if (lockRef.current !== docDef) return
        setDocComp(() => comp)
      })
      .catch(err => {
        setDocComp('error')
      })
  }, [docDef.actualLoadPkgName, docDef.actualLoadPkgVersion])

  if (DocComp === 'error') {
    return <div>Error! Please refresh.</div>
  } else if (!DocComp) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        <DocComp pkgInfo={docDef} />
      </div>
    )
  }
}

export default DynamicDoc
