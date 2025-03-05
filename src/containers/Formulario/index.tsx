import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { MainContainer, SaveButton, Titulo, Campo } from "../../styles"
import { Form, Opcao, Opcoes } from "./styles"

import * as enums from '../../utils/enums/Tarefa'
import Tarefa from "../../models/Tarefa"
import {cadastrar} from '../../store/reducers/tarefas'


const Formulario = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault();
    const tarefaParaAdicionar = new Tarefa(titulo, prioridade, descricao, enums.Status.PENDENTE, 1)
    dispatch(cadastrar(tarefaParaAdicionar))
    navigate('/')
  }
  return (
    <>
      <MainContainer>
        <Titulo>Nova tarefa</Titulo>
          <Form onSubmit={cadastrarTarefa}>
            <Campo value={titulo} onChange={(e) => setTitulo(e.target.value)} type="text" placeholder="Título" />
            <Campo as="textarea" value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição da tarefa"/>
            <Opcoes>
              <p>Prioridade</p>
              {Object.values(enums.Prioridade).map((prioridade) => (
                <Opcao key={prioridade}>
                  <input
                    onChange={evento => setPrioridade(evento.target.value as enums.Prioridade)}
                    value={prioridade}
                    type="radio"
                    name="prioridade"
                    id={prioridade}
                    defaultChecked={prioridade === enums.Prioridade.NORMAL}
                  />
                  <label
                    htmlFor={prioridade}>
                      {prioridade}
                  </label>
                </Opcao>
              ))}
            </Opcoes>
            <SaveButton type="submit">Cadastrar</SaveButton>
        </Form>
      </MainContainer>
    </>
  )
}
export default Formulario
