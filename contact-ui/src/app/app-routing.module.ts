import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ViewContactComponent } from "./components/view-contact/view-contact.component";
import { RegistrationContactComponent } from "./components/registration-contact/registration-contact.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "view/:id",
    component: ViewContactComponent
  },
  {
    path: "registration",
    component: RegistrationContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
