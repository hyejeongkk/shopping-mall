import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule
  ],
  providers: [FormBuilder]
})
export class SharedModule { }
