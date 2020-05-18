import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';




@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {


  heroes:any[] = []
  termino:string;
  constructor( private heroesService: HeroesService,
                private activatedRoute: ActivatedRoute,
                private route: Router ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.heroes = this.heroesService.buscarHeroes( params ['termino']);
      this.termino = params['termino'];
      // console.log(this.heroes);

    });

    
  }
  verHeroe(idx:number){
    console.log(idx);
    // this.route.navigate(['/heroe',idx]);
    }


  }


