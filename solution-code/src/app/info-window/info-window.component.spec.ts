import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWindowComponent } from './info-window.component';

import { HttpModule } from '@angular/http';

import { RouterTestingModule } from '@angular/router/testing';

describe('InfoWindowComponent', () => {
  let component: InfoWindowComponent;
  let fixture: ComponentFixture<InfoWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoWindowComponent ],
      imports: [HttpModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a findTurret() function to get data from the data banks', () => {
    // expect(true).toEqual(false);
    expect(typeof(component.findTurret)).toBe('function');
  });

  it('should return a turret object', () => {
    let turretNumber = Math.ceil(Math.random()*16);

      component.findTurret(turretNumber)
      .subscribe((data) => {
        let jsonData = data.json();
        console.log(jsonData);
        expect(typeof(jsonData)).toBe('object');
        expect(typeof(jsonData.turretNumber)).toBe('number');
        expect(typeof(jsonData.damage)).toBe('number');
      });
  });
});
