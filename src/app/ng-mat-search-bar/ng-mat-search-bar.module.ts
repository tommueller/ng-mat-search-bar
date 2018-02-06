import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule, MatInputModule, MatRippleModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSearchBarComponent } from './mat-search-bar/mat-search-bar.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule
  ],
  exports: [
    MatSearchBarComponent
  ],
  declarations: [
    MatSearchBarComponent
  ]
})
export class NgMatSearchBarModule { }
