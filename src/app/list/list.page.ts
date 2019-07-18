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
import { NotificationsCard } from "../data.service";
import { FunctionsService } from "../functions.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.page.html",
  styleUrls: ["./list.page.scss"]
})
export class ListPage implements OnInit {
  @Input() data: Array<NotificationsCard>;

  constructor(private fun: FunctionsService) {}

  ngOnInit() {}

  getDays(postDate) {
    let d = Date.now();
    let oneDay = 24 * 60 * 60 * 1000;
    let todayTime = new Date(d).getTime();
    let notifDate = new Date(postDate).getTime();

    let days = Math.round(Math.abs(todayTime - notifDate) / oneDay);
    if (days < 1) {
      return "Just now";
    } else {
      return `${days} days ago`;
    }
  }
}
