import React, { useRef } from 'react'
import styled, { css } from 'styled-components'

const Radio = ({ disabled = false, checked, label, tabIndex = 0, onChange = () => {}, labelStyle = { marginLeft: 8 }, containerStyle = { display: 'flex', alignItems: 'center', cursor: 'pointer', userSelect: 'none' }, ...rest }) => {
  const checkboxRef = useRef()
  const checkRef = useRef()

  const handleClick = () => {
    if (disabled) return false
    if (checked) {
      onChange(false)
    } else {
      onChange(true)
    }
  }

  const content = (
    <div onKeyPress={e => (['Enter', ' '].includes(e.key)) && handleClick()} ref={checkboxRef} onClick={handleClick} {...rest}>
      <div ref={checkRef} style={{ opacity: checked ? 1 : 0 }} />
    </div>
  )

  if (label) return (
    <div style={containerStyle}>
      {content}
      <div style={labelStyle} onClick={handleClick}>{label}</div>
    </div>
  )

  return content
}

export default styled(Radio)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 18px;
  height: 18px;
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid hsla(216, 20%, 50%, 0.85);
  transition: background-color 500ms, border-color 500ms;
  &:hover {
    ${props => !props.disabled && css`background-color: hsla(216, 20%, 50%, 0.2); border-color: hsla(216, 20%, 50%, 1);`}    
  };
  & > div {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: hsla(216, 20%, 50%, 0.85); 
    pointer-events: none;
  };
  ${props => props.disabled && css`cursor: not-allowed;`}
`
