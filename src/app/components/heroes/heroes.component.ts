import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor(private heroesService: HeroesService,
              private route:Router ) {



   }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    // console.log( this.heroes );


  }
  verHeroe(idx:number){
  // console.log(this.index);
  this.route.navigate(['/heroe',idx]);
  }

}
