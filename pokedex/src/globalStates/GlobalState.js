import axios from "axios";
import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import { BASE_URL } from "../hooks/Constantes";

const GlobalState = (props) => {
  const [pokeData, setPokeData] = useState([])
  const [pokeLiked, setPokeLiked] = useState([])
  

  const getAllPokes = () => {
    axios.get(`${BASE_URL}`)
      .then((res) => {
        setPokeData(res.data.results)
        setPokeLiked(res.data.results)
      })
      .catch((err) => {
        console.log(err)
        alert('Email não cadastrado')
      })
  }

  


  const states = { pokeData ,pokeLiked};
  const setters = { setPokeData,setPokeLiked };
  const requests = { getAllPokes };
  const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
