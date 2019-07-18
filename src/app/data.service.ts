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
import { WoocommerceService } from "./providers/woocommerce.service";

export interface HomeTab {
  title: string;
}

export interface NotificationsCard {
  image: string;
  title: string;
  time: number;
}

export interface Notification {
  all: Array<NotificationsCard>;
  deals: Array<NotificationsCard>;
  orders: Array<NotificationsCard>;
  others: Array<NotificationsCard>;
}

export interface Product {
  name: string;
  image: Array<string>;
  size: string;
  color: string;
  cost_price: number;
  discount: number;
  offer: boolean;
  stock: number;
  description: string;
  currency: string;
  bought: number;
  shipping: number;
  rating: number;
  rating_count: number;
  store_rate: number;
  store_rating: number;
  store_rating_count: number;
  sold_by: string;
  specs: string;
  reviews: Array<Review>;
  store_reviews: Array<Review>;
  sizing: {
    small: number;
    okay: number;
    large: number;
  };
  buyer_guarantee: string;
  sponsored: Array<Product>;
}
export interface Review {
  image: string;
  name: string;
  comment: string;
  rating: number;
  images: Array<string>;
}
export interface Cart {
  product: Product;
  quantity: number;
}

export interface User {
  fname: string;
  lname: string;
  email: string;
  address: Array<Address>;
  billing: Array<any>;
  uid: string;
  did: string;
  aid: string;
}

export interface Address {
  first_name: string;
  last_name: string;
  address_line_1: string;
  address_line_2: string;
  country: string;
  state: string;
  city: string;
  zipcode: number;
  phone_number: number;
}

export interface Orders {
  product: Product;
  order_date: Date;
  id: string;
  amount: number;
  delivery_date: Date;
  status: string;
  billing_address: Address;
  shipping_address: Address;
  tax: number;
}

@Injectable({
  providedIn: "root"
})
export class DataService {

  constructor(private wooCommerce: WoocommerceService) {}

  current_user_details: any;

  terms_of_use =
    "The Terms and Conditions agreement can act as a legal contract between you, the mobile app owner or developer, and the users of your app. Like a Terms and Conditions for a website, this agreement for a mobile app would set the rules and terms that users must follow in order to use your app." +
    "Here are a couple of reasons why you'll want to have a Terms and Conditions for a mobile app:" +
    "You can stop abusive users from using your app." +
    "You can terminate or block accounts at your sole discretion." +
    "Liability to users will be limited." +
    "And many more." +
    "If you don't have this agreement for your mobile app yet, use the Generator to create it!";
  privacy_policy =
    "You'll need the Privacy Policy agreement even if you don't collect any personal data yourself through the mobile app you're building, but instead use third party tools such as:" +
    "- Google Analytics Mobile" +
    "- Flurry" +
    "- Firebase" +
    "- Mixpanel" +
    "And so on" +
    "If you use at least one third party tool that might collect personal data through your mobile app, you need this agreement in place." +
    "Each app store also requires you to have this agreement in place before submitting the mobile app:" +
    "- Apple App Store" +
    "- Google Play Store" +
    "- Microsoft Windows Phone Store";

  card: NotificationsCard = {
    image: "assets/images/products/1.jpg",
    title: "Kya aapne kabhi online hotel book kia hai???\nHotel? Sastago",
    time: 9
  };

  notifications: Notification = {
    all: [
      this.card,
      this.card,
      this.card,
      this.card,
      this.card,
      this.card,
      this.card
    ],
    deals: [
      this.card,
      this.card,
      this.card,
      this.card,
      this.card,
      this.card,
      this.card
    ],
    orders: [],
    others: [
      this.card,
      this.card,
      this.card,
      this.card,
      this.card,
      this.card,
      this.card
    ]
  };

  trending = [
    "jacket",
    "drone",
    "shoes for men",
    "car accessories",
    "blazer for men",
    "watches men",
    "sports shoes for men",
    "earphone bluetooth",
    "jackets for men",
    "memory card"
  ];

