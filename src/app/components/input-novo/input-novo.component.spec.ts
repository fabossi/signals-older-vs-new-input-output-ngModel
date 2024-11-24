import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNovoComponent } from './input-novo.component';

describe('InputNovoComponent', () => {
  let component: InputNovoComponent;
  let fixture: ComponentFixture<InputNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputNovoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
