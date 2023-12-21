import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDemoObservableChaudComponent } from './page-demo-observable-chaud.component';

describe('PageDemoObservableChaudComponent', () => {
  let component: PageDemoObservableChaudComponent;
  let fixture: ComponentFixture<PageDemoObservableChaudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDemoObservableChaudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDemoObservableChaudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
