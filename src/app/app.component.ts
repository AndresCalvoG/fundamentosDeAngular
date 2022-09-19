import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Product } from '../app/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //segundo curso de Angular
  products: Product[] = [
    {
      id: '1',
      name: 'product 1',
      image: '../../../assets/images/product.jpeg',
      price: 100,
    },
    {
      id: '2',
      name: 'product 1',
      image: '../../../assets/images/product.jpeg',
      price: 100,
    },
    {
      id: '3',
      name: 'product 1',
      image: '../../../assets/images/product.jpeg',
      price: 100,
    },
  ];
  imgParent: string = 'https://www.w3schools.com/howto/img_avatar.png';
  onLoaded(img: string) {
    console.log('log padre ' + img);
  }
}
