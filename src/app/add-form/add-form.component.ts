import { Component, OnInit } from '@angular/core';
import { AddListService } from '../services/addlist.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  visible: Boolean = false
  newUser: string

  constructor(private listUser: AddListService) { }

  logIn() {
    this.listUser.list.push(this.newUser) 
    
  }
  goToList(){
    this.visible = true
  }

  ngOnInit() {
  }
  sendValue(evt) {
		this.newUser = evt.target.value
	}

}
