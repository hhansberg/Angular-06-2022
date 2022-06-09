import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lisa-toode',
  templateUrl: './lisa-toode.component.html',
  styleUrls: ['./lisa-toode.component.css']
})
export class LisaToodeComponent implements OnInit {

  uusToode = "";

  constructor() { }

  ngOnInit(): void {
  }

  sisestatoode() {
    localStorage.setItem("toode", this.uusToode);

    
    let lsTooted = localStorage.getItem("tooted");
    let tooted = [];
    if (lsTooted !==null) {
     tooted = JSON.parse(lsTooted);
    }
    tooted.push(this.uusToode);
    localStorage.setItem("tooted", JSON.stringify(tooted));
  }

  // 1. pean võtma localstorage-st tooted massiivi kujul ---> localstorage.getItem
  // 1.1 pean tegema uue tühja massiivi ---> let muutuja on ( = ) tühi massiiv ( [] )
  // 2.2 kui toode on olemas, siis asendan selle tühja massiivi nende toodetega ( if )
  // 2. pean võtma jutumärgid ära ---> JSON.parse ()
  // 3. pean lisama uue toote juurde
  // 4. pean panema jutumärgid tagasi
  // 5. lisan localStorage-sse
}
