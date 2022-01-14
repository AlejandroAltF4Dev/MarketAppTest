import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketsFormComponent } from './markets-form.component';

describe('MarketsFormComponent', () => {
  let component: MarketsFormComponent;
  let fixture: ComponentFixture<MarketsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
