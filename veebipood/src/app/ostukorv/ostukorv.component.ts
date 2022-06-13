import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {
ostukorvitooted: string[] = []
 

constructor() { }

  ngOnInit(): void {
    let lsostukorv = localStorage.getItem("ostukorv");
    let ostukorv = [];
    if (lsostukorv !==null) {
    this.ostukorvitooted = JSON.parse(lsostukorv);
    }
    console.log("läksin ostukorvi komponenti");
  }

  lisaostukorvi(toode: string) {
this.ostukorvitooted.push(toode);
localStorage.setItem("ostukorv", JSON.stringify(this.ostukorvitooted));
  }

  eemaldaostukorvist(toode: string) {
let index = this.ostukorvitooted.indexOf(toode);
this.ostukorvitooted.splice(index, 1);
localStorage.setItem("ostukorv", JSON.stringify(this.ostukorvitooted));
  }

  tyhjenda() {
    this.ostukorvitooted = [];
    localStorage.setItem("ostukorv", JSON.stringify(this.ostukorvitooted));
  }
}
