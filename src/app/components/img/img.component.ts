import { Component, OnInit } from '@angular/core';

//Decorador: le dicen al compilador como se comporta esa clase
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
