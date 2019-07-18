/**
* Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
*
* Copyright © 2018-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source .
*
*/
import { TestBed } from "@angular/core/testing";

import { AuthService } from "./auth.service";

describe("AuthService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
