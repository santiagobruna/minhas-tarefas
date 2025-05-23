import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import FiltroCard from "../../components/FiltroCard"
import { alterarTermo } from "../../store/reducers/filtro"
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { Campo } from "../../styles"
import { useNavigate } from "react-router-dom"

type Props = {
  mostrarFiltros: boolean
}


const BarraLateral = ({mostrarFiltros} : Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {termo} = useSelector((state: RootReducer) => state.filtro)
  return(
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo type="text" placeholder="Buscar" value={termo} onChange={e => dispatch(alterarTermo(e.target.value))}/>
            <S.Filtros>
              <FiltroCard valor={enums.Status.PENDENTE} criterio="status"  legenda="pendentes"/>
              <FiltroCard valor={enums.Status.CONCLUIDA} criterio="status" legenda="concluídas"/>
              <FiltroCard valor={enums.Prioridade.URGENTE} criterio="prioridade" legenda="urgentes"/>
              <FiltroCard valor={enums.Prioridade.IMPORTANTE} criterio="prioridade" legenda="importantes"/>
              <FiltroCard valor={enums.Prioridade.NORMAL} criterio="prioridade" legenda="normal"/>
              <FiltroCard  criterio="todas"  legenda="todas"/>
            </S.Filtros>
          </>
        ): (
          <S.Button onClick={() => navigate('/')} type="button">Voltar a lista de tarefas</S.Button>
        ) }
      </div>
    </S.Aside>
  )
}
export default BarraLateral
