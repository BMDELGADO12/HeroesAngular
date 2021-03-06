import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

 @Input () heroe:any = {};
 @Input () index: number;

  constructor( private route: Router) { }

  ngOnInit(): void {
  }

  verHeroe (){
    console.log(this.index);
  this.route.navigate(['/heroe',this.index]);
}
  }


