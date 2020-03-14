import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { RegionsListComponent } from './regions-list.component';

describe('RegionsListComponent', () => {
  let component: RegionsListComponent;
  let fixture: ComponentFixture<RegionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, RouterTestingModule],
      declarations: [RegionsListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
