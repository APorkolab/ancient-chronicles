import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JukeboxComponent } from './jukebox.component';

describe('JukeboxComponent', () => {
  let component: JukeboxComponent;
  let fixture: ComponentFixture<JukeboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JukeboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JukeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
