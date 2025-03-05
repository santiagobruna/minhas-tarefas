import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { Props } from ".";
import * as enums from '../../utils/enums/Tarefa'
// Usando Omit para excluir propriedades desnecessárias
export type ButtonProps = Omit<Props, 'titulo' | 'descricao' | 'prioridade' | 'status'>;

type TagProps = {
  prioridade?: enums.Prioridade,
  $status?: enums.Status,
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps) : string {
  if(props.parametro === 'prioridade'){
    if(props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    if(props.prioridade === enums.Prioridade.IMPORTANTE) return variaveis.amarelo2
  }else{
    if(props.$status === enums.Status.PENDENTE) return variaveis.amarelo
    if(props.$status === enums.Status.CONCLUIDA) return variaveis.verde
  }
  return '#ccc';
}

export const CardTarefa = styled.div`
  background-color: #FCFCFC;
  box-shadow: 0px 4px 4px rgba(0, 0 ,0 , 0.25);
  padding: 16px;
  border-radius: 16px;
  margin-bottom: 32px;
  label {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 14px ;
  }
`
export const Title = styled.h3`
  color: #000000;
  font-size: 18px;
  line-height: 21.09px;
  font-weight: 700;
`
export const Tag = styled.span<TagProps>`
  display: inline-block;
  margin-right: 16px;
  padding: 4px 8px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  font-size: 10px;
  color: #fff;
  font-weight: bold;

`
export const Description = styled.textarea`
  resize: none;
  border: none;
  background-color: transparent;
  display: block;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  color: #8B8B8B;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;

`
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px;

`
export const Button = styled.button<Partial<{ $botaoRemover: boolean }>>`
  margin-right: 8px;
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ $botaoRemover }) => ($botaoRemover ? '#C23616' : '#2F3640')};
`

