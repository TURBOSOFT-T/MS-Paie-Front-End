import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { ClasseService } from '../classe.service';
import { Classe } from '../classes/classe.model';
import { ClasseDetailsComponent } from '../classe-details/classe-details.component';

@Component({
  selector: 'app-classe-list',
  templateUrl: './classe-list.component.html',
  styleUrls: ['./classe-list.component.css']
})
export class ClasseListComponent implements OnInit {
  classes: Observable<Classe[]>;

  constructor(private classeService: ClasseService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.classes = this.classeService.getClassesList();
  }

  deleteClasse(id: number) {
    this.classeService.deleteClasse(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  classeDetails(id: number){
    this.router.navigate(['details', id]);
  }

}
