import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from './services/http-service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';

  constructor(private _httpService: HttpService) {}
}