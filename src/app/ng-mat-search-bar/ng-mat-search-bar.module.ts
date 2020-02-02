import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatRippleModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

import { MatSearchBarComponent } from "./mat-search-bar/mat-search-bar.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,

    //Reactive form
    ReactiveFormsModule
  ],
  exports: [MatSearchBarComponent],
  declarations: [MatSearchBarComponent]
})
export class NgMatSearchBarModule {}
