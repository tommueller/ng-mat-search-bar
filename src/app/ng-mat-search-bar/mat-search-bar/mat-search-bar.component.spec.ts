import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSearchBarComponent } from './mat-search-bar.component';

describe('MatSearchBarComponent', () => {
  let component: MatSearchBarComponent;
  let fixture: ComponentFixture<MatSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
