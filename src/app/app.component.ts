import { Component } from '@angular/core';

//component decorator
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html', //define html files
  styleUrls: ['./app.component.css'] //define styles
})

//this is all the logic resides
export class AppComponent {
  title = 'app';
}
