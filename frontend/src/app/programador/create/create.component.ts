import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProgramadorService } from 'src/app/services/programador.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    form!: FormGroup;

    constructor(
      public programadorService: ProgramadorService,
      private router: Router
    ) { }
  
    ngOnInit(): void {
  
      this.form = new FormGroup({
        nome:  new FormControl(''),
        sexo:  new FormControl(''),
        data_nascimento:  new FormControl(''),
        idade:  new FormControl(''),
        hobby:  new FormControl(''),
        endereco:  new FormControl(''),
        nivel:  new FormControl(''),
      });
  
    }
  
    get f(){
      return this.form.controls;
    }
  
  
    submit(){
      console.log(this.form.value);
      this.programadorService.create(this.form.value).subscribe(res => {
           console.log('Cadastrado com sucesso!');
           this.router.navigateByUrl('programador');
      })
    }
  
  }