import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgramadorRoutingModule } from './programador-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ProgramadorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProgramadorModule { }
