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
import { Injectable } from '@angular/core';
import { FnService } from '../util/fn.service';
import { GlyphService } from '../svg/glyph.service';
import { KeyService } from '../util/key.service';
import { LogService } from '../../log.service';
import { WebSocketService } from '../remote/websocket.service';

/**
 * ONOS GUI -- Layer -- Veil Service
 *
 * Provides a mechanism to display an overlaying div with information.
 * Used mainly for web socket connection interruption.
 */
@Injectable()
export class VeilService {

  constructor(
    private fs: FnService,
    private gs: GlyphService,
    private ks: KeyService,
    private log: LogService,
    private wss: WebSocketService
  ) {
      this.log.debug('VeilService constructed');
  }

}
