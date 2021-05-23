import React from 'react'
import { fire, water, normal, grass, ice, poison, ground, flying, bug, rock, ghost, dragon, dark, steel, fairy, psychic, electric, fighting } from '../../hooks/Constantes'
import { ButtonSmall } from '../Styled/Styled'

function TypesPoke(props) {
  const ColorType = () => {
    if (props.data === "Fire") {
      return (fire)
    } else if (props.data === "Water") {
      return (water)
    } else if (props.data === "Normal") {
      return (normal)
    } else if (props.data === "Grass") {
      return (grass)
    } else if (props.data === "Ice") {
      return (ice)
    } else if (props.data === "Poison") {
      return (poison)
    } else if (props.data === "Ground") {
      return (ground)
    } else if (props.data === "Flying") {
      return (flying)
    } else if (props.data === "Bug") {
      return (bug)
    } else if (props.data === "Rock") {
      return (rock)
    } else if (props.data === "Ghost") {
      return (ghost)
    } else if (props.data === "Dragon") {
      return (dragon)
    } else if (props.data === "Dark") {
      return (dark)
    } else if (props.data === "Steel") {
      return (steel)
    } else if (props.data === "Fairy") {
      return (fairy)
    } else if (props.data === "Psychic") {
      return (psychic)
    } else if (props.data === "Electric") {
      return (electric)
    } else if (props.data === "Fighting") {
      return (fighting)
    }
  }

  return (
    <ButtonSmall style={{ backgroundColor: ColorType() }}>
      {props.data}
    </ButtonSmall>
  )
}

export default TypesPoke
