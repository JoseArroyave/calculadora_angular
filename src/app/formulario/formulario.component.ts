import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  operandoA: number;
  operandoB: number;

  // Atributo que va a emitir el evento con el resultado de la operación.
  // Este es un componente hijo, emite el resultado de la operación al componente padre quien lo recibirá y lo reemitirá al otro componente hijo para mostrarlo en pantalla. Se hace por medio de un EMIT y un OUTPUT

  // Output de nombre resultado que emitirá un elemento de tipo number
  @Output() resultado = new EventEmitter<number>()
  sumar(): void {
    // Variable local para almacenar el resultado
    let resultado = this.operandoA + this.operandoB

    // Se emite el resultado.
    this.resultado.emit(resultado);
  }
  restar(): void {
    let resultado = this.operandoA - this.operandoB
    this.resultado.emit(resultado);
  }
  multiplicar(): void {
    let resultado = this.operandoA * this.operandoB
    this.resultado.emit(resultado);
  }
  division(): void {
    let resultado = this.operandoA / this.operandoB
    this.resultado.emit(resultado);
  }
  modulo(): void {
    let resultado = this.operandoA % this.operandoB
    this.resultado.emit(resultado);
  }
  potencia(): void {
    let resultado = this.operandoA ** this.operandoB
    this.resultado.emit(resultado);
  }
}
