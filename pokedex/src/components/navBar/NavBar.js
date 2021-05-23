import React from 'react'
import { NavBox, NavBarBox,PokeTitle } from '../Styled/Styled';
import { ReactComponent as Pokeball } from '../../Icons/pokeball.svg';
import { ReactComponent as Synvia } from '../../Icons/synvia-A.svg';
import { ReactComponent as Signout } from '../../Icons/signout.svg';


function NavBar() {

    return (
        <NavBarBox>
            <NavBox>
                <Pokeball onClick={() => null} />
                <PokeTitle>PokéDex</PokeTitle>
            </NavBox>
                <Signout style={{width:'15%',gridColumn:'3',gridRow:'1', margin:'auto'}}/>
                <Synvia onClick={() => null} style={{gridColumn:'3',gridRow:'1'}}/>
        </NavBarBox>
    )
}

export default NavBar

