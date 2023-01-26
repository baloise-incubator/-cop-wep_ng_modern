import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GreetingResponse, GreetingService } from 'src/app/shared/greeting.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
})
export class FirstPageComponent {
  getRandomGreeting$!: Observable<GreetingResponse>;

  constructor(greeting: GreetingService) {
    this.getRandomGreeting$ = greeting.fetchRandom();
  }
}
