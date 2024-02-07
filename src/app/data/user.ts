import { EmailValidator } from "@angular/forms"
import { Url } from "url"

export type User = {
  basic: {
    first_name: string,
    last_name: string,
    email: string, // double as username?
    password: string, // encrypted
    newsletter_subscription: boolean,
    img_url: Url
  }
  contact: {
    phone: number,
    address: string
  }
  membership: {
    plan: string,
    price_per_month: number,
    start_date: Date,
    end_date: Date //maybe?
  }
}