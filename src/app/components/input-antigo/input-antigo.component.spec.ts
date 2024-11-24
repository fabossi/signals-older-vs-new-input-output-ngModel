import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAntigoComponent } from './input-antigo.component';

describe('InputAntigoComponent', () => {
  let component: InputAntigoComponent;
  let fixture: ComponentFixture<InputAntigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAntigoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputAntigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