  tabs: Array<HomeTab> = [
    { title: "Popular" },
    { title: "Recently Viewed" },
    { title: "Fashion" },
    { title: "Tops" },
    { title: "Shoes" },
    { title: "Automotive" },
    { title: "Bottoms" },
    { title: "Watches" },
    { title: "Wallets & Bags" },
    { title: "Accessories" },
    { title: "Gadgets" },
    { title: "Hobbies" },
    { title: "Phone Upgrades" },
    { title: "Home Decor" }
  ];

  item_tab: Array<HomeTab> = [
    { title: "Overview" },
    { title: "Related" },
    { title: "Product Reviews" }
  ];

  // notifications_tab: Array<HomeTab> = [
  //   { title: "All" },
  //   { title: "Deals" },
  //   { title: "Your Orders" },
  //   { title: "Other" }
  // ];

  notifications_tab: Array<HomeTab> = [
    { title: "All" }
  ];

  rewards_tab: Array<HomeTab> = [
    { title: "Dashboard" },
    { title: "Redeem" },
    { title: "Information" }
  ];

  rewards = {
    points: 100,
    since: new Date(),
    available: [
      { discount: 5, code: "ABCDEF", expire: new Date(), expired: false }
    ],
    used: [{ discount: 10, code: "XEFGSD", expire: new Date(), expired: true }],
    redeem: [
      { discount: 5, points: 200 },
      { discount: 10, points: 600 },
      { discount: 15, points: 1000 }
    ]
  };

