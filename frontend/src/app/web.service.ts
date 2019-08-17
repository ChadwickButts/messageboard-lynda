import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs';

@Injectable()
export class WebService {

    constructor(private http: HttpClient) {} 

    getMessages() {
        return this.http.get('localhost:1234/messages').toPromise();
    }
}