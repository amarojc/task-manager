import { Directive, ElementRef, Input, OnInit } from '@angular/core';

//Gera um atributo HTML - Utilizado para aplicar uma "ação/operação" em um determinado componente
@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit{
  @Input() tarefaConcluida: boolean;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
      if(this.tarefaConcluida){
        this.elementRef.nativeElement.style.textDecoration = "line-through";
      }
  }
}
