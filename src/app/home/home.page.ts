/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */
import { Component, ViewChild } from "@angular/core";
import { MenuController, IonSlides } from "@ionic/angular";
import { FunctionsService } from "../functions.service";
import { DataService, HomeTab, Product } from "../data.service";
import { ActivatedRoute } from "@angular/router";
import { WoocommerceService } from "../providers/woocommerce.service";
import { HttpClient } from "@angular/common/http";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  @ViewChild('Slides')slides: IonSlides;

  segment = "";
  index = 0;
  data: Array<HomeTab> = [];
  sponsored: Array<Product> = [];
  products: any;
  product_data_1: Array<Product> = [];
  product_data_2: Array<Product> = [];
  product_data_3: Array<Product> = [];
  product_data_4: Array<Product> = [];
  product_data_5: Array<Product> = [];
  slideOpts = {
    effect: "flip",
    zoom: false
  };

  menuTabs: any = [];
  cartItems: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private menuCtrl: MenuController,
    public fun: FunctionsService,
    private dataService: DataService,
    public WC: WoocommerceService,
    private http: HttpClient,
    private storage: Storage
  ) {
    this.sponsored = dataService.sponsored;
    this.product_data_1 = dataService.products_1;
    this.product_data_2 = dataService.products_2;
    this.product_data_3 = dataService.products_3;
    this.product_data_4 = dataService.products_4;
    this.product_data_5 = dataService.products_5;
    this.storage.forEach(item => {
      this.cartItems += 1;
    });
    this.getTabs();
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, "start");
    this.menuCtrl.enable(true, "end");
  }

  getProductData(tagId) {
    let query = this.WC.getProducts();
    let fullQuery = `${query}&tag=${tagId}`;
    this.http.get(fullQuery).subscribe(data => {
      this.products = data;
    });
  }

  getTabs() {
    this.WC.getTags().then(tabs => {
      this.segment = tabs[0].name;
      this.getProductData(tabs[0].id);
      this.menuTabs = tabs;
    });
  }

  seg(event) {
    console.log(event.detail.value);
    this.segment = event.detail.value;
  }

  drag() {
    let distanceToScroll = 0;
    for (let index in this.menuTabs) {
      if (parseInt(index) < this.index) {
        distanceToScroll =
          distanceToScroll +
          document.getElementById("seg_" + index).offsetWidth +
          24;
      }
    }
    document.getElementById("dag").scrollLeft = distanceToScroll;
  }

  preventDefault(e) {
    e.preventDefault();
  }

  async change() {
    if (this.products && this.products.length) {
      this.products.length = 0;
    }
    await this.slides.getActiveIndex().then(data => (this.index = data));
    this.segment = this.menuTabs[this.index].name;
    let tagId = this.menuTabs[this.index].id;
    this.getProductData(tagId);
    this.drag();
  }

  side_open() {
    this.menuCtrl.toggle("end");
  }

  update(i) {
    console.log('i',i)
    this.slides.slideTo(i).then((res) => console.log('responseSlideTo', res));;
  }
}
