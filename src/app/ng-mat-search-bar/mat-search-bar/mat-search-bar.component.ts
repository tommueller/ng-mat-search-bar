import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatAutocomplete } from '@angular/material/autocomplete';

import { AbstractControlValueAccessor } from '../util/abstract-value-accessor';

export enum DISPLAY_TYPE {
  SIMPLE,
  FORMCONTROL,
  AUTOCOMPLETE,
  FORMCONTROLANDAUTOCOMPLETE
}

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
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MatSearchBarComponent),
      multi: true
    }
  ]
})
export class MatSearchBarComponent extends AbstractControlValueAccessor<string>
  implements OnInit {
  DISPLAY_TYPE = DISPLAY_TYPE;

  @ViewChild('input') inputElement: ElementRef;

  @Input() formControl: FormControl;
  @Input() matAutocomplete: MatAutocomplete;
  @Input() placeholder = '';

  @Output() onBlur = new EventEmitter<string>();
  @Output() onClose = new EventEmitter<void>();
  @Output() onEnter = new EventEmitter<string>();
  @Output() onFocus = new EventEmitter<string>();
  @Output() onOpen = new EventEmitter<void>();

  mode: DISPLAY_TYPE;
  searchVisible = false;

  ngOnInit() {
    if (!this.formControl && !this.matAutocomplete)
      this.mode = DISPLAY_TYPE.SIMPLE;
    else if (this.formControl && this.matAutocomplete)
      this.mode = DISPLAY_TYPE.FORMCONTROLANDAUTOCOMPLETE;
    else if (this.formControl) this.mode = DISPLAY_TYPE.FORMCONTROL;
    else if (this.matAutocomplete) this.mode = DISPLAY_TYPE.AUTOCOMPLETE;
  }

  public close(): void {
    this.searchVisible = false;
    this.value = '';
    this.updateChanges();
    this.onClose.emit();
  }

  public open(): void {
    this.searchVisible = true;
    this.inputElement.nativeElement.focus();
    this.onOpen.emit();
  }

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
}
