import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface GreetingResponse {
  type: string;
  greeting: string;
  locale: string;
  language: string;
}

export const fetchRandomGreeting = (): Observable<GreetingResponse> => {
  return inject(HttpClient).get<GreetingResponse>(
    'https://www.greetingsapi.com/random'
  );
};
