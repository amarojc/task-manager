import { Injectable } from '@angular/core';

import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  //Listando todas as tarefas
  findAll(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    //Operador ternário para verificar se existe alguma tarefa.
    return tarefas ? JSON.parse(tarefas) : [];
  }

  //Criando uma nova tarefa
  create(tarefa: Tarefa): void{
    const tarefas = this.findAll();
    tarefa.id = new Date().getTime();
    //Adicionando a tarefa no final da lista de tarefas
    tarefas.push(tarefa);
    localStorage["tarefas"] = JSON.stringify(tarefas);
  }

  //Buscando um tarefa
  findById(id: number): Tarefa {
    const tarefas: Tarefa[] = this.findAll();
    //Find é um método javascript/typescript que fica dentro de uma lista e através de uma condição ele retorna o resultado
    //Iterando para cada tarefa e verificando se o id da tarefa da busca é igual, caso sim, retorna a tarefa.
    return tarefas.find(tarefa => tarefa.id === id);
  }

  //Atualizando uma tarefa
  update(tarefa:Tarefa): void {
    const tarefas: Tarefa[] = this.findAll();
    //obj - tarefa
    // index - posição da tarefa
    // objs - lista de tarefas
    tarefas.forEach((obj, index, objs) => {
      //Verificando se o id da tarefa que esta sendo atualizada for igual ao id da tarefa que está na lista.
      //Caso sim, atualizo a tarefa na lista de tarefas.
      if(tarefa.id === obj.id){
        objs[index] = tarefa;
      }
    });
    //Associo a lista de tarefas atualizada ao localStorage.
    localStorage["tarefas"] = JSON.stringify(tarefas);
  }

  //Removendo uma tarefa
  delete(id: number): void {
    let tarefas: Tarefa[] = this.findAll();
    //Filter -> Itera na lista e retorna apenas o que estiver dentro da condição.
    //Atualizo a lista de tarefas sem a tarefa com o id informado no parâmetro.
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage["tarefa"] = JSON.stringify(tarefas);
  }

  //Atualizando o status da tarefa
  statusUpdate(id: number): void {
    const tarefas: Tarefa[] = this.findAll();
    tarefas.forEach((obj, index, objs) => {
      if(id === obj.id){
        //Atribuindo a tarefa com o seu novo status para false (!) em sua posição no index.
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage["tarefa"] = JSON.stringify(tarefas);
  }
}
