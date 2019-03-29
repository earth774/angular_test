import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, ) { }

  getAll() {
    return new Promise((resolve, reject) => {
      this.http.get("http://localhost:8888/CRUDLumen/public/api/v1/getAll")
        .subscribe(data => {
          resolve(data)
        }, error => {
          reject(error)
        })
    })
  }

  addData(data) {
    return new Promise((resolve, reject) => {
      this.http.post("http://localhost:8888/CRUDLumen/public/api/v1/insertData", data, httpOptions)
        .subscribe(data => {
          resolve(data)
        }, error => {
          reject(error)
        })
    })
  }

  updateData(data, id) {
    return new Promise((resolve, reject) => {
      this.http.put("http://localhost:8888/CRUDLumen/public/api/v1/updateData/" + id, data, httpOptions)
        .subscribe(data => {
          resolve(data)
        }, error => {
          reject(error)
        })
    })
  }

  deleteData(id) {
    return new Promise((resolve, reject) => {
      this.http.delete("http://localhost:8888/CRUDLumen/public/api/v1/deleteData/" + id, httpOptions)
        .subscribe(data => {
          resolve(data)
        }, error => {
          reject(error)
        })
    })
  }

}
