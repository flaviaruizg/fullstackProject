import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeRoutingModule } from './change-routing.module';
import { ChangeComponent } from './change.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ChangeComponent],
  imports: [
    CommonModule,
    ChangeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ChangeModule { }
