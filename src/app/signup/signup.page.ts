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
import { MenuController, ModalController } from "@ionic/angular";
import { InfomodalPage } from "../infomodal/infomodal.page";
import { DataService } from "../data.service";
import { AuthService } from "../providers/auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"]
})
export class SignupPage implements OnInit {
  first_name = "";
  last_name = "";
  email = "";
  password = "";
  spinner: boolean = false;
  disableBtn: boolean = false;

  constructor(
    public fun: FunctionsService,
    private menuCtrl: MenuController,
    private modalController: ModalController,
    public data: DataService,
    private auth: AuthService
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.menuCtrl.enable(false, "start");
    this.menuCtrl.enable(false, "end");
  }

  signup() {
    if (
      this.first_name != "" &&
      this.last_name != "" &&
      this.email != "" &&
      this.password != "" &&
      this.fun.validateEmail(this.email)
    ) {
      this.spinner = true;
      this.disableBtn = true;
      this.auth.createUser(this.email, this.email, this.password).then(data => {
        this.data.current_user = data;
        localStorage.setItem("access_token", data["email"]);
        this.spinner = false;
        this.disableBtn = false;
        this.fun.navigate("home", false);
        this.fun.presentToast("Success", true, "bottom", 2100);
      });
    } else {
      this.spinner = false;
      this.disableBtn = false;
      this.fun.presentToast("Wrong Input", true, "bottom", 2100);
    }
  }

  async open_modal(b) {
    let modal;
    if (b) {
      modal = await this.modalController.create({
        component: InfomodalPage,
        componentProps: { value: this.data.terms_of_use, title: "Terms of Use" }
      });
    } else {
      modal = await this.modalController.create({
        component: InfomodalPage,
        componentProps: {
          value: this.data.privacy_policy,
          title: "Privacy Policy"
        }
      });
    }
    return await modal.present();
  }
}
