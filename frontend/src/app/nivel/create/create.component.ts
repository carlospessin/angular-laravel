import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NivelService } from '../nivel.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public nivelService: NivelService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  submit(){
    console.log(this.form.value);
    this.nivelService.create(this.form.value).subscribe(res => {
         console.log('Nível criado com sucesso!');
         this.router.navigateByUrl('nivel/index');
    })
  }

}
