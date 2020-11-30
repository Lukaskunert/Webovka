import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IUserEntity, UsersService} from "../users.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  private user: IUserEntity;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly usersService: UsersService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(p => {
      const id = p.get('id');
      const idNum = parseInt(id, 10);
      this.usersService.getUserById(idNum)
        .subscribe(u => this.user = u);
            u => this.user = u,
            e = > {
              console.error(e);
              this.router.navigateByUrl('/users')
      }
    });
  }

}
