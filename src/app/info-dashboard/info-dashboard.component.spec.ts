import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDashboardComponent } from './info-dashboard.component';

describe('InfoDashboardComponent', () => {
  let component: InfoDashboardComponent;
  let fixture: ComponentFixture<InfoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
