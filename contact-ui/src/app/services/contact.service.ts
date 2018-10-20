import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const headerOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class ContactService {
  private url: string = "http://localhost:8080/api/v1/contacts";
  constructor(private http: HttpClient) {}

  getContacts() {
    return this.http.get(this.url);
  }

  getContact(id: number) {
    return this.http.get(this.url + "/" + id);
  }

  createContact(contact){
    let body = JSON.stringify(contact);
    return this.http.post(this.url, body, headerOptions);
  }
}
