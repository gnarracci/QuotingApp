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
import { MenuController, ModalController, Platform } from "@ionic/angular";
import { InfomodalPage } from "../infomodal/infomodal.page";
import { DataService } from "../data.service";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { AuthService } from "../providers/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  email = "";
  password = "";
  spinner: boolean = false;
  disableBtn: boolean = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    public fun: FunctionsService,
    private menuCtrl: MenuController,
    private modalController: ModalController,
    private data: DataService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    let token = localStorage.getItem("access_token");
    if (token) {
      this.auth.getUser(token).then(res => {
        this.data.current_user = res[0];
      });
      this.spinner = false;
      this.fun.navigate("home", false);
    }
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false, "start");
    this.menuCtrl.enable(false, "end");
    this.splashScreen.hide();
  }

  signin() {
    this.platform.ready().then(() => {
      if (this.fun.validateEmail(this.email) && this.password != "") {
        this.spinner = true;
        this.disableBtn = true;
        this.auth.loginUser(this.email, this.password).then(data => {
          if (data["token"]) {
            this.auth.getUser(data["user_email"]).then(res => {
              this.data.current_user = res[0];
            });
            localStorage.setItem("access_token", data["user_email"]);
            this.disableBtn = false;
            this.spinner = false;
            this.fun.navigate("home", false);
          } else {
            this.disableBtn = false;
            this.spinner = false;
            this.fun.presentToast(
              "Incorrect input details!",
              true,
              "bottom",
              2100
            );
          }
        });
      } else {
        this.fun.presentToast("Wrong Input!", true, "bottom", 2100);
      }
    });
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
