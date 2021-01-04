import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

export interface IUserEntity {
username: string;
id: number;
password: string;
}
@Injectable({
providedIn: 'root'})
export class UsersService {

private id = 1;
private users: IUserEntity[] = [
{id: 1, username: 'Lukyn', password: '123321'}
];

constructor() {}
  getAllUsers(): Observable<IUserEntity[]> {
    return of(this.users);
  }
  getUserById(id: number): Observable<IUserEntity> {
    let user: IUserEntity;
    for (const u of this.users) {
      if (id === u.id) {
        user = u;
        break;
      }
    }return of(user);
  }
  create(newUsername: string, newPassword: string): Observable<IUserEntity> {
    const newUser: IUserEntity = {id: this.id++, username: newUsername, password: newPassword};
    this.users.push(newUser);
    return of(newUser);
  }
  edit(id: number, username: string): Observable<IUserEntity> {
    for(const usernameE of this.users) {
      if(usernameE.id === id) {
        usernameE.username = username
        return of(usernameE);
      }
    }
    return of(null);
  }
}
