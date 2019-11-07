import { LoggerService } from "./logger.services"
import { Injectable } from "@angular/core"

@Injectable()
export class UserService {
    email: string
    password: string

    constructor(private loggerService: LoggerService){}

    login(){
        this.loggerService.showMessage("User Logged")
    }
}