import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsdetailsComponent } from './blogsdetails.component';

describe('BlogsdetailsComponent', () => {
  let component: BlogsdetailsComponent;
  let fixture: ComponentFixture<BlogsdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogsdetailsComponent]
    });
    fixture = TestBed.createComponent(BlogsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