  sponsored: Array<Product> = [
    {
      name: "Bianca Top",
      cost_price: 128,
      discount: 80,
      offer: true,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/1.jpg",
        "assets/images/products/1_1.jpg",
        "assets/images/products/1_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 1200,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/1.jpg",
            "assets/images/products/1_1.jpg"
          ]
        },
        {
          image: "assets/images/products/1_2.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/1.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/1.jpg",
            "assets/images/products/1_1.jpg"
          ]
        },
        {
          image: "assets/images/products/1_2.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/1.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Scarpetta Dress",
      cost_price: 198,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/2.jpg",
        "assets/images/products/2_1.jpg",
        "assets/images/products/2_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 400,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/2.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/2.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/2_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/2.jpg",
            "assets/images/products/2_1.jpg"
          ]
        },
        {
          image: "assets/images/products/2.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/2.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Misty Dress",
      cost_price: 218,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/3.jpg",
        "assets/images/products/3_1.jpg",
        "assets/images/products/3_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 365,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/3.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/3.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/3_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/3.jpg",
            "assets/images/products/3_1.jpg"
          ]
        },
        {
          image: "assets/images/products/3.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/3.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Blanch Dress",
      cost_price: 248,
      discount: 20,
      offer: true,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/4.jpg",
        "assets/images/products/4_1.jpg",
        "assets/images/products/4_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 1200,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/4.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/4.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/4_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/4.jpg",
            "assets/images/products/4_1.jpg"
          ]
        },
        {
          image: "assets/images/products/4.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/4.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Scarlett Dress",
      cost_price: 218,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/5.jpg",
        "assets/images/products/5_1.jpg",
        "assets/images/products/5_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 234,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/5.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/5.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/5_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/5.jpg",
            "assets/images/products/5_1.jpg"
          ]
        },
        {
          image: "assets/images/products/5.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/5.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Morrisson Dress",
      cost_price: 128,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/6.jpg",
        "assets/images/products/6_1.jpg",
        "assets/images/products/6_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 567,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/6.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/6.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/6_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/6.jpg",
            "assets/images/products/6_1.jpg"
          ]
        },
        {
          image: "assets/images/products/6.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/6.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Morrisson Dress",
      cost_price: 128,
      discount: 80,
      offer: true,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/7.jpg",
        "assets/images/products/7_1.jpg",
        "assets/images/products/7_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 137,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/7.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/7.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/7_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/7.jpg",
            "assets/images/products/7_1.jpg"
          ]
        },
        {
          image: "assets/images/products/7.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/7.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Smith Dress",
      cost_price: 98,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/8.jpg",
        "assets/images/products/8_1.jpg",
        "assets/images/products/8_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 236,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/8.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/8.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/8.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/8.jpg",
            "assets/images/products/8_1.jpg"
          ]
        },
        {
          image: "assets/images/products/8.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/8.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Nicola Dress",
      cost_price: 278,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/9.jpg",
        "assets/images/products/9_1.jpg",
        "assets/images/products/9_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 982,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/9.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/9.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/9_2.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/9.jpg",
            "assets/images/products/9_1.jpg"
          ]
        },
        {
          image: "assets/images/products/9.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/9.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Smith Dress",
      cost_price: 98,
      discount: 80,
      offer: true,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/10.jpg",
        "assets/images/products/10_1.jpg",
        "assets/images/products/10_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 214,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/10.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/10.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/10_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/10.jpg",
            "assets/images/products/10_1.jpg"
          ]
        },
        {
          image: "assets/images/products/10.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/10.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Kinsley Dress",
      cost_price: 198,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/11.jpg",
        "assets/images/products/11_1.jpg",
        "assets/images/products/11_2.jpg",
        "assets/images/products/11_3.jpg",
        "assets/images/products/11_4.jpg",
        "assets/images/products/11_5.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 434,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/11.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/11.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/11.jpg",
            "assets/images/products/11_1.jpg"
          ]
        },
        {
          image: "assets/images/products/11_2.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/1.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    }
  ];

  products_1: Array<Product> = [
    {
      name: "Bianca Top",
      cost_price: 128,
      discount: 80,
      offer: true,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/1.jpg",
        "assets/images/products/1_1.jpg",
        "assets/images/products/1_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 1200,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/1.jpg",
            "assets/images/products/1_1.jpg"
          ]
        },
        {
          image: "assets/images/products/1_2.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/1.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/1.jpg",
            "assets/images/products/1_1.jpg"
          ]
        },
        {
          image: "assets/images/products/1_2.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/1.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Scarpetta Dress",
      cost_price: 198,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/2.jpg",
        "assets/images/products/2_1.jpg",
        "assets/images/products/2_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 400,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/2.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/2.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/2_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/2.jpg",
            "assets/images/products/2_1.jpg"
          ]
        },
        {
          image: "assets/images/products/2.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/2.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Misty Dress",
      cost_price: 218,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/3.jpg",
        "assets/images/products/3_1.jpg",
        "assets/images/products/3_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 365,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/3.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/3.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/3_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/3.jpg",
            "assets/images/products/3_1.jpg"
          ]
        },
        {
          image: "assets/images/products/3.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/3.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Blanch Dress",
      cost_price: 248,
      discount: 20,
      offer: true,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/4.jpg",
        "assets/images/products/4_1.jpg",
        "assets/images/products/4_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 1200,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/4.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/4.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/4_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/4.jpg",
            "assets/images/products/4_1.jpg"
          ]
        },
        {
          image: "assets/images/products/4.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/4.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Scarlett Dress",
      cost_price: 218,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/5.jpg",
        "assets/images/products/5_1.jpg",
        "assets/images/products/5_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 234,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/5.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/5.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/5_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/5.jpg",
            "assets/images/products/5_1.jpg"
          ]
        },
        {
          image: "assets/images/products/5.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/5.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    }
  ];
  products_2: Array<Product> = [
    {
      name: "Morrisson Dress",
      cost_price: 128,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/6.jpg",
        "assets/images/products/6_1.jpg",
        "assets/images/products/6_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 567,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/6.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/6.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/6_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/6.jpg",
            "assets/images/products/6_1.jpg"
          ]
        },
        {
          image: "assets/images/products/6.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/6.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Morrisson Dress",
      cost_price: 128,
      discount: 80,
      offer: true,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/7.jpg",
        "assets/images/products/7_1.jpg",
        "assets/images/products/7_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 137,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/7.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/7.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/7_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/7.jpg",
            "assets/images/products/7_1.jpg"
          ]
        },
        {
          image: "assets/images/products/7.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/7.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Smith Dress",
      cost_price: 98,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/8.jpg",
        "assets/images/products/8_1.jpg",
        "assets/images/products/8_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 236,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/8.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/8.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/8.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/8.jpg",
            "assets/images/products/8_1.jpg"
          ]
        },
        {
          image: "assets/images/products/8.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/8.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Nicola Dress",
      cost_price: 278,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/9.jpg",
        "assets/images/products/9_1.jpg",
        "assets/images/products/9_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 982,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/9.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/9.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/9_2.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/9.jpg",
            "assets/images/products/9_1.jpg"
          ]
        },
        {
          image: "assets/images/products/9.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/9.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Smith Dress",
      cost_price: 98,
      discount: 80,
      offer: true,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/10.jpg",
        "assets/images/products/10_1.jpg",
        "assets/images/products/10_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 214,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/10.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/10.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/10_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/10.jpg",
            "assets/images/products/10_1.jpg"
          ]
        },
        {
          image: "assets/images/products/10.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/10.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    }
  ];
  products_3: Array<Product> = [
    {
      name: "Blanch Dress",
      cost_price: 248,
      discount: 20,
      offer: true,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/4.jpg",
        "assets/images/products/4_1.jpg",
        "assets/images/products/4_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 1200,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/4.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/4.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/4_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/4.jpg",
            "assets/images/products/4_1.jpg"
          ]
        },
        {
          image: "assets/images/products/4.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/4.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Scarlett Dress",
      cost_price: 218,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/5.jpg",
        "assets/images/products/5_1.jpg",
        "assets/images/products/5_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 234,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/5.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/5.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/5_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/5.jpg",
            "assets/images/products/5_1.jpg"
          ]
        },
        {
          image: "assets/images/products/5.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/5.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Morrisson Dress",
      cost_price: 128,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/6.jpg",
        "assets/images/products/6_1.jpg",
        "assets/images/products/6_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 567,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/6.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/6.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/6_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/6.jpg",
            "assets/images/products/6_1.jpg"
          ]
        },
        {
          image: "assets/images/products/6.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/6.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Morrisson Dress",
      cost_price: 128,
      discount: 80,
      offer: true,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/7.jpg",
        "assets/images/products/7_1.jpg",
        "assets/images/products/7_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 137,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/7.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/7.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/7_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/7.jpg",
            "assets/images/products/7_1.jpg"
          ]
        },
        {
          image: "assets/images/products/7.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/7.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Smith Dress",
      cost_price: 98,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/8.jpg",
        "assets/images/products/8_1.jpg",
        "assets/images/products/8_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 236,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/8.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/8.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/8.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/8.jpg",
            "assets/images/products/8_1.jpg"
          ]
        },
        {
          image: "assets/images/products/8.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/8.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    }
  ];
  products_4: Array<Product> = [
    {
      name: "Misty Dress",
      cost_price: 218,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/3.jpg",
        "assets/images/products/3_1.jpg",
        "assets/images/products/3_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 365,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/3.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/3.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/3_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/3.jpg",
            "assets/images/products/3_1.jpg"
          ]
        },
        {
          image: "assets/images/products/3.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/3.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Blanch Dress",
      cost_price: 248,
      discount: 20,
      offer: true,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/4.jpg",
        "assets/images/products/4_1.jpg",
        "assets/images/products/4_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 1200,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/4.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/4.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/4_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/4.jpg",
            "assets/images/products/4_1.jpg"
          ]
        },
        {
          image: "assets/images/products/4.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/4.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Scarlett Dress",
      cost_price: 218,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/5.jpg",
        "assets/images/products/5_1.jpg",
        "assets/images/products/5_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 234,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/5.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/5.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/5_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/5.jpg",
            "assets/images/products/5_1.jpg"
          ]
        },
        {
          image: "assets/images/products/5.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/5.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Morrisson Dress",
      cost_price: 128,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/6.jpg",
        "assets/images/products/6_1.jpg",
        "assets/images/products/6_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 567,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/6.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/6.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/6_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/6.jpg",
            "assets/images/products/6_1.jpg"
          ]
        },
        {
          image: "assets/images/products/6.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/6.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Morrisson Dress",
      cost_price: 128,
      discount: 80,
      offer: true,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/7.jpg",
        "assets/images/products/7_1.jpg",
        "assets/images/products/7_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 137,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/7.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/7.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/7_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/7.jpg",
            "assets/images/products/7_1.jpg"
          ]
        },
        {
          image: "assets/images/products/7.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/7.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Smith Dress",
      cost_price: 98,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/8.jpg",
        "assets/images/products/8_1.jpg",
        "assets/images/products/8_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 236,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/8.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/8.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/8.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/8.jpg",
            "assets/images/products/8_1.jpg"
          ]
        },
        {
          image: "assets/images/products/8.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/8.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    }
  ];
  products_5: Array<Product> = [
    {
      name: "Scarpetta Dress",
      cost_price: 198,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/2.jpg",
        "assets/images/products/2_1.jpg",
        "assets/images/products/2_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 400,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/2.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/2.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/2_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/2.jpg",
            "assets/images/products/2_1.jpg"
          ]
        },
        {
          image: "assets/images/products/2.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/2.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Misty Dress",
      cost_price: 218,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/3.jpg",
        "assets/images/products/3_1.jpg",
        "assets/images/products/3_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 365,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/3.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/3.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/3_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/3.jpg",
            "assets/images/products/3_1.jpg"
          ]
        },
        {
          image: "assets/images/products/3.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/3.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Blanch Dress",
      cost_price: 248,
      discount: 20,
      offer: true,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/4.jpg",
        "assets/images/products/4_1.jpg",
        "assets/images/products/4_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 1200,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/4.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/4.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/4_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/4.jpg",
            "assets/images/products/4_1.jpg"
          ]
        },
        {
          image: "assets/images/products/4.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/4.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Scarlett Dress",
      cost_price: 218,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/5.jpg",
        "assets/images/products/5_1.jpg",
        "assets/images/products/5_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 234,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/5.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/5.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/5_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/5.jpg",
            "assets/images/products/5_1.jpg"
          ]
        },
        {
          image: "assets/images/products/5.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/5.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Morrisson Dress",
      cost_price: 128,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/6.jpg",
        "assets/images/products/6_1.jpg",
        "assets/images/products/6_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 567,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/6.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/6.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/6_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/6.jpg",
            "assets/images/products/6_1.jpg"
          ]
        },
        {
          image: "assets/images/products/6.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/6.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Morrisson Dress",
      cost_price: 128,
      discount: 80,
      offer: true,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/7.jpg",
        "assets/images/products/7_1.jpg",
        "assets/images/products/7_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 137,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/7.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/7.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/7_1.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/7.jpg",
            "assets/images/products/7_1.jpg"
          ]
        },
        {
          image: "assets/images/products/7.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/7.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    },
    {
      name: "Smith Dress",
      cost_price: 98,
      discount: 80,
      offer: false,
      stock: 69,
      description: "sample data",
      image: [
        "assets/images/products/8.jpg",
        "assets/images/products/8_1.jpg",
        "assets/images/products/8_2.jpg"
      ],
      rating_count: 11,
      store_rating_count: 11,
      currency: "$",
      bought: 236,
      size: "M",
      color: "Black",
      shipping: 250,
      rating: 4,
      store_rating: 18090,
      store_rate: 3,
      sold_by: "seller",
      specs: "this is a sample product",
      reviews: [
        {
          image: "assets/images/products/8.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/8.jpg"]
        }
      ],
      store_reviews: [
        {
          image: "assets/images/products/8.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: [
            "assets/images/products/8.jpg",
            "assets/images/products/8_1.jpg"
          ]
        },
        {
          image: "assets/images/products/8.jpg",
          name: "sample",
          comment:
            "This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol",
          rating: 5,
          images: ["assets/images/products/8.jpg"]
        }
      ],
      sizing: { small: 10, okay: 80, large: 5 },
      buyer_guarantee:
        "Return all products within 30 days of delivery if they are not up to your satisfaction",
      sponsored: []
    }
  ];

  cart: any;

  recent = this.products_1;

  current_product: Product = this.products_1[0];

  current_user;


  wish_cash = {
    currency: "$",
    amount: 0.0,
    history: [{ amount: 10 }, { amount: 20 }]
  };

  orders: Array<Orders> = [
    {
      product: this.products_1[0],
      amount: 123,
      billing_address: {
        address_line_1: "ghar",
        address_line_2: "ghar",
        city: "jaipur",
        last_name: "bond",
        phone_number: 1125532553,
        zipcode: 12345,
        country: "India",
        first_name: "James",
        state: "Rajasthan"
      },
      shipping_address: {
        address_line_1: "ghar",
        address_line_2: "ghar",
        city: "jaipur",
        last_name: "bond",
        phone_number: 1125532553,
        zipcode: 12345,
        country: "India",
        first_name: "James",
        state: "Rajasthan"
      },
      delivery_date: new Date(),
      id: "B102013526",
      order_date: new Date(),
      status: "Delivered",
      tax: 40
    },
    {
      product: this.products_2[0],
      amount: 123,
      billing_address: {
        address_line_1: "ghar",
        address_line_2: "ghar",
        city: "jaipur",
        last_name: "bond",
        phone_number: 1125532553,
        zipcode: 12345,
        country: "India",
        first_name: "James",
        state: "Rajasthan"
      },
      shipping_address: {
        address_line_1: "ghar",
        address_line_2: "ghar",
        city: "jaipur",
        last_name: "bond",
        phone_number: 1125532553,
        zipcode: 12345,
        country: "India",
        first_name: "James",
        state: "Rajasthan"
      },
      delivery_date: new Date(),
      id: "B102013526",
      order_date: new Date(),
      status: "Delivered",
      tax: 40
    }
  ];

  faqs = {
    "Shipping and Delivery": [
      {
        "How log does shipping take?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "How can I track my order?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "How much does shipping cost?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "Where does my order ship from?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "How do I change my shipping address?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      }
    ],
    "Returns and Refunds": [
      {
        "How do I return a product?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "Can I exchange an item?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "How do I cancel my order?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "What's the status of my refund?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "I cancelled my order. How will I receive my refund?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      }
    ],
    "Payment, Pricing & Promotions": [
      {
        "How do I return a product?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "Can I exchange an item?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "How do I cancel my order?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "What's the status of my refund?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "I cancelled my order. How will I receive my refund?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "What's the status of my refund?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "I cancelled my order. How will I receive my refund?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      }
    ],
    Orders: [
      {
        "What's the status of my refund?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "I cancelled my order. How will I receive my refund?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "What's the status of my refund?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "I cancelled my order. How will I receive my refund?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      }
    ],
    "Managing Your Account": [
      {
        "How do I return a product?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "Can I exchange an item?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "How do I cancel my order?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "What's the status of my refund?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "I cancelled my order. How will I receive my refund?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      }
    ],
    "User Feedback": [
      {
        "How do I return a product?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "Can I exchange an item?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "How do I cancel my order?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "What's the status of my refund?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "I cancelled my order. How will I receive my refund?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      }
    ],
    "Customer Support": [
      {
        "How do I return a product?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "Can I exchange an item?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "How do I cancel my order?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "What's the status of my refund?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      },
      {
        "I cancelled my order. How will I receive my refund?":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis."
      }
    ]
  };
}
