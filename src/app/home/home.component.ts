import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  hola: Boolean = false
  logIn2() {
    this.hola = true
    //this.onLogging.emit()
    
	}

}
