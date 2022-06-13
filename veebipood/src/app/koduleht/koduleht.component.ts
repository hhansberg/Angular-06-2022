import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-koduleht',
  templateUrl: './koduleht.component.html',
  styleUrls: ['./koduleht.component.css']
})
export class KodulehtComponent implements OnInit {
viimatiLisatudToode = localStorage.getItem("toode");
tooted = [];

  constructor() { }

  ngOnInit(): void {
    let lsTooted = localStorage.getItem("tooted");
    let tooted = [];
    if (lsTooted !== null){
      this.tooted = JSON.parse(lsTooted);
    }
  }
lisaostukorvi(toode: string) {
  
  let lsostukorv = localStorage.getItem("ostukorv");
  let ostukorv = [];
  if (lsostukorv !==null) {
   ostukorv = JSON.parse(lsostukorv);
  }
   ostukorv.push(toode);
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
  }

}
