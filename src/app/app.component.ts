import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //segundo curso de Angular
  showImg = true;

  imgParent: string = 'https://www.w3schools.com/howto/img_avatar.png';
  onLoaded(img: string) {
    console.log('log padre ' + img);
  }
  toggleImg() {
    this.showImg = !this.showImg;
  }
}
