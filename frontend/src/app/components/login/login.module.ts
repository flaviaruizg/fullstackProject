import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, FormsModule, ReactiveFormsModule],
})
export class LoginModule {}


