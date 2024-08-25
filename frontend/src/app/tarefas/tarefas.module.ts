import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EditarComponent } from './editar/editar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    ListarTarefaComponent,
    CadastrarComponent,
    EditarComponent
  ],
  providers: [
    TarefaService
  ]
    
})
export class TarefasModule { }
