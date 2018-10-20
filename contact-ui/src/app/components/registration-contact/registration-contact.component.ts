import { Component, OnInit } from "@angular/core";
import { ContactService } from "../../services/contact.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-registration-contact",
  templateUrl: "./registration-contact.component.html",
  styleUrls: ["./registration-contact.component.css"]
})
export class RegistrationContactComponent implements OnInit {
  constructor(private contactService: ContactService) {}

  public contactform: FormGroup;
  public formMessage: string = "";

  ngOnInit() {
    this.contactform = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      phoneNumber: new FormControl("", Validators.required)
    });
  }

  createContact() {
    if(this.contactform.valid){
      this.formMessage = "Form submitted has been submitted";
      this.contactService.createContact(this.contactform.value).subscribe(
        data => {
          this.contactform.reset();
          return true;
        },
        err => console.error(err)
      );

    } else {
      this.formMessage = "Please fill out the form before submitting";
    }
  }
}
