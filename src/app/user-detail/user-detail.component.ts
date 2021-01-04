import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IUserEntity, UsersService} from '../users.service';

@Component({
selector: 'app-user-detail',
templateUrl: './user-detail.component.html',
styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

user: IUserEntity;
username = '';


constructor(
    private readonly  activatedRoute: ActivatedRoute,
    private readonly  usersService: UsersService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(p => {
      const id: string = p.get('id'); // '1'
      const idNum = parseInt(id, 10);
      this.usersService.getUserById(idNum)
        .subscribe(
          (u: IUserEntity) => {
            if (usernameE) {
              this.user = usernameE;
              this.username = usernameE.username;
            } else {
              this.router.navigateByUrl('/users');
            }
          },
          e => {
            console.error(e);
          }
        );
    });
  }

  edit() {
    this.usersService.edit(this.user.id, this.username)
      .subscribe((usernameE: IUserEntity)=>{
        this.user = usernameE;
        this.username = usernameE.username;
        redirect('/users');
      })
  }
}
