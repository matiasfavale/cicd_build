using { buidci as my } from '../db/schema.cds';

@path: '/service/buidci'
@requires: 'authenticated-user'
service buidciSrv {
  @odata.draft.enabled
  entity Customers as projection on my.Customers;
  @odata.draft.enabled
  entity Purchases as projection on my.Purchases;
  @odata.draft.enabled
  entity Redemptions as projection on my.Redemptions;
}