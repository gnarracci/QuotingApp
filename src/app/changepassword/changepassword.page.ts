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
import { FunctionsService } from "../functions.service";
import { MenuController } from "@ionic/angular";
import { DataService } from "../data.service";
import { WoocommerceService } from "../providers/woocommerce.service";

@Component({
  selector: "app-changepassword",
  templateUrl: "./changepassword.page.html",
  styleUrls: ["./changepassword.page.scss"]
})
export class ChangepasswordPage implements OnInit {
  password: string = "";
  repassword: string = "";
  userid: any;

  constructor(
    public fun: FunctionsService,
    private menuCtrl: MenuController,
    private dataService: DataService,
    private wooCommerce: WoocommerceService
  ) {}

  ngOnInit() {
    this.userid = this.dataService.current_user.id;
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false, "end");
    this.menuCtrl.enable(false, "start");
  }

  changePassword() {
    if (this.password !== this.repassword) {
      this.fun.presentToast("Enter same password", true, "bottom", 2000);
    } else {
      this.wooCommerce.changePassword(this.userid, this.password).then(res => {
        this.fun.presentToast(
          "Password changed successfully!",
          true,
          "bottom",
          2000
        );
        this.fun.back();
      });
    }
  }
}
