import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaashreePage } from './maashree-page';

describe('MaashreePage', () => {
  let component: MaashreePage;
  let fixture: ComponentFixture<MaashreePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaashreePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaashreePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
