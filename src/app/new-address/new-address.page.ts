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
import { DataService, Address } from "../data.service";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { MenuController } from "@ionic/angular";
import { WoocommerceService } from "../providers/woocommerce.service";

@Component({
  selector: "app-new-address",
  templateUrl: "./new-address.page.html",
  styleUrls: ["./new-address.page.scss"]
})
export class NewAddressPage implements OnInit {
  address: any = {
    first_name: "",
    last_name: "",
    address_1: "",
    address_2: "",
    country: "",
    state: "",
    city: "",
    postcode: undefined,
    phone: undefined
  };

  flag;
  userData: any;
  spinner: boolean = false;
  countries: any;

  constructor(
    private menuCtrl: MenuController,
    private activatedRoute: ActivatedRoute,
    private fun: FunctionsService,
    private dataService: DataService,
    private http: HttpClient,
    private wooCommerce: WoocommerceService
  ) {
    this.get();
    this.flag = this.activatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.userData = this.dataService.current_user;
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false, "start");
    this.menuCtrl.enable(false, "end");
  }

  get() {
    this.http.get("https://restcountries.eu/rest/v2/all").subscribe(d => {
      this.countries = d;
    });
  }

  update() {
    if (
      this.address.first_name == "" ||
      this.address.last_name == "" ||
      this.address.address_1 == "" ||
      this.address.city == "" ||
      this.address.postcode == undefined ||
      this.address.phone == undefined
    ) {
      this.fun.presentToast("Wrong Input", true, "top", 1500);
    } else {
      this.spinner = true;
      this.wooCommerce.updateUser(this.userData, this.address).then(res => {
        this.spinner = false;
        this.dataService.current_user.shipping = this.address;
        this.dataService.current_user.billing = this.address;
        this.fun.presentToast("Success", true, "bottom", 2100);
        this.fun.back();
      });
    }
  }
}
