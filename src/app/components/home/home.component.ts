import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   visibili = true;

  constructor() { }

  ngOnInit(): void {
  }
  visibilidad():void{
    var fondo = document.querySelector('.video');
    var miniImg = document.querySelector('.abajo');
    var fondoImg = document.querySelector('.fondo-img');
    var heroes = document.querySelector('.heroes');
    if (this.visibili) {
      fondo.classList.add('oculto');
      miniImg.classList.add('mostrar');
      fondoImg.classList.add('mostrar');
      heroes.classList.add('mostrar');
      

      this.visibili = !this.visibili;


      
    }else{
      fondo.classList.remove('oculto');
      miniImg.classList.remove('mostrar');
      fondoImg.classList.remove('mostrar');
      heroes.classList.remove('mostrar');
      this.visibili = !this.visibili;
    }

  }


}
