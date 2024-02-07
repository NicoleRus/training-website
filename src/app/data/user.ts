import { EmailValidator } from "@angular/forms"

export type User = {
  basic: {
    first_name: string,
    last_name: string,
    email: string, // double as username?
    password: string, // encrypted
    newsletter_subscription: boolean
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