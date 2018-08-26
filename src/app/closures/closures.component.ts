import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-closures',
  templateUrl: './closures.component.html'
})
export class ClosuresComponent implements OnInit {
  title = 'Closures';
  walterWhite;
  skylerWhite;
  jessePinkman;
  gusFring;

  ngOnInit(): void {
    this.walterWhite = {
      displayName: 'Walter White',
      greeting(): void {
        console.log(`${this.displayName}: I am the one who knocks.`);
      }
    };

    this.skylerWhite = {
      displayName: 'Skyler White',
      greeting(): void {
        console.log(`${this.displayName}: I can't remember the last time I was happy.`);
      }
    };

    this.jessePinkman = {
      displayName: 'Jesse Pinkman',
      greeting(): void {
        console.log(`${this.displayName}: Science Bitch!`);
      }
    };

    this.gusFring = {
      displayName: 'Gus Fring',
      greeting(): void {
        console.log(`${this.displayName}: Enjoy your food.`);
      }
    };
  }
}
