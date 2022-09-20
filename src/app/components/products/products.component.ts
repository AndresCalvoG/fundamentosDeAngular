import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: '1',
      name: 'product 1',
      image: '../../../assets/images/product.jpeg',
      price: 100,
    },
    {
      id: '2',
      name: 'product 2',
      image: '../../../assets/images/product.jpeg',
      price: 200,
    },
    {
      id: '3',
      name: 'product 3',
      image: '../../../assets/images/product.jpeg',
      price: 150,
    },
    {
      id: '4',
      name: 'product 4',
      image: '../../../assets/images/product.jpeg',
      price: 120,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
