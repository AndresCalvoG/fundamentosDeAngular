import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
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
  img: string = '';
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    //code
  } //para recibir datos desde un componente padre
  @Output() loaded = new EventEmitter<string>(); // para enviar datos al componente padre

  imgDefault: string = '../../../assets/images/default-image-620x600.jpg';
  // counter = 0;
  // refInterval: number | undefined;

  constructor() {
    //before render
    //don't put async code
    //this method only run once time
    //console.log('constructor', 'imgValue => ', this.img);
  }
  ngOnChanges(change: SimpleChanges) {
    //before and during render
    //updating changes in inputs  -- many times
    //console.log('ngOnChanges', 'imgValue => ', this.img);
    //console.log('change:', change);
  }
  ngOnInit(): void {
    //before render
    //here you can put async code
    //this method only run once time
    //console.log('ngOnInit', 'imgValue => ', this.img);
    // this.refInterval = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter');
    // }, 1000);
  }
  ngAfterViewInit(): void {
    //after render
    //handler children
    //console.log('ngAfterViewInit');
  }
  ngOnDestroy(): void {
    //when component is deleted
    //console.log('ngOnDestroy');
    // window.clearInterval(this.refInterval);
  }

  imgError() {
    this.img = this.imgDefault;
  }
  imgLoaded() {
    //console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
