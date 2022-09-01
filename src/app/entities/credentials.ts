import { AuthenticationService } from '../services/authentication.service';
import { HttpHeaders } from '@angular/common/http';

export class Credentials {
  constructor(public username: string, public password: string) {}

  header() {
    return new HttpHeaders({
      authorization: 'Basic ' + (this.username + ':' + this.password),
    });
  }
}
