import {Component} from '@angular/core';
import {CartService} from '../services/cart.service';

@Component({
    selector : 'my-app',
    template:
        `
           <header>Cursos Platzi</header>
           <nav>
                <a routerLink="">Inicio</a>
                <a routerLink="courses">Courses</a>
           </nav>
           <section>
                <router-outlet></router-outlet>
           </section>
        `,
    providers: [CartService]

})

export class AppComponent{}