import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';

@Injectable()
export class WebService {

    constructor(private http: HttpClient, private sb: MatSnackBar) {
        this.getMessages();
    }

    BASE_URL = 'http://localhost:63145/api'
    private messageStore;
    private messageSubject = new Subject();

    messages = this.messageSubject.asObservable();

    getMessages(user?) {
        user = (user) ? '/' + user : '';
        this.http.get(this.BASE_URL + '/messages' + user).subscribe(resp => {
            this.messageStore = resp;
            this.messageSubject.next(this.messageStore);
        }, error => {
            this.handleError('Unable to get messages');
        });
    }

    async postMessage(message: object) {
            let response;
            this.http.post(this.BASE_URL + '/messages', message).subscribe(message => {
                response = message;
            }, error => {
                this.handleError('Unable to post message');
            });

            this.messageStore.push(response);
            this.messageSubject.next(this.messageStore);
    }

    private handleError(error: string) {
        this.sb.open(error, 'close', {duration: 2000})
    }
}
