import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //las variables deben ser publicas para usarlas en el template
  name: string = 'andres';
  age: number = 28;
  img =
    'https://static.remove.bg/remove-bg-web/c4b29bf4b97131238fda6316e24c9b3606c18000/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg';
  btnDisabled = true;
  car = {
    model: 2016,
    motor: 1200,
    marca: 'chevrolet',
  };
  names: string[] = ['andres', 'sara', 'felipe', 'calvo'];
  newName = '';
  box = {
    width: 100,
    height: 100,
    background: 'red',
  };
  register = {
    name: '',
    email: '',
    password: '',
  };
  products: Product[] = [
    {
      name: 'product1',
      price: 25,
    },
    {
      name: 'product2',
      price: 28,
    },
    {
      name: 'product2',
      price: 28,
    },
    {
      name: 'product2',
      price: 28,
    },
    {
      name: 'product2',
      price: 28,
    },
    {
      name: 'product2',
      price: 28,
    },
  ];

  onSave() {
    console.log('save');
  }
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
    console.log(event);
  }
  onChange(event: Event) {
    const element = event.target as HTMLInputElement;
    console.log(element.value);
  }
  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(i: number) {
    this.names.splice(i, 1);
  }
  onRegister() {
    console.log(this.register);
  }
}
