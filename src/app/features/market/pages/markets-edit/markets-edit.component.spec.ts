import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketsEditComponent } from './markets-edit.component';

describe('MarketsEditComponent', () => {
  let component: MarketsEditComponent;
  let fixture: ComponentFixture<MarketsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
