import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { RegionsListComponent } from './regions-list.component';
import { Input, ViewChild, Component } from '@angular/core';
import { Region } from '@pf/api';

@Component({
  selector: 'pf-host',
  template: '<pf-regions-list [regions]="regions"></pf-regions-list>'
})
class TestHostComponent {
  @Input() regions: Region[];
  @ViewChild(RegionsListComponent, { static: false })
  componentRegionListComponent: RegionsListComponent;
}

describe('RegionsListComponent', () => {
  let hostComponent: TestHostComponent;
  let regionListFixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, RouterModule],
      declarations: [RegionsListComponent, TestHostComponent]
    }).compileComponents();

    regionListFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = regionListFixture.componentInstance;
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(RegionsListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Specific name for region', () => {
    fakeAsync(() => {
      hostComponent.regions = [
        {
          id: 'IdTest',
          code: 'CodeTest',
          iso2code: 'IsoCodeTest',
          name: 'Test name'
        }
      ];
      regionListFixture.detectChanges();
      expect(regionListFixture.debugElement.query(By.css('.region__name'))
      .nativeElement.textContent.trim())
      .toEqual(hostComponent.componentRegionListComponent.regions[0].name);
    });
  });
});
