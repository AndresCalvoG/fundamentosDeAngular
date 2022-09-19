import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

//Decorador: le dicen al compilador como se comporta esa clase
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  @Input() img: string = ''; //para recibir datos desde un componente padre
  @Output() loaded = new EventEmitter<string>(); // para enviar datos al componente padre

  imgDefault: string = '../../../assets/images/default-image-620x600.jpg';
  constructor() {
    //before render
    //don't put async code
    //this method only run once time
    console.log('constructor', 'imgValue => ', this.img);
  }
  ngOnChanges() {
    //before and during render
    //updating changes in inputs  -- many times
    console.log('ngOnChanges', 'imgValue => ', this.img);
  }
  ngOnInit(): void {
    //before render
    //here you can put async code
    //this method only run once time
    console.log('ngOnInit', 'imgValue => ', this.img);
  }
  ngAfterViewInit(): void {
    //after render
    //handler children
    console.log('ngAfterViewInit');
  }
  ngOnDestroy(): void {
    //when component is deleted
    console.log('ngOnDestroy');
  }
  imgError() {
    this.img = this.imgDefault;
  }
  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
