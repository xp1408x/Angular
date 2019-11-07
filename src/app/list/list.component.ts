import { Component, OnInit } from '@angular/core';
import { AddListService } from '../services/addlist.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  hola: Boolean = false

  constructor(private listUser2: AddListService) { }


  logIn2() {
    this.hola = true
    //this.onLogging.emit()
    
  }
  ngOnInit() {
  }

}
