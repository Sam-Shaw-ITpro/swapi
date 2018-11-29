import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swapiform',
  templateUrl: './swapiform.component.html',
  styleUrls: ['./swapiform.component.css']
})

export class SwapiformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  findData(dropdown, newSearch) {
console.log(newSearch);
console.log(dropdown);


  }


}
