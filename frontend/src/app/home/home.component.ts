import { Component, OnInit } from '@angular/core';
import { Programador } from '../entities/programador';
import { ProgramadorService } from '../services/programador.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    programadores: Programador[] = [];

    constructor(public programadorService: ProgramadorService) { }

    ngOnInit(): void {
        console.log(this.programadores);
      this.programadorService.getAll().subscribe((data: Programador[])=>{
        this.programadores = data;
      })
    }

}
