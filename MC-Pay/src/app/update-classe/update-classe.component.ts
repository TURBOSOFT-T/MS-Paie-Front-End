import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClasseService } from '../classe.service';
import { Classe } from '../classes/classe.model';

@Component({
  selector: 'app-update-classe',
  templateUrl: './update-classe.component.html',
  styleUrls: ['./update-classe.component.css']
})
export class UpdateClasseComponent implements OnInit {



  id: number;
classe : Classe;

  constructor(private route: ActivatedRoute,private router: Router,
    private classeService: ClasseService) { }

  ngOnInit() {
    this.classe = new Classe();

    this.id = this.route.snapshot.params['id'];

    this.classeService.getClasse(this.id)
      .subscribe(data => {
        console.log(data)
        this.classe = data;
      }, error => console.log(error));
  }

  updateClasse() {
    this.classeService.updateClasse(this.id, this.classe)
      .subscribe(data => {
        console.log(data);
        this.classe = new Classe();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateClasse();
  }

  gotoList() {
    this.router.navigate(['/classes']);
  }
}

