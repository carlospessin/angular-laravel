import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Nivel } from '../../entities/nivel';
import { NivelService } from '../../services/nivel.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  nivel!: Nivel;
  form!: FormGroup;

  constructor(
    public nivelService: NivelService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.nivelService.find(this.id).subscribe((data: Nivel)=>{
      this.nivel = data;
    });

    this.form = new FormGroup({
      nivel:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.nivelService.update(this.id, this.form.value).subscribe(res => {
         console.log('Nível atualizado com sucesso!');
         this.router.navigateByUrl('nivel');
    })
  }

}
