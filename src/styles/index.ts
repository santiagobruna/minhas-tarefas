import styled, { createGlobalStyle } from "styled-components";
import variaveis from "./variaveis";
import { Button } from "../components/Tarefa/styles";

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`


export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  display: block;
  font-size: 18px;
  font-weight: bold;
  line-height: 21.09px;
  margin: 40px 0;

`
export const Campo = styled.input`
  width: 100%;
  border: 1px solid #666666;
  border-radius: 8px;
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  color: #666666;
`
export const SaveButton =  styled(Button)`
  background-color: ${variaveis.verde};

`
export default EstiloGlobal
