import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface GreetingResponse {
  type: string;
  greeting: string;
  locale: string;
  language: string;
}

@Injectable({
  providedIn: 'root',
})
export class GreetingService {
  constructor(private http: HttpClient) {}

  fetchRandom = (): Observable<GreetingResponse> => {
    return this.http.get<GreetingResponse>(
      'https://www.greetingsapi.com/random'
    );
  };
}
