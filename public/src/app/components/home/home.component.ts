import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http-service/http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	NumID: any;

  constructor(
   private _httpService: HttpService,
   private _route: ActivatedRoute,
   private _router: Router
   ) { }

  ngOnInit() {
  }

startGame(){
  	this.NumID = this.getRandomInt(6)
  	this._router.navigate(['/game', this.NumID])
  }

getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
}
