import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

type User = {
  name: string;
  email: string;
};

interface GetUsersResponse {
  users: User[];
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http: HttpClient = inject(HttpClient);

  emailExists(email: string) {
    return this.http.get<GetUsersResponse>('assets/users/users.json').pipe(
      delay(2000),
      map((data) => data.users),
      map((users) => users.map((user: User) => user.email).includes(email))
    );
  }
}
