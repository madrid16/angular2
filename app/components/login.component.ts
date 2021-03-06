import {Component} from "@angular/core";
import {AuthService, User} from "../services/auth.service";


@Component({
    selector: 'login-form',
    template: `
        <p>Shop Private</p>
        <form (ngSubmit)="login()" #loginForm="ngForm">
        
            <div *ngIf="error" class="error">{{error}}</div>
            
            <label>Email:</label>
            <input type="text" required autocomplete="off" [(ngModel)]="user.email" placeholder="email" name="email">
            
            <label>Password</label>
            <input type="password" required [(ngModel)]="user.password" placeholder="your password" name="password">
            
            <button type="submit">Submit</button>
        </form>
    `,
    providers: [AuthService]
})

export class LoginComponent{
    user : User;
    error : string;

    constructor(private auth: AuthService){
        this.user = {email: null, password: null}
    }

    login(){
        if (!this.auth.login(this.user)){
            this.error = 'Incorrect Password';
        }
    }
}