import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TataraAbueloComponent } from './tatara-abuelo.component';

describe('TataraAbueloComponent', () => {
  let component: TataraAbueloComponent;
  let fixture: ComponentFixture<TataraAbueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TataraAbueloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TataraAbueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
