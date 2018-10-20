import { Component, OnInit } from "@angular/core";
import { ContactService } from "../../services/contact.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public contacts;
  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts().subscribe(
      data => {
        this.contacts = data;
        console.log(data);
      },
      err => console.error(err)
    );
  }
}
