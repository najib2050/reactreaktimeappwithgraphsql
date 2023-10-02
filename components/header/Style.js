import { Link } from "react-router-dom"
import styled from "styled-components"

export const Nave=styled.nav`
  background-color: green;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  `;
export const Logo=styled(Link)`
font-family: 'Croissant One', cursive;
font-size: 20px;
color: white;
text-decoration:none;
`
export const Menu=styled.ul`
display: flex;
gap: 10px;
justify-content:space-between;
align-items: center;
`
export const MenuItem=styled(Link)`
color: white;
text-decoration:none;
margin-left:10px;
list-style:none;
cursor: pointer;

`