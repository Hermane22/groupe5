import { TestBed } from '@angular/core/testing';

import { TechcoursesService } from './techcourses.service';

describe('TechcoursesService', () => {
  let service: TechcoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechcoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
