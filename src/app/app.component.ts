import { Component,OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angModUser';
  ngOnInit(): void {
    console.log('ngInit()')
    $(document).ready(() => {
      console.log('The document ready!')
    });
  }
}
