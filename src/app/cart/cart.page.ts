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
import { Cart, DataService } from "../data.service";
import { FunctionsService } from "../functions.service";
import { InfomodalPage } from "../infomodal/infomodal.page";
import {
  ModalController,
  IonList,
  NavController,
  MenuController,
  AlertController
} from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { WoocommerceService } from "../providers/woocommerce.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.page.html",
  styleUrls: ["./cart.page.scss"]
})
export class CartPage implements OnInit {
  @ViewChild("slidingList") slidingList: IonList;

  customAlertOptions: any = {
    header: "Select Quantity",
    translucent: true
  };

  qty = [];
  baseProducts: any = [];
  code = "";
  show = true;
  // data: Array<Cart> = [];
  cartData: any = [];
  sum: number = 0;
  userId: any;

  constructor(
    private menuCtrl: MenuController,
    public dataService: DataService,
    public fun: FunctionsService,
    private modalController: ModalController,
    private nav: NavController,
    public alertController: AlertController,
    private storage: Storage,
    private wooCommerce: WoocommerceService,
    private route: Router
  ) {
    // this.data = dataService.cart;
    // if (this.data.length == 0) this.show = false;
    for (let i = 1; i <= 5; i++) this.qty.push(i);
  }

  ngOnInit() {
    this.storage
      .forEach((value, key) => {
        let obj = {};
        let parsedData = JSON.parse(value);
        this.cartData.push(parsedData);
        obj["product_id"] = parsedData.id;
        obj["price"] = parseInt(parsedData.price);
        obj["quantity"] = 1;
        this.baseProducts.push(obj);
      })
      .then(() => {
        console.log(this.baseProducts);
        this.dataService.cart = this.baseProducts;
      });
    // this.userId = this.dataService.current_user.user_email;
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, "start");
    this.menuCtrl.enable(false, "end");
  }

  async open_modal(b) {
    let modal;
    if (b) {
      modal = await this.modalController.create({
        component: InfomodalPage,
        componentProps: {
          value: this.dataService.terms_of_use,
          title: "Terms of Use"
        }
      });
    } else {
      modal = await this.modalController.create({
        component: InfomodalPage,
        componentProps: {
          value: this.dataService.privacy_policy,
          title: "Privacy Policy"
        }
      });
    }
    return await modal.present();
  }

  calculatePrice() {
    this.sum = 0;
    let temp = 0;
    this.baseProducts.forEach(product => {
      temp = product.price * product.quantity;
      this.sum += temp;
    });
    return this.sum;
  }

  // calculate(i) {
  //   let res: number = 0;
  //   if (i == 0) {
  //     for (let j of this.data) {
  //       if (j.product.offer) {
  //         res +=
  //           this.fun.calculate(j.product.cost_price, j.product.discount) *
  //           j.quantity;
  //       } else {
  //         res += j.product.cost_price * j.quantity;
  //       }
  //     }
  //   }
  //   if (i == 1) {
  //     for (let j of this.data) {
  //       res += j.product.shipping;
  //     }
  //   }
  //   return res;
  // }

  fix(a) {
    return a.toFixed(2);
  }

  checkout() {
    this.fun.navigate("Checkout", true);
    // this.wooCommerce.createOrder(this.cartData, this.userId).then(res => {
    //   console.log(res);
    // });
  }

  changeQuantity(val) {
    console.log(val);
    this.baseProducts.forEach(pro => {
      if (pro.product_id == val.product_id) {
        pro.quantity = val.quantity;
      }
    });
    console.log(this.baseProducts);
    this.dataService.cart = this.baseProducts;
  }

  // add() {
  //   let res = this.calculate(1) + this.calculate(0);
  //   return res;
  // }

  browse() {
    this.fun.navigate("/home", false);
  }

  remove(j, item) {
    let pid = item.id;
    this.cartData.splice(j, 1);
    console.log(this.cartData);
    this.storage.remove(`product_${pid}`);
    if (this.cartData.length === 0) {
      this.show = false;
    }
  }
}
