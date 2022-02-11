import { Component, OnInit } from '@angular/core';
import { Nivel } from '../entities/nivel';
import { NivelService } from '../services/nivel.service';

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.component.html',
  styleUrls: ['./nivel.component.css']
})
export class NivelComponent implements OnInit {

  niveis: Nivel[] = [];

  constructor(public nivelService: NivelService) { }

  ngOnInit(): void {
    this.nivelService.getAll().subscribe((data: Nivel[])=>{
      this.niveis = data;
      console.log(this.niveis);
    })
  }

  deleteNivel(id: any){
    this.nivelService.delete(id).subscribe(res => {
         this.niveis = this.niveis.filter(item => item.id !== id);
         console.log('Nível excluído com sucesso!');
    })
  }

}
