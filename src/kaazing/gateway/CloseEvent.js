/**
 * Copyright (c) 2007-2014 Kaazing Corporation. All rights reserved.
 * 
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


// http://dev.w3.org/html5/websockets/#closeevent

/**
 *  Create a new CloseEvent instance.
 *
 *   @name  CloseEvent
 *   @class CloseEvent
 */
function CloseEvent(target_, wasClean_, code_, reason_) {
    this.reason = reason_;
    this.code = code_;
    this.wasClean = wasClean_;
    this.type = "close";
    this.bubbles = true;
    this.cancelable = true;
    this.target = target_;
}

/**
    True if the WebSocket closed cleanly

    @field
    @readonly
    @name       wasClean
    @type       Boolean
    @memberOf   CloseEvent#
*/

/**
    WebSocket close message status code

    @field
    @readonly
    @name       code
    @type       Number
    @memberOf   CloseEvent#
*/

/**
    WebSocket close reason

    @field
    @readonly
    @name       reason
    @type       String
    @memberOf   CloseEvent#
*/

