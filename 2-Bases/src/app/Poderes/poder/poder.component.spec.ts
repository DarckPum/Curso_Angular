import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoderComponent } from './poder.component';

describe('PoderComponent', () => {
  let component: PoderComponent;
  let fixture: ComponentFixture<PoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
