import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { RegionsListUiModule } from '@pf/regions-list/ui';
import { RegionsListContainerComponent } from './regions-list-container.component';

const ActivatedRouteStub = {
  snapshot: {
    data: {
      regions: [
        {
          id: '',
          code: '',
          iso2code: '',
          name: ''
        }
      ]
    }
  }
};

describe('RegionsListContainerComponent', () => {
  let component: RegionsListContainerComponent;
  let fixture: ComponentFixture<RegionsListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RegionsListUiModule, RouterTestingModule, TranslateModule.forRoot()],
      declarations: [RegionsListContainerComponent],
      providers: [
        { provide: ActivatedRoute, useValue: ActivatedRouteStub },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
