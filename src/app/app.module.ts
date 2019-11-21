import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './services/user.services';
import { LoggerService } from './services/logger.services';
import { AddListService } from './services/addlist.service';
import { AddFormComponent } from './add-form/add-form.component';
import { ListComponent } from './list/list.component';

const rutes: Routes = [
  {path: "", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "list", component: ListComponent},
  {path: "add-form", component: AddListService},
  {path: "**", redirectTo: "home"},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddFormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(rutes)
  ],
  providers: [UserService, LoggerService, AddListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
