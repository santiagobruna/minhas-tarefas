import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import * as S from './styles'
import { SaveButton } from '../../styles';
import { remover, editar, alteraStatus } from '../../store/reducers/tarefas';
import TarefaClass from '../../models/Tarefa';
import * as enums from '../../utils/enums/Tarefa'

export type Props = TarefaClass & { botaoRemover?: boolean }

// Omitindo as propriedades que não são usadas na Tag
const Tarefa = ({titulo, prioridade, status, descricao: descricaoOriginal, id}: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    if(descricaoOriginal.length > 0){
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])
  function cancelarEdicao (){
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }
  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement> ){
    dispatch(alteraStatus({
      id,
      finalizado: evento.target.checked
    }))
  }
  return (
    <S.CardTarefa>
      <label htmlFor={titulo}>
        <input type="checkbox" id={titulo} checked={status === enums.Status.CONCLUIDA } onChange={alteraStatusTarefa}/>
        <S.Title>
          {estaEditando ? <em>Editando: </em> : ' '}
          {titulo}
        </S.Title>
      </label>
      <S.Tag parametro='prioridade' prioridade={prioridade}>{prioridade}</S.Tag>
      <S.Tag parametro='status' $status={status}>{status}</S.Tag>
      <S.Description disabled={!estaEditando} value={descricao} onChange={e => setDescricao(e.target.value)}/>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <SaveButton onClick={() => {
              dispatch(editar({
                titulo,
                prioridade,
                status,
                descricao,
                id
              })
              )
              setEstaEditando(false)
            }}>Salvar</SaveButton>
            <S.Button  $botaoRemover  onClick={cancelarEdicao}>Cancelar</S.Button>
          </>

        ): (
          <>
            <S.Button onClick={() => setEstaEditando(true)}>Editar</S.Button>
            <S.Button $botaoRemover onClick={() => dispatch(remover(id))}>Remover</S.Button>
          </>
        ) }
      </S.BarraAcoes>
  </S.CardTarefa>
  )
}

export default Tarefa
