import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//Decorador: le dicen al compilador como se comporta esa clase
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit {
  @Input() img: string = ''; //para recibir datos desde un componente padre
  @Output() loaded = new EventEmitter<string>(); // para enviar datos al componente padre

  imgDefault: string = '../../../assets/images/default-image-620x600.jpg';
  constructor() {}

  ngOnInit(): void {}
  imgError() {
    this.img = this.imgDefault;
  }
  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
