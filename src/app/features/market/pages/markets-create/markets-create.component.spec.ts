import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketsCreateComponent } from './markets-create.component';

describe('MarketsCreateComponent', () => {
  let component: MarketsCreateComponent;
  let fixture: ComponentFixture<MarketsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
