import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@sign-up-app/api-interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'sign-up-app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent implements OnInit  {

  user: Observable<User>;
  
  constructor(public activatedRoute: ActivatedRoute) {}
  
  ngOnInit() {
    this.user = this.activatedRoute.paramMap
      .pipe(map(() => { 
        return window.history.state
      }))

      
      
  }

}
