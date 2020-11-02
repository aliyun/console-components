import { HybridCloudLightTheme } from '@alicloud/console-components-console-menu'

import Basic from '../basic'

import React from 'react'

interface IProps {}

const Demo: React.FC<IProps> = (props) => {
  return (
    <HybridCloudLightTheme>
      <Basic />
    </HybridCloudLightTheme>
  )
}

export default Demo
