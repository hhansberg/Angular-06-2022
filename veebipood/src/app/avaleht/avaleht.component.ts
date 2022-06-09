import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {
  s6naline = "jutumärkide sees olev väärtus"; // toote nimi, kirjeldus, pildi URL, poe nimi, aadress, lahtioleku aeg jne
  numbriline = 56; // toote hind
  kahendV22rtus = true; // kas toode on aktiivne
  constructor() { } // failide ühendamiseks

  ngOnInit(): void { // käimamineku funktsioon - kui minnakse selle lehe peale, pannakse selle funktsiooni
    // sisu käima
  }
  muudaS6nalineV22rtus() {
    this.s6naline = "Uus väärtus";
  }

  muudaS6nalineV22rtusTagasi() {
    this.s6naline = "jutumärkide sees olev väärtus";
  }
  
  muudaNumbrilineV22rtus() {
    this.numbriline = 6543;
  }

  muudaNumbrilineV22rtusTagasi() {
    this.numbriline = 56;
  }
}
