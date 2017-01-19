"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var auth_service_1 = require("../services/auth.service");
var LoginComponent = (function () {
    function LoginComponent(auth) {
        this.auth = auth;
        this.user = { email: null, password: null };
    }
    LoginComponent.prototype.login = function () {
        if (!this.auth.login(this.user)) {
            this.error = 'Incorrect Password';
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            template: "\n        <p>Shop Private</p>\n        <form (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\n        \n            <div *ngIf=\"error\" class=\"error\">{{error}}</div>\n            \n            <label>Email:</label>\n            <input type=\"text\" required autocomplete=\"off\" [(ngModel)]=\"user.email\" placeholder=\"email\" name=\"email\">\n            \n            <label>Password</label>\n            <input type=\"password\" required [(ngModel)]=\"user.password\" placeholder=\"your password\" name=\"password\">\n            \n            <button type=\"submit\">Submit</button>\n        </form>\n    ",
            providers: [auth_service_1.AuthService]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map