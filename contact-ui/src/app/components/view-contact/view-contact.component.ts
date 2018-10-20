import { Component, OnInit } from "@angular/core";
import { ContactService } from "../../services/contact.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-view-contact",
  templateUrl: "./view-contact.component.html",
  styleUrls: ["./view-contact.component.css"]
})
export class ViewContactComponent implements OnInit {
  public contact;
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getContact(this.route.snapshot.params.id);
  }

  getContact(id: number) {
    this.contactService.getContact(id).subscribe(
      data => {
        this.contact = data;
        console.log(data);
      },
      err => console.error(err)
    );
  }
}
