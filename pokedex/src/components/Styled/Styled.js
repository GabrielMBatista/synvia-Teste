
import styled from 'styled-components'
import  SearchIcon from '../../Icons/searchsolid.svg';
import { font, lightGray, red, white } from '../../hooks/Constantes'

export const NavBarBox = styled.section`
display:grid;
height:12vh;
position:sticky;
grid-template-columns:40% 40% 15%;
justify-content:space-between;
align-items: center;
background-color:${red};
z-index:100;
box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.14), 0 0 10px rgba(0, 0, 0, 10);
`
export const NavBox = styled.section`
display:flex;
height:12vh;
align-items: center;
justify-content: space-evenly;
z-index:100;
`

export const Body = styled.section`
display:grid;
grid-template-rows:15% 65% 20%;
grid-template-columns:20% 40% 40%;
margin:auto;
width:95%;
height:88vh;
position:sticky;
align-items:center;
z-index:10;
`
export const SearchInput = styled.input`
width:95%;
margin:3%;
height:3.5vh;
grid-column:1/3;
border-radius: 15px;
outline:none;
border:transparent;
text-align:center;
z-index:500;
background-color:${lightGray};
background-image:url(${SearchIcon});
background-repeat:no-repeat;
background-size:2%;
background-position: 98% ;

`
export const OrderSelect = styled.select`
width:50%;
margin:40%;
height:3.5vh;
grid-column:3;
grid-row:1;
border-radius: 15px;
outline:none;
color:tomato;
padding-left:2%;
background-color: ${white};
box-shadow: 0px 0px 5px 1px tomato;
z-index:500;
`

export const PokeBox = styled.section`
display:grid;
grid-template-columns: repeat(4,1fr);
margin:center;
grid-row:2/4;
grid-column:2/4;
width:100%;
height:100%;
overflow:scroll;
overflow-x:hidden;
`
export const LikedInput = styled.section`
display:grid;
width:100%;
height:100%;
grid-row:3;
grid-column:1;
`

export const FilterBox = styled.section`
display:grid;
grid-template-columns:1fr 1fr;
margin:auto;
grid-row:2;
grid-column:1;
width:100%;
height:99%;
position:sticky;
`
export const PokeContainer = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:column;
margin:auto;
width:10vw;
height:10vh;
background-color:${lightGray}; 
box-shadow: 0px 0.5px 5px gray;
padding-bottom:4%;
padding-top:4%;
`
export const ShowBox = styled.section`
display:flex;
flex-direction:column;
justify-content:left;
height: 200px;
width: 120px;
`
export const PokePhoto = styled.img`
margin:auto;
width: 70%;
height: 70%;
`

export const PokeCard = styled.div`
display:flex;
flex-wrap:wrap;
margin:auto;
margin-top:2em;
border-width: 1px;
border-top-right-radius:10px;
border-top-left-radius:10px;
:hover{
  cursor: pointer;
  left: 9px;   
  transform: scale(1.1);
  z-index:200;
}
`
export const ButtonSmall = styled.div`
  font-size: 0.8em;
  margin: 0.1em 0.1em;
  border-radius: 3px;
  margin:auto;
  width:60px;
  height:22px;
  color:#fff;
  background-color: ${white};
  box-shadow: 0px 0px 5px 1px #999;
`
export const ButtonBox = styled.div`
display:grid;
justify-content:space-between;
grid-template-columns: 49% 49%;
text-align:center;
margin:auto;
`

export const FilterButton = styled.div`
  font-size: 0.8em;
  margin: 0.1em 0.1em;
  border-radius: 10px;
  margin:auto;
  text-align:center;
  width:60px;
  height:22px;
  color:tomato;
  background-color: ${white};
  box-shadow: 0px 0px 5px 1px tomato;
  :hover{
  cursor: pointer;
  left: 9px;   
  transform: scale(1.1);
  z-index:200;
}
`

export const LetterP = styled.p`
display:flex;
color:${font};
font-weight:500;
text-transform:capitalize;
margin: 10% 30% 10% 5%;
background-size: 14px;
line-height:50%;
font-size:1em;
`;

export const PokeTitle = styled.h2`
display:flex;
color:${white};
font-weight:900;
text-transform:capitalize;
margin: 10% 30% 10% 5%;
background-size: 14px;
line-height:50%;
font-size:1.5em;
`;

export const OrderLabel = styled.label`
display:flex;
margin-left:10%;
color:${font};
grid-row:1;
grid-column:3;
`;