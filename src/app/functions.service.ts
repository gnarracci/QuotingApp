/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  ToastController,
  NavController,
  AlertController
} from "@ionic/angular";
import { DataService } from "./data.service";
import { resolve } from "q";
import { Storage } from "@ionic/storage";
import { Subject, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FunctionsService {
  constructor(
    public dataService: DataService,
    private router: Router,
    private toastController: ToastController,
    private nav: NavController,
    public alertController: AlertController,
    private storage: Storage
  ) {}

  // public cartItems = new Subject<number>();
  public cartItems = new BehaviorSubject(0);

  navigate(link, forward?) {
    if (forward) {
      this.nav.navigateForward("/" + link);
    } else {
      this.router.navigateByUrl("/" + link);
    }
  }

  updateBehaviourValue() {
    let items = 0;
    this.storage
      .forEach(data => {
        items += 1;
      })
      .then(() => {
        this.cartItems.next(items);
      });
  }

  updateCartBadge() {
    let currentItems = this.cartItems.getValue();
    this.cartItems.next(currentItems + 1);
  }

  array(i) {
    let l = [];
    for (let j = 0; j < i; j++) l.push(1);
    return l;
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  checkout() {
    if (this.dataService.current_user.address.length == 0) {
      this.nav.navigateForward("/NewAddress/$1");
    } else {
      this.nav.navigateForward("/Checkout");
    }
  }

  async presentToast(message, show_button, position, duration) {
    const toast = await this.toastController.create({
      message: message,
      showCloseButton: show_button,
      position: position,
      duration: duration
    });
    toast.present();
  }

  back() {
    this.nav.back();
  }

  date(date) {
    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return day + " " + monthNames[monthIndex] + " " + year;
  }

  update(product) {
    this.dataService.current_product = product;
  }

  removeConform(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const alert = await this.alertController.create({
        header: "Confirm!",
        message: "Are you sure you want to remove this item",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: cancel => {
              resolve("cancel");
            }
          },
          {
            text: "Okay",
            handler: ok => {
              resolve("ok");
            }
          }
        ]
      });

      alert.present();
    });
  }

  calculate(price, discount) {
    price = price - (price * discount) / 100;
    return price.toFixed(2);
  }
}
