import React, { useContext, useEffect, useState } from 'react'
import CardPokes from '../components/cards/CardPokes';
import { Body, SearchInput, PokeBox, FilterBox, OrderSelect, FilterButton, LikedInput, OrderLabel, LetterP } from '../components/Styled/Styled'
import { ReactComponent as SearchIcon } from '../Icons/searchsolid.svg';
import GlobalStateContext from '../globalStates/GlobalStateContext';
import css from '../components/Styled/styles.css'
import useForm from '../hooks/hook'
import { TypesArr } from '../hooks/Constantes';

function Home() {
    const { states, requests, setters } = useContext(GlobalStateContext);
    const [form, onChange] = useForm({ SearchData: '', OrderData: 'a,b' });
    const [pokeType, setPokeType] = useState('Todos')
    const [favPoke, setFavPoke] = useState(false)

    useEffect(() => {
        requests.getAllPokes()
    }, [])

    const uniqueArray = states.pokeData && states.pokeData.filter((name, index, self) =>
        index === self.findIndex((text) => (
            text.place === name.place && text.name === name.name
        ))
    )
    const resultNameOrNumber = uniqueArray && uniqueArray.filter(x =>
        (x.national_number.toLowerCase()).includes(`${form.SearchData.toLowerCase()}`)
        ||
        (x.name.toLowerCase()).includes(`${form.SearchData.toLowerCase()}`))

    const resultByOrder = () => {
        if (form.OrderData === "a,b") {
            return resultNameOrNumber.sort((a, b) => (a.national_number > b.national_number) ? 1 : -1)
        } else if (form.OrderData === "b,a") {
            return resultNameOrNumber.sort((b, a) => (a.national_number > b.national_number) ? 1 : -1)
        }
    }

    const resultByType = () => {
        if (pokeType === "Todos") {
            return resultByOrder()
        } else {
            return resultByOrder().filter(x => (x.type).includes(`${pokeType}`))
        }
    }
    const resultByFav = () => {
        if (favPoke === false) {
            return resultByType()
        } else {
            return states.pokeLiked.filter(x => x.like === true)
        }
    }

    return (
        <Body>
            <SearchInput
                placeholder={'Pesquisar por nome ou número'}
                name="SearchData"
                value={form.SearchData}
                onChange={onChange}
            ></SearchInput>
            <OrderLabel>Ordenar Por:</OrderLabel>
            <OrderSelect
                name="OrderData"
                value={form.OrderData}
                onChange={onChange}
            >
                <option value="a,b">Menor número Primeiro</option>
                <option value="b,a">Maior número Primeiro</option>
            </OrderSelect>
            <PokeBox className="scrollbar" id="style-3">
                {resultByFav() && resultByFav().map((poke, index) => {
                    return (
                        <CardPokes
                            key={index}
                            data={poke}
                            addPoke={() => null}
                        />
                    )
                })}
            </PokeBox>
            <FilterBox>
                <LetterP style={{ gridColumn: "1/3", textAlign: 'center' }}>Filtrar por Tipo</LetterP>
                {TypesArr && TypesArr.map((item, index) => {
                    return (
                        <FilterButton
                            key={index}
                            value={item.type}
                            onClick={() => setPokeType(item.type)}
                        >
                            {item.type}
                        </FilterButton>
                    )
                })}
            </FilterBox>

            <LikedInput className="container">
                <LetterP>Filtrar Favoritos</LetterP>
                <label className="switch"><input type="checkbox" onClick={() => setFavPoke(!favPoke)} />    <div></div>
                </label>
            </LikedInput>
        </Body>
    )
}

export default Home
