import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GreetingResponse,
  GreetingService,
} from 'src/app/shared/greeting.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
})
export class FirstPageComponent implements OnInit {
  getRandomGreeting$!: Observable<GreetingResponse>;

  constructor(private greeting: GreetingService) {}

  ngOnInit(): void {
    this.getRandomGreeting$ = this.greeting.fetchRandom();
  }
}
