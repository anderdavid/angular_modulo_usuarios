import { Component,OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'foundation-sites';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angModUser';
  constructor(){
   
  }
  ngOnInit(): void {
    console.log('ngInit()')
    $(document).foundation()
  }
}
