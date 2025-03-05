import * as enums from '../utils/enums/Tarefa'
class Tarefa {
  titulo: string
  prioridade: enums.Prioridade
  descricao: string
  status: enums.Status
  id: number

  constructor(titulo: string, prioridade: enums.Prioridade,  descricao: string,  status: enums.Status,  id: number){
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.descricao = descricao
    this.id = id
  }
}
export default Tarefa
