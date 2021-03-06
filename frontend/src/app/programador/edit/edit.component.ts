import { NivelService } from './../../services/nivel.service';
import { Programador } from './../../entities/programador';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProgramadorService } from 'src/app/services/programador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Nivel } from 'src/app/entities/nivel';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  programador!: Programador;
  form!: FormGroup;
  nivelList: Array<Nivel> = [];

  sexos = [
    { id: 1, name: "Masculino" },
    { id: 2, name: "Feminino" },
    { id: 3, name: "Outro" },
  ];

  constructor(
    public programadorService: ProgramadorService,
    private route: ActivatedRoute,
    private router: Router,
    private nivelService: NivelService,
    private fb:FormBuilder,
  ) {
    this.loadNivelList();
   }

  ngOnInit(): void {

    this.loadNivelList();
    
    this.id = this.route.snapshot.params['id'];
    this.programadorService.find(this.id).subscribe((data: Programador)=>{
      this.programador = data;
    });

    this.form = this.fb.group({
        sexo: [null]
    });

    this.form = new FormGroup({
        nome:  new FormControl(''),
        endereco: new FormControl(''),
        sexo:  new FormControl('') ,
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
    this.programadorService.update(
        this.id, 
        this.form.value
        ).subscribe(res => {
         console.log('Dados atualizados com sucesso!');
         this.router.navigateByUrl('programador');
    })
  }

  loadNivelList(): void {
    this.nivelService.getAll().subscribe((data:Nivel[])=>{
        this.nivelList= data;  
     }) 
  }

}
