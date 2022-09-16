import { Component } from '@angular/core';

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
    model: 2014,
    motor: 1200,
    marca: 'chevrolet',
  };
}
