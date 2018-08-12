import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stock-updater' ;
  product1 = 700;
  product2 = 800;
  product3 = 900;
  // x = document.getElementById(inputbox);
   update() {
    if (this.product1 > 0) {
      this.product1 = this.product1 - 100;
}}
 update1() {
  if (this.product2 > 0) {
    this.product2 = this.product2 - 100;
}}
 update2() {
  if (this.product3 > 0) {
    this.product3 = this.product3 - 100;
}
}
}
