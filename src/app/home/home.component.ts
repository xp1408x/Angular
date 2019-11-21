import { Component, Input } from '@angular/core';
import { UserService } from '../services/user.services';
import { AddListService } from '../services/addlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Input() info
  
  hola: Boolean = false


  instance: UserService
  text: string

l//ist: Array<string> = ["Pepito", "Juanito", "Jaimito"]

  constructor(service: UserService, private list: AddListService, private router: Router){
    this.instance = service
  }
  logIn2() {
    this.router.navigate(["/"])
    //this.onLogging.emit()
    
  }

  addToList(){
    this.list.list.push(this.text)
  }
  showData(){
    console.log("email", this.instance.email, "password", this.instance.password)
  }
  

}
