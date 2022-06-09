import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'veebipood';
programmiKeel = localStorage.getItem("keel");

valiKeel(uusKeel: string){
  localStorage.setItem("keel", uusKeel);
  this.programmiKeel= uusKeel;
}


  }

