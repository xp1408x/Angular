import { Component, Input } from '@angular/core';
import { UserService } from '../services/user.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Input() info
  
  hola: Boolean = false


  instance: UserService

list: Array<string> = ["Pepito", "Juanito", "Jaimito"]

  constructor(service: UserService){
    this.instance = service
  }
  logIn2() {
    this.hola = true
    //this.onLogging.emit()
    
  }
  showData(){
    console.log("email", this.instance.email, "password", this.instance.password)
  }
  

}
