import { NgForm } from '@angular/forms';
import { TarefaService, Tarefa } from './../shared';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  //Criando uma referência (do tipo NgForm) do formulário HTML dentro do componente para realizar as validações
  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;
  
  constructor(
    private tarefaService: TarefaService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void {
    if(this.formTarefa.form.valid) {
      this.tarefaService.create(this.tarefa);
      this.router.navigate(["/tarefas"]);
    }
  }

}
