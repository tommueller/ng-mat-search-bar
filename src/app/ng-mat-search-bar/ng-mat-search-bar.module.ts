import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatIconModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';

import { MatSearchBarComponent } from './mat-search-bar/mat-search-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,

    //Reactive form
    ReactiveFormsModule
  ],
  exports: [MatSearchBarComponent],
  declarations: [MatSearchBarComponent]
})
export class NgMatSearchBarModule { }
