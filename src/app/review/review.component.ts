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
import { WoocommerceService } from "../providers/woocommerce.service";

@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.scss"],
  inputs: ["product"]
})
export class ReviewComponent implements OnInit {
  // @Input() product: Product;
  @Input() product: any;
  reviews: any;

  constructor(
    public fun: FunctionsService,
    private wooCommerce: WoocommerceService
  ) {}

  ngOnInit() {
    this.getReviews();
  }

  getReviews() {
    let pid = this.product.id;
    this.wooCommerce.getProductReviews(pid).then(reviews => {
      this.reviews = reviews;
    });
  }
}
