import { Component, OnInit } from '@angular/core';
//import {Jquery} from 'node_modules/jquery';

//declare var $:Jquery;
@Component({
  selector: 'app-edades',
  templateUrl: './edades.component.html',
  styleUrls: ['./edades.component.css']
})
export class EdadesComponent implements OnInit {

  constructor() { }
  edad:number;
  edad2:number;
  suma:number;
  promedio:number;

  limpiar()
  {
      this.edad = null;
      this.edad2 = null;
      document.getElementById('resultado').hidden=true;

  }

    calcular()
    {
      this.suma = this.edad + this.edad2;
      this.promedio = this.suma/2;


      document.getElementById('resultado').hidden=false;

    }
  ngOnInit(): void {

  }

}
