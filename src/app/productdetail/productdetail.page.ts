/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */
import { Component, OnInit, ViewChild } from "@angular/core";
import { FunctionsService } from "../functions.service";
import { DataService, Product, HomeTab } from "../data.service";
import {
  IonSlides,
  MenuController,
  NavController,
  IonContent,
  ToastController
} from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
import { WoocommerceService } from "../providers/woocommerce.service";
import { Storage } from "@ionic/storage";
import { async } from "q";

@Component({
  selector: "app-productdetail",
  templateUrl: "./productdetail.page.html",
  styleUrls: ["./productdetail.page.scss"]
})
export class ProductdetailPage implements OnInit {
  @ViewChild('Slides') slides: IonSlides;
  @ViewChild('Content') content: IonContent;
  @ViewChild('slider') slider: IonSlides;

  index = 0;
  segment = "";

  data: Array<HomeTab> = [];
  cartItems: number = 0;
  product: any;

  constructor(
    private menuCtrl: MenuController,
    public fun: FunctionsService,
    private dataService: DataService,
    private nav: NavController,
    private activatedRoute: ActivatedRoute,
    private wooCommerce: WoocommerceService,
    private toast: ToastController,
    private storage: Storage
  ) {
    let productId = this.activatedRoute.snapshot.paramMap.get("pid");
    wooCommerce.getProduct(productId).then(proData => {
      this.product = proData;
    });
    // this.product = dataService.current_product;
    this.data = dataService.item_tab;
    this.segment = this.data[0].title;
    this.fun.updateBehaviourValue();
  }

  ngOnInit() {
    this.fun.cartItems.subscribe(val => {
      this.cartItems = val;
    });
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false, "start");
    this.menuCtrl.enable(false, "end");
  }

  async change() {
    await this.slides.getActiveIndex().then(d => (this.index = d));
    this.segment = this.data[this.index].title;
    console.log('this.index',this.index,'data',this.data.length)
    this.drag();
  }

  onReviewClick(index) {
    this.segment = this.data[index].title;
    this.index = index;
    this.slides.slideTo(index);
    this.content.scrollToTop();
    this.drag();
  }

  goToCart() {
    this.storage.get(`product_${this.product.id}`).then(async data => {
      if (data) {
        const toast = await this.toast.create({
          message: "Item already in Cart",
          duration: 2000
        });
        toast.present();
      } else {
        const toast = await this.toast.create({
          message: "Added to Cart",
          duration: 2000
        });
        toast.present();
        this.storage
          .set(`product_${this.product.id}`, JSON.stringify(this.product))
          .then(() => {
            this.fun.updateCartBadge();
          });
      }
    });
  }

  update(i) {
    this.slides.slideTo(i);
  }

  drag() {
    let distanceToScroll = 0;
    for (let index in this.data) {
      if (parseInt(index) < this.index) {
        distanceToScroll =
          distanceToScroll +
          document.getElementById("seg_" + index).offsetWidth + 24;
          document.getElementById("dag").scrollLeft = this.index * 150;
      }
    }
    document.getElementById("dag").scrollLeft = distanceToScroll;
  }

  seg(event) {
    this.segment = event.detail.value;
  }
}
