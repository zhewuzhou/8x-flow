import template from "../../template";

export const yaml = template`
${'type'}: Order
key_timestamps: created_at
fulfillment:
  Order Payment:
    request:
      name: Buyer Payment Request
    confirm:
      name: Order Payment
`
