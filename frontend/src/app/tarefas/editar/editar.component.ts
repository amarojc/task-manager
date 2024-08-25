import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  @ViewChild("formTarefa") formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];
    this.tarefa = this.tarefaService.findById(id);
  }

  updateTask(): void{
    if(this.formTarefa.form.valid){ 
      this.tarefaService.update(this.tarefa);
      this.router.navigate(["/tarefas"]);
    }
  }
}
