import React, { useContext, useState } from 'react'
import { lightGray } from '../../hooks/Constantes';
import { LetterP, PokeContainer, PokeCard, PokePhoto, ShowBox, ButtonBox } from '../Styled/Styled';
import TypesPoke from '../typesBox/TypesPoke';
import { ReactComponent as HeartRegular } from '../../Icons/heartRegular.svg';
import { ReactComponent as HeartSolid } from '../../Icons/heartSolid.svg';
import GlobalStateContext from '../../globalStates/GlobalStateContext';

function CardPokes(props) {
  const { states, setters } = useContext(GlobalStateContext);
  const [isMouseInside, setIsMouseInside] = useState()

  const mouseEnter = () => {
    setIsMouseInside(true);
  }
  const mouseLeave = () => {
    setIsMouseInside(false);
  }

  const updateLike = (Item) => {
    let Liked = [...states.pokeData];
    Liked.push({ ...Item.like = true });
    setters.setPokeLiked(Liked)
  };
  const updateDislike = (Item) => {
    let Liked = [...states.pokeData];
    Liked.push({ ...Item.like = false });
    setters.setPokeLiked(Liked)
  };

  return (
    <PokeCard>
      <ShowBox onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        <PokeContainer >
          {isMouseInside ?
            props.data.like === !undefined ?
              <HeartSolid style={{ width: '10%', alignSelf: 'right' }} onClick={() => updateDislike(props.data)} />
              :
              <HeartRegular style={{ width: '10%', alignSelf: 'right' }} onClick={() => updateLike(props.data)} />
            :
            null
          }
          <PokePhoto src={props.data.sprites.animated}></PokePhoto>
        </PokeContainer>
        <LetterP style={{ color: lightGray }}>Nº {props.data.national_number}</LetterP>
        <LetterP>{props.data.name}</LetterP>
        <ButtonBox>
          {props.data.type && props.data.type.map((tipo, index) => {
            return (<TypesPoke data={tipo} key={index} />)
          })
          }
        </ButtonBox>
      </ShowBox>
    </PokeCard>
  )
}

export default CardPokes
