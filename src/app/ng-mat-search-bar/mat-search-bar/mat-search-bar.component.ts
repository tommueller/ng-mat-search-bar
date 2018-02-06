import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mat-search-bar',
  templateUrl: './mat-search-bar.component.html',
  styleUrls: ['./mat-search-bar.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('true', style({ width: '*' })),
      state('false', style({ width: '0' })),
      transition('true => false', animate('300ms ease-in')),
      transition('false => true', animate('300ms ease-out'))
    ])
  ]
})
export class MatSearchBarComponent {

  @Output() onBlur = new EventEmitter<string>();
  @Output() onClose = new EventEmitter<void>();
  @Output() onEnter = new EventEmitter<string>();
  @Output() onFocus = new EventEmitter<string>();

  searchVisible = false;

  onBlurring(searchValue: string) {
    if (!searchValue) {
      this.searchVisible = false;
    }
    this.onBlur.emit(searchValue);
  }

  onEnterring(searchValue: string) {
    this.onEnter.emit(searchValue);
  }

  onFocussing(searchValue: string) {
    this.onFocus.emit(searchValue);
  }

  onClosing() {
    this.onClose.emit();
  }

}
