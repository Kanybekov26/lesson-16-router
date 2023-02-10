import React from 'react'
import styled from 'styled-components'

const Button = ({children,onClick}) => {
  return (
    <div><StyledButton onClick={onClick}>{children}</StyledButton></div>
  )
}

export default Button

const StyledButton = styled.button`
    background-color:green;
    padding:10px 20px;
    border-radius:15px;
    border:none;
    cursor: pointer;
    color: white;
`