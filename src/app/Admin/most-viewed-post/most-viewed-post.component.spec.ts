import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostViewedPostComponent } from './most-viewed-post.component';

describe('MostViewedPostComponent', () => {
  let component: MostViewedPostComponent;
  let fixture: ComponentFixture<MostViewedPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostViewedPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostViewedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
