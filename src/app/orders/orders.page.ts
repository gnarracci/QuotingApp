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
import { MenuController, ModalController, NavController } from "@ionic/angular";
import { FunctionsService } from "../functions.service";
import { DataService, Orders } from "../data.service";
import { OrderinfoPage } from "../orderinfo/orderinfo.page";
import { Storage } from "@ionic/storage";
import { WoocommerceService } from "../providers/woocommerce.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.page.html",
  styleUrls: ["./orders.page.scss"]
})
export class OrdersPage implements OnInit {
  orders: any;
  cartItems: number = 0;

  constructor(
    private menuCtrl: MenuController,
    private modalController: ModalController,
    public fun: FunctionsService,
    public dataService: DataService,
    private storage: Storage,
    private wooCommerce: WoocommerceService,
    private nav: NavController
  ) { console.log('current_user',this.dataService.current_user)
    const userId = dataService.current_user['id'] ? dataService.current_user['id'] : 1;
    this.storage.forEach(item => {
      this.cartItems += 1;
    });
    this.wooCommerce.getPastOrders(userId).then(data => {
      this.orders = data;
      console.log('orders',this.orders,this.orders.length <= 0, this.orders.length <= 0)
    });
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.menuCtrl.enable(false, "end");
    this.menuCtrl.enable(true, "start");
  }

  async open(order: any) {
    let modal = await this.modalController.create({
      component: OrderinfoPage,
      componentProps: { value: order }
    });
    return await modal.present();
  }

  startShopping(){
    this.nav.navigateForward('home')
  }
}
