import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticated = false;

  constructor(private http: HttpClient) { }

  authenticate(username: String, password:String) {

    const headers = new HttpHeaders({
        authorization : 'Basic ' + (username + ':' + password)
    });

    this.http.get('user', {headers: headers,observe:'response'}).subscribe(response => {
        if (response.ok) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
    });

}
}
