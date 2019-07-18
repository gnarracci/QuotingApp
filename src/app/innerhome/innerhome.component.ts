/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */
import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../data.service";
import { FunctionsService } from "../functions.service";
import { NavController } from "@ionic/angular";
import { NavigationExtras } from "@angular/router";
import { WoocommerceService } from "../providers/woocommerce.service";

@Component({
  selector: "app-innerhome",
  templateUrl: "./innerhome.component.html",
  styleUrls: ["./innerhome.component.scss"],
  inputs: ["recieved_data"]
})
export class InnerhomeComponent implements OnInit {
  @Input() recieved_data: any;
  productData = [];

  constructor(
    private fun: FunctionsService,
    private nav: NavController,
    private wooCommerce: WoocommerceService
  ) {}

  getRelatedProducts() {
    let pids = this.recieved_data;
    pids.forEach(pid => {
      this.wooCommerce.getProduct(pid).then(productData => {
        this.productData.push(productData);
      });
    });
  }

  ngOnInit() {
    this.getRelatedProducts();
  }

  open(data) {
    let productId = data.id;
    this.nav.navigateForward(`/productdetail/${productId}`);
  }
}
