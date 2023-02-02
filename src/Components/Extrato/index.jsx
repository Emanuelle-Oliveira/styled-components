import React from "react";
import styled from "styled-components";
import { Box, Botao } from "../UI";
import { extratoLista } from "../../info";
import Itens from "../Itens";

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(
        ({id, type, value, date, from}) => {
          return(
            <Itens
              key={id}
              type={type}
              value={value}
              date={date}
              from={from}
            />
          )
        }
      )}
      <Botao>
        Ver Mais
      </Botao>

    </Box>
  )
}
export default Extrato;
