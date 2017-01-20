import {Component, OnInit} from "@angular/core";
import {Course} from "../common/course";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {ApiService} from "../services/api.services";

@Component({
    selector: 'detail',
    template: `
        <div class="detail-course" *ngIf="course">
            <img [src]="course.image">
             <h2>{{course.name}}</h2>
             <span class="number">
                Cost of {{course.price | currency: 'USD': true : '1.2-2'}}    
             </span>
             <p>
                {{course.description}} By {{course.instructor}}
            </p>
        </div>
    `,
    providers: [ApiService]
})

export class CourseDetail implements OnInit{
    course: Course;
    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private ApiService: ApiService
    ){

    }

    ngOnInit(){
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.ApiService.getCourse(id)
                .then(course => this.course = course);
        })
    }
}