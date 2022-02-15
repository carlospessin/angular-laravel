import { Nivel } from './../../entities/nivel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProgramadorService } from 'src/app/services/programador.service';
import { NivelService } from 'src/app/services/nivel.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    form!: FormGroup;
    nivelList: Array<Nivel> = [];
    sexos = [
        { name: "Masculino" },
        { name: "Feminino" },
        { name: "Outro" },
      ];
    
    constructor(
      public programadorService: ProgramadorService,
      private router: Router,
      private fb:FormBuilder,
      private nivelService: NivelService,
      
    ) {
        this.loadNivelList();
     }
  
    ngOnInit(): void {

        this.loadNivelList();

        this.form = this.fb.group({
            sexo: [null]
        });
  
      this.form = new FormGroup({
        nome:  new FormControl(''),
        endereco:  new FormControl(''),
        sexo:  new FormControl(''),
        data_nascimento:  new FormControl(''),
        idade:  new FormControl(''),
        hobby:  new FormControl(''),
        nivel_id:  new FormControl(''),
      });
    }

    get f(){
      return this.form.controls;
    }
  
    submit(){
      this.programadorService.create(this.form.value).subscribe(res => {
           console.log('Cadastrado com sucesso!');
           this.router.navigateByUrl('programador');
      })
    }

    loadNivelList(): void {
        this.nivelService.getAll().subscribe((data:Nivel[])=>{
            this.nivelList= data;  
         }) 
      }

  }