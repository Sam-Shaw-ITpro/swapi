import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetitService } from '../getit.service';

@Component({
  selector: 'app-swapiform',
  templateUrl: './swapiform.component.html',
  styleUrls: ['./swapiform.component.css']
})

export class SwapiformComponent implements OnInit {
  results = ""
  clickMessage = '';
  clickMessage2 = '';
  private _dbUrl = "https://swapi.co/api/"
 
  constructor(private getit: GetitService) { }
   // constructor(private httpClient: HttpClient) { }
  // constructor() { }

  ngOnInit() {
  }

  onClickMe() {
    this.clickMessage = 'Star Wars: The Force Awakens was the GOAT!';
  }

  onClickMe2() {
    this.clickMessage2 = 'Man! Those old Star Wars movies are corny.';
  }


  // getSearch(dropdown, newSearch) : Observable<any> {
  //   return this.httpClient.get<any>(`${this._dbUrl}people/1/?format=json`);
  //   };

  findData(dropdown, newSearch)  {
  this.getit.getSearch(dropdown, newSearch).subscribe(Result => {
      this.results = Result
    
    })
  }
}
  /////////THIS WORKS/////////////
  // findData(dropdown, newSearch)  {
  // console.log(dropdown, newSearch)
  // }

  // : void {
  //   this.getit.getSearch(dropdown, newSearch).subscribe(Result => {
  //   this.results = Result
  //   // console.log(dropdown, newSearch)
  // })
// }


  //  {
  //   this.getit.getSearch(dropdown, newSearch).subscribe(Result => {
  //     this.results = Result
  //     // console.log(Result);
    // } 
    // ); 
    
// }

//   findData(dropdown, newSearch): Observable<Result[]> {
//     this.httpClient.get<any>(`${this._dbUrl}${dropdown}/?search=${newSearch}/?format=json`)
//       .subscribe(Result => {
//       // this.results = Result
//     })
//   }
// }

    //  getSearch() : Observable<any> {
    //   return this.httpClient.get<any>(`${this._dbUrl}people/1/?format=json`);
    //    };

