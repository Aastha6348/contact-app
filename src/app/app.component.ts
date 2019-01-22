import { Component, OnInit } from '@angular/core';
import { ContactDataService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'contacts-app';
  constructor() { }

  ngOnInit() {
  }
}
