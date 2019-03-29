import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  user: any = [];
  constructor(private userService: UserService) {
    this.getAll();
  }

  getAll() {
    this.userService.getAll().then((data: any) => {
      console.log(data);
      this.user = data.data;
    })
  }

  addData() {
    let data = {
      "name": "sompong",
      "age": "24",
      "tel": "0884321432"
    }
    this.userService.addData(data).then((data: any) => {
      this.getAll();
    })
  }

  updateData(id) {
    let data = {
      "name": "sompong",
      "age": "24",
      "tel": "0884321432"
    }
    this.userService.updateData(data, id).then((data: any) => {
      this.getAll();
    })
  }

  deleteData(id) {
    this.userService.deleteData(id).then((data: any) => {
      this.getAll();
    })
  }

  ngOnInit() {
  }

}
