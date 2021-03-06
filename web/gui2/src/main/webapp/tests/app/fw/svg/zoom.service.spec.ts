/*
 * Copyright 2015-present Open Networking Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { TestBed, inject } from '@angular/core/testing';

import { ZoomService } from '../../../../app/fw/svg/zoom.service';

/**
 * ONOS GUI -- SVG -- Zoom Service - Unit Tests
 */
describe('ZoomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZoomService]
    });
  });

  it('should be created', inject([ZoomService], (service: ZoomService) => {
    expect(service).toBeTruthy();
  }));
});
