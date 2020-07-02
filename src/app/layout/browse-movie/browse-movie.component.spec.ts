import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseMovieComponent } from './browse-movie.component';
import {CommonService} from '../../common.service';
import { of} from 'rxjs';


describe('BrowseMovieComponent', () => {
  let component: BrowseMovieComponent;
  let fixture: ComponentFixture<BrowseMovieComponent>;



  beforeEach(async(() => {
    const responseArr = [];

    // Create a fake TwainService object with a `getQuote()` spy
    const commonService = jasmine.createSpyObj('CommonService', ['apiCall']);
    // Make the spy return a synchronous Observable with the test data
    const apiCallSpy  = commonService.apiCall.and.returnValue( of(responseArr) );
    TestBed.configureTestingModule({
      declarations: [ BrowseMovieComponent ],
      providers: [ { provide: CommonService, useValue: commonService } ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
