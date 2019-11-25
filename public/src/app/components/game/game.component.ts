import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http-service/http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
	quote: any
	quoteCopy: any

	NumID: any
	message: any

	answer: any
	answerCopy: any

	arrCrypto: any
	arrCryptoCopy: any

	quoteEncoded: any
	quoteEncodedCopy: any

	arrKey: any
	symbols: any

	punct: any

	quoteLetters: any
	
	used: boolean

	letterRegEx = new RegExp('[a-z]')


  constructor(	
  	private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
  	this.quoteEncodedCopy =[]
  	this.quoteEncoded = ""
  	this.quoteCopy = ""
  	this.quoteLetters = ""
  	this.arrKey = []
  	this.arrCryptoCopy = []
  	this.arrCrypto = []
  	this.answer = ""
  	this.message = ""
  	this.punct = [" ", ".", ",", "?", ":", ";", "'", "!", "-", "(", ")"]
  	this.symbols = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

  	this.NumID = this._route.snapshot.paramMap.get('NumID')

  	this.getQuoteFromService();

  }

  getQuoteFromService(){
  	let observable = this._httpService.getQuote(this.NumID)
  	observable.subscribe((data:any) => {
  		this.quote = data.results;
  		this.startGame()
  	})
  }

  getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
	}

  createCrypto(){
  	this.quoteCopy = this.quote.quote.toLowerCase()
  	for(let i = 0; i< this.quoteCopy.length; i++){
  		if(this.letterRegEx.test(this.quoteCopy[i]) == true){
	  		this.used = false;
	  		for(let z = 0; z < this.arrKey.length; z++){
	  			if(this.arrKey[z] == this.quoteCopy[i]){
	  				this.used = true;
	  			}
	  		}
	  		if(this.used == false){
	  			this.arrKey.push(this.quoteCopy[i]);
	  			let x = this.getRandomInt(this.symbols.length);
	  			this.arrCrypto.push(this.symbols[x])
	  			this.arrCryptoCopy.push(this.symbols[x])
	  			this.symbols.splice(x, 1)
	  		}
	  	}
	}
  }

  createEncode(){
  	console.log(this.quote.quote)
  	console.log(this.quoteCopy)
  	console.log(this.arrKey)
  	console.log(this.arrCrypto)
  	
  	for(let i = 0; i<=this.quoteCopy.length; i++){
  		if(this.letterRegEx.test(this.quoteCopy[i]) == false){
  			this.quoteEncoded += (this.quoteCopy[i]);
  		}
  		else{
	  		for(let z = 0; z < this.arrKey.length; z++){
	  			if(this.quoteCopy[i] == this.arrKey[z]){
	  				this.quoteEncoded += (this.arrCrypto[z])
	  			}
	  		}
	  	}
  	}
  	this.quoteEncodedCopy = this.quoteEncoded.split('')
  	console.log(this.quoteEncoded)
  	console.log(this.quoteEncodedCopy)
  	console.log(this.answer)
  }

  decrypt(){
  	console.log(this.arrCryptoCopy)
  	console.log(this.arrKey)
  	let win = false
  	for(let i = 0; i < this.arrCryptoCopy.length; i++){
  		if(this.arrCryptoCopy[i] == this.arrKey[i]){
  		win = true
  		}
	  	else{
	  		win = false;
	  	}
  	if(win == true){
  		this._router.navigate(['/game', this.quote.NumID, 'win'])
  	}
  	else{
  		this._router.navigate(['/game', this.quote.NumID, 'loss'])
  	}
  }
}

  startGame(){
	this.createCrypto()
	this.createEncode()

  }

}