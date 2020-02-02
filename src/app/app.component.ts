import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchValue1 = '';
  searchValue2 = '';

  control1 = new FormControl('', Validators.required);
  control2 = new FormControl('', Validators.required);

  options: string[] = ['One', 'Two', 'Three'];
}
