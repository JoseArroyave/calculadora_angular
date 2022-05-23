import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aplicacion calculadora';
  resultadoPadre: number;

  mostrarResultado(resultado: number) {
    this.resultadoPadre = resultado
  }
}
