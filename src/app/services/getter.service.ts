import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetterService {

  constructor(private http: HttpClient) { }

  public getHeaderMenu() {
    this.http.get('https://my-json-server.typicode.com/typicode/demo').subscribe(data => {
      console.log(data);
    })
  }
}
