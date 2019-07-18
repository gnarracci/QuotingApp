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
import { HomeTab, DataService, Notification } from "../data.service";
import { IonSlides, MenuController } from "@ionic/angular";
import { WoocommerceService } from "../providers/woocommerce.service";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.page.html",
  styleUrls: ["./notification.page.scss"]
})
export class NotificationPage implements OnInit {
  @ViewChild('Slides') slides: IonSlides;

  index = 0;
  segment = "";
  notifications: any;
  notifTags: any;
  data: Array<HomeTab> = [];

  constructor(
    private dataService: DataService,
    private menuCtrl: MenuController,
    private wooCommerce: WoocommerceService
  ) {
    this.data = dataService.notifications_tab;
    this.getTags();
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.menuCtrl.enable(false, "end");
    this.menuCtrl.enable(true, "start");
  }

  async change() {
    if (this.notifications && this.notifications.length) {
      this.notifications.length = 0;
    }
    await this.slides.getActiveIndex().then(d => (this.index = d));
    this.segment = this.notifTags[this.index].name;
    let tagId = this.notifTags[this.index].id;
    this.getPostsData(tagId);
    this.drag();
  }

  getPostsData(pid) {
    this.wooCommerce.getPostsData(pid).then(data => {
      this.notifications = data;
    });
  }

  getTags() {
    this.wooCommerce.getPostsTags().then(data => {
      const items = data["filter"](item => item.id !== 1);
      this.segment = items[0].name;
      this.notifTags = items;
      this.getPostsData(items[0].id);
    });
  }

  update(i) {
    this.slides.slideTo(i);
  }

  drag() {
    // var element : any = document.getElementsByClassName('my-btn')[this.index + 1];
    document.getElementById("dag").scrollLeft = this.index * 150;
  }

  seg(event) {
    this.segment = event.detail.value;
  }
}
