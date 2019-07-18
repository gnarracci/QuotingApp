/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */

import { Component, OnInit } from "@angular/core";
import { MenuController, NavController } from "@ionic/angular";
import { DataService } from "../data.service";

@Component({
  selector: "app-profile-page",
  templateUrl: "./profile-page.page.html",
  styleUrls: ["./profile-page.page.scss"]
})
export class ProfilePagePage implements OnInit {
  userData: any;

  constructor(
    private menuCtrl: MenuController,
    public data: DataService,
    private nav: NavController
  ) {
    this.userData = this.data.current_user;
    console.log('userData',this.userData)
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.menuCtrl.enable(false, "end");
    this.menuCtrl.enable(true, "start");
  }

  addAddress() {
    this.nav.navigateForward("/NewAddress/$0");
  }
}
