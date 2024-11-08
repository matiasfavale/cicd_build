namespace buidci;
using { cuid } from '@sap/cds/common';

@assert.unique: { name: [name] }
entity Customers : cuid {
  name: String(100) @mandatory;
  email: String(100);
  customerNumber: Integer;
  totalPurchaseValue: Integer;
  totalRewardPoints: Integer;
  totalRedeemedRewardPoints: Integer;
  purchases: Association to many Purchases on purchases.customer = $self;
  redemptions: Association to many Redemptions on redemptions.customer = $self;
}

entity Purchases : cuid {
  purchaseValue: Integer;
  rewardPoints: Integer;
  selectedProduct: String(100);
  customer: Association to Customers;
}

entity Redemptions : cuid {
  redeemedAmount: Integer;
  customer: Association to Customers;
}

