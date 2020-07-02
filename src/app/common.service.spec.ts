import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import { CommonService } from './common.service';

describe('CommonService', () => {
  let commonService: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CommonService]
    });
    commonService = TestBed.inject(CommonService);
  });

  it('should be created', () => {
    expect(commonService).toBeTruthy();
  });
});
