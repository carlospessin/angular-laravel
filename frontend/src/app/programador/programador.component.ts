import { Programador } from './../entities/programador';
import { Component, OnInit } from '@angular/core';
import { ProgramadorService } from '../services/programador.service';

@Component({
  selector: 'app-programador',
  templateUrl: './programador.component.html',
  styleUrls: ['./programador.component.css']
})
export class ProgramadorComponent implements OnInit {

    programadores: Programador[] = [];

    constructor(public programadorService: ProgramadorService) { }
  
    ngOnInit(): void {
        console.log(this.programadores);
      this.programadorService.getAll().subscribe((data: Programador[])=>{
        this.programadores = data;
      })
    }
  
    deleteProgramador(id: any){
      this.programadorService.delete(id).subscribe(res => {
           this.programadores = this.programadores.filter(item => item.id !== id);
           console.log('Nível excluído com sucesso!');
      })
    }
  
  }