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
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  url: string = "https://swift-footed-config.000webhostapp.com";
  consumerKey: string = "ck_bc98995c28477bc2fce7bb5eb49e7cc839c71801";
  consumerSecret: string = "cs_66c7d6d45ae47e8a490f6fe8540298e1c77fd060";
  constructor(private http: HttpClient) {}

  createUser(email, username, password) {
    let header = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    let data = `username=${username}&email=${email}&password=${password}`;
    return new Promise(resolve => {
      this.http
        .post(
          `${this.url}/wp-json/wc/v3/customers?consumer_key=${
            this.consumerKey
          }&consumer_secret=${this.consumerSecret}`,
          data,
          { headers: header }
        )
        .subscribe(customerData => {
          resolve(customerData);
        });
    });
  }

  getUser(customerId) {
    return new Promise(resolve => {
      this.http
        .get(
          `${
            this.url
          }/wp-json/wc/v3/customers?email=${customerId}&consumer_key=${
            this.consumerKey
          }&consumer_secret=${this.consumerSecret}`
        )
        .subscribe(customerData => {
          resolve(customerData);
        });
    });
  }

  loginUser(username, password) {
    let headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    let userData = `username=${username}&password=${password}`;

    return new Promise((resolve, reject) => {
      this.http
        .post(`${this.url}/wp-json/jwt-auth/v1/token`, userData, { headers })
        .subscribe(
          res => {
            resolve(res);
          },
          err => {
            resolve(err);
          }
        );
    });
  }
}
