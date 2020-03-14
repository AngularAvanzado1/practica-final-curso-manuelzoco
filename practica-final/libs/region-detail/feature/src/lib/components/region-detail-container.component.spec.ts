import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { RegionDetailUiModule } from '@pf/region-detail/ui';
import { RegionDetailContainerComponent } from './region-detail-container.component';

const ActivatedRouteStub = {
  snapshot: {
    data: {}
  }
};

describe('RegionDetailContainerComponent', () => {
  let component: RegionDetailContainerComponent;
  let fixture: ComponentFixture<RegionDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RegionDetailUiModule, RouterTestingModule, TranslateModule.forRoot()],
      declarations: [RegionDetailContainerComponent],
      providers: [
        { provide: ActivatedRoute, useValue: ActivatedRouteStub },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
