import React, { useState, useCallback } from 'react'
import { Select } from '@alicloud/console-components'
import styled from 'styled-components'

function preventDefault(e) {
  e.preventDefault()
}

const OverlayContent = styled.ul`
  border: 1px solid #dddddd;
  padding: 10px;
  background: #ffffff;
  margin: 0;
  font-size: 12px;
  font-family: Arial;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  > li {
    list-style: none;
    line-height: 30px;
    padding: 0 5px;
    cursor: pointer;
  }

  > li:hover {
    background: #f8f8f8;
  }

  > li:last-child {
    border-width: 0;
  }
`

const Menu = props => {
  const data = [
    {
      label: 'value1',
      value: 1,
    },
    {
      label: 'value2',
      value: 2,
    },
  ]

  const handleClick = item => {
    props.onChange(item)
  }

  const renderItems = () =>
    data.map(item => (
      <li
        key={item.value}
        onClick={() => {
          handleClick(item)
        }}
      >
        {item.label}
      </li>
    ))

  const { className, ...others } = props
  return (
    <OverlayContent className={className} {...others}>
      {renderItems()}
    </OverlayContent>
  )
}

const Wrapper = styled.div`
  background-color: #f8f8f8;
  padding: 16px;
  position: relative;
  p {
    margin-top: 0;
  }
`
const Demo15 = () => {
  const [value, setValue] = useState(null)
  const [visible, setVisible] = useState(false)

  const handleSelect = useCallback(val => {
    setVisible(false)
    setValue(val)
  }, [])

  const onVisibleChange = useCallback(vis => {
    setVisible(vis)
  }, [])

  const popupContent = (
    <Menu onChange={handleSelect} onMouseDown={preventDefault} />
  )

  return (
    <Wrapper>
      <Select
        placeholder="custom popupContent"
        visible={visible}
        onVisibleChange={onVisibleChange}
        value={value}
        popupContent={popupContent}
        popupContainer={node => {
          return node.parentNode
        }}
      />
    </Wrapper>
  )
}

export default Demo15
