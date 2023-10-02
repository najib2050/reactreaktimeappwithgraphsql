import { Link } from "react-router-dom";
import styled from "styled-components";


export const CardGrid=styled(Link)`
min-height:100%;
text-decoration:none;
background:url(${props=>props.thumnail});
background-size: cover;
background-repeat:no-repeat;
min-height:100%;
color: yellow;
display: grid;
grid-column-start:${props=>props.index===0 && 1};
grid-column-end:${props=>props.index===0 && 3};
grid-row-start:${props=>props.index===0 && 1};
grid-row-end:${props=>props.index===0 && 3};
cursor:pointer;
position: relative;
`
export const CardInfo=styled.div`
position: absolute;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;


`
export const Category=styled.div`
display: inline-block;
span{
    background-color: tomato;
    padding: 5px 15px;
    font-size: 14px;

}
`
export const Title=styled.h3`
font-size:${props=>props.index==0 ? "34px" :"20px"};
font-weight: ${props=>props.index==0 ? "400" :"700"};
`
export const Thumnail=styled.img`
width: 100%;
height: 600px;
border-radius:50%;
`