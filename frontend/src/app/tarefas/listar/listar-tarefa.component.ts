import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];
  
  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.findAll();
  }

  findAll(): Tarefa[]{
    return this.tarefaService.findAll();
  }

  delete($event: any, tarefa: Tarefa): void{
    $event.preventDefault();
    if(confirm('Deseja remover a tarefa "' + tarefa.name + '"?')){
      this.tarefaService.delete(tarefa.id);
      this.tarefas = this.tarefaService.findAll();
    }
  }
}
