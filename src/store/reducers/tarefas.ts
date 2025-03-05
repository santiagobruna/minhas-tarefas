import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Tarefa from "../../models/Tarefa";
import * as enums from '../../utils/enums/Tarefa'
import { stat } from "fs";


type TarefaState = {
  itens: Tarefa[];
};

const initialState: TarefaState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar JavaScript',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDA,
      titulo: 'Estudar JavaScript',
    },
    {
      id: 2,
      descricao: 'Estudar React redux',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar React redux',
    },
    {
      id: 3,
      descricao: 'Criar projeto',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      titulo: 'Criar projeto',
    },
  ],
};

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(tarefa => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa  = state.itens.findIndex( t => t.id === action.payload.id )
      if(indexDaTarefa >= 0){
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaExiste = state.itens.find((tarefa) => tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase());
      if(tarefaExiste){
        alert('Já existe uma tarefa com este nome')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1];
        
        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (state, action: PayloadAction<{id: number, finalizado: boolean}>) => {
      const indexDaTarefa  = state.itens.findIndex( t => t.id === action.payload.id )
      if(indexDaTarefa >= 0){
        state.itens[indexDaTarefa].status = action.payload.finalizado
        ? enums.Status.CONCLUIDA
        : enums.Status.PENDENTE
      }
    }
  }
})
export const {remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions
export default tarefasSlice.reducer
