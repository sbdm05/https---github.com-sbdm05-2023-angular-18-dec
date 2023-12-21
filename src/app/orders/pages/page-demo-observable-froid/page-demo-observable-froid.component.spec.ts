import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDemoObservableFroidComponent } from './page-demo-observable-froid.component';

describe('PageDemoObservableFroidComponent', () => {
  let component: PageDemoObservableFroidComponent;
  let fixture: ComponentFixture<PageDemoObservableFroidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDemoObservableFroidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDemoObservableFroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
