import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GreetingResponse, GreetingService } from 'src/app/shared/greeting.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
})
export class SecondPageComponent {
  getRandomGreeting$!: Observable<GreetingResponse>;

  constructor(greeting: GreetingService) {
    this.getRandomGreeting$ = greeting.fetchRandom();
  }
}
