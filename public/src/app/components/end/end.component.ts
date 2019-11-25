import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../services/http-service/http.service';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {
	status: any
	NumID: any
	win: boolean
	quote: any


  constructor(
  	private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  	this.NumID = this._route.snapshot.paramMap.get('NumID')
  	this.status = this._route.snapshot.paramMap.get('status')
  	this.setStatus()
  	this.getQuoteFromService()

  }

  setStatus(){
  if(this.status == 'win'){
  	this.win = true;
  }
  else{
  	this.win = false;
  }
}

  getQuoteFromService(){
  	let observable = this._httpService.getQuote(this.NumID)
  	observable.subscribe((data:any) => {
  		this.quote = data.results;
  	})
  }
}
