/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */
import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { DataService } from "./data.service";
import { FunctionsService } from "./functions.service";
import { Storage } from "@ionic/storage";
import { WoocommerceService } from "./providers/woocommerce.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls:['app.component.scss']
})
export class AppComponent {
  side_open = true;
  side_open1 = false;

  public appPages = [
    { title: "Browse", url: "/home", icon: "home" },
    { title: "Search", url: "/search", modal: true, icon: "search" },
    { title: "Notifications", url: "/notification", icon: "notifications" },
    { title: "Shopping Cart", url: "/cart", icon: "cart" },
    { title: "Order History", url: "/orders", icon: "list" },
    { title: "Wish Cash", url: "/wishcash", icon: "wallet" },
    { title: "Rewards", url: "/rewards", icon: "trophy" },
    { title: "Apply Promo", url: "/applypromo", icon: "megaphone" }
  ];
  public appPages1 = [
    { title: "Customer Support", url: "/support", icon: "people" },
    { title: "FAQs", url: "/faqs", icon: "help-circle" },
    { title: "Settings", url: "/settings", icon: "cog" }
  ];

  // colors = [
  //   "Bronze",
  //   "Black",
  //   "Blue",
  //   "Clear",
  //   "Gold",
  //   "Gray",
  //   "Green",
  //   "Multi-Color",
  //   "Orange",
  //   "Pink",
  //   "Red",
  //   "Silver",
  //   "White",
  //   "Yellow",
  //   "Brown",
  //   "Purple",
  //   "Beige"
  // ];

  cartItems: number = 0;
  openMenuName: string;
  attrTerms: any;
  attr: any;

  menu(attr) {
    this.attrTerms = undefined;
    this.side_open = false;
    if (attr.name == "Rating") {
      this.side_open1 = true;
      this.attrTerms = ["test"];
    } else {
      this.attr = attr;
      this.wooCommerce.getAttributeTerms(attr.id).then(data => {
        this.attrTerms = data;
      });
    }
  }

  back() {
    this.side_open = true;
    this.side_open1 = false;
  }

  attributes: any;
  filter: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public dataService: DataService,
    public fun: FunctionsService,
    private storage: Storage,
    private wooCommerce: WoocommerceService
  ) {
    this.storage.forEach(item => {
      this.cartItems += 1;
    });
    this.wooCommerce.getAttributes().then(data => {
      this.attributes = data;
    });
    this.initializeApp();
  }

  selectFilter(term) {
    this.filter = term;
  }

  applyFilter() {
    this.side_open = false;
    this.wooCommerce
      .filterProducts(this.attr.slug, this.filter.id)
      .then(data => {});
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
  }
}
