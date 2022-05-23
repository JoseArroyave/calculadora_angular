import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  // El input recibe la información proveniente del padre y, en ester caso, la imprime posteriormente en el html por medio de su componente.
  @Input() resultadoHijo:number;
}
