import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClasseService } from '../classe.service';
import { Classe } from '../classes/classe.model';

@Component({
  selector: 'app-classe-details',
  templateUrl: './classe-details.component.html',
  styleUrls: ['./classe-details.component.css']
})
export class ClasseDetailsComponent implements OnInit {

 
  id: number;
  classe : Classe;

  constructor(private route: ActivatedRoute,private router: Router,
    private classeService : ClasseService) { }

  ngOnInit() {
    this.classe = new Classe();

    this.id = this.route.snapshot.params['id'];
    
    this.classeService.getClasse(this.id)
      .subscribe(data => {
        console.log(data)
        this.classe = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['classes']);
  }
}