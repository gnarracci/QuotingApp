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
import { DataService } from "../data.service";
import { AlertController, MenuController, NavController } from "@ionic/angular";
import swal from "sweetalert";
import { WoocommerceService } from "../providers/woocommerce.service";
import { Storage } from "@ionic/storage";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.page.html",
  styleUrls: ["./checkout.page.scss"]
})
export class CheckoutPage implements OnInit {
  addNewPayment = false;
  paymentGateways: any;
  address: any = {};
  line_items: any = [];
  payment_method: string;
  payment_method_title: string;
  user: any;
  spinner: boolean = false;
  paymentSelected: boolean = false;

  constructor(
    private menuCtrl: MenuController,
    private nav: NavController,
    private fun: FunctionsService,
    private dataService: DataService,
    private alertController: AlertController,
    private wooCommerce: WoocommerceService,
    private storage: Storage,
    private activeRoute: ActivatedRoute
  ) {
    // console.log(dataService.current_user);

    this.wooCommerce.getPaymentGateways().then(data => {
      console.log(data);
      this.paymentGateways = data;
    });
  }

  ngOnInit() {
    // this.storage
    //   .forEach((value, key) => {
    //     let obj = {};
    //     let parsed = JSON.parse(value);
    //     console.log(parsed);
    //     obj["product_id"] = parsed.id;
    //     obj["quantity"] = 1;
    //     this.line_items.push(obj);
    //   })
    //   .then(() => {
    //     console.log(this.line_items);
    //   });
    this.dataService.cart.forEach(item => {
      let obj = {};
      obj["product_id"] = item["product_id"];
      obj["quantity"] = item["quantity"];
      this.line_items.push(obj);
    });
    console.log(this.line_items);
  }

  ionViewDidEnter() {
    this.address = this.dataService.current_user.shipping;
    this.menuCtrl.enable(false, "start");
    this.menuCtrl.enable(false, "end");
  }

  addPayment() {
    this.addNewPayment = !this.addNewPayment;
  }

  chooseGateway(paymentType) {
    this.paymentSelected = true;
    this.payment_method = paymentType.id;
    this.payment_method_title = paymentType.title;
  }

  changeAddress() {
    this.nav.navigateForward("/NewAddress/$0");
  }

  done() {
    this.spinner = true;
    let orderObj = {};
    orderObj["payment_method"] = this.payment_method;
    orderObj["payment_method_title"] = this.payment_method_title;
    orderObj["customer_id"] = this.dataService.current_user.id;
    orderObj["billing"] = this.address;
    orderObj["shipping"] = this.address;
    orderObj["line_items"] = this.line_items;
    this.wooCommerce.createOrder(orderObj).then(data => {
      this.spinner = false;
      console.log(data);
      this.storage.clear();
      swal("Awesome", "Your have order successfully ","success");
      this.fun.navigate("home", false);
    });
  }

  async back() {
    const alert = await this.alertController.create({
      header: "Are you sure?",
      message: "Do you want to cancel entering your payment info?",
      buttons: [
        {
          text: "Yes",
          cssClass: "mycolor",
          handler: blah => {
            this.fun.back();
          }
        },
        {
          text: "No",
          role: "cancel",
          cssClass: "mycolor",
          handler: () => {}
        }
      ]
    });

    await alert.present();
  }
}
