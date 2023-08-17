import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInFlowLayoutComponent } from './basic-in-flow-layout.component';

describe('BasicInFlowLayoutComponent', () => {
  let component: BasicInFlowLayoutComponent;
  let fixture: ComponentFixture<BasicInFlowLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicInFlowLayoutComponent]
    });
    fixture = TestBed.createComponent(BasicInFlowLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
