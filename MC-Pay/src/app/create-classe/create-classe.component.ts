import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasseService } from '../classe.service';
import { Classe } from '../classes/classe.model';

@Component({
  selector: 'app-create-classe',
  templateUrl: './create-classe.component.html',
  styleUrls: ['./create-classe.component.css']
})
export class CreateClasseComponent implements OnInit {


   classe : Classe = new Classe();
   submitted = false;


  constructor(private classeService: ClasseService,
    private router: Router) { }

  ngOnInit() {
  }

  newClasse(): void {
    this.submitted = false;
    this.classe = new Classe();
  }

  save() {
    this.classeService
    .createClasse(this.classe).subscribe(data => {
      console.log(data)
      this.classe = new Classe();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/classes']);
  }

}
