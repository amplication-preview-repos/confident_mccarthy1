import { Address as TAddress } from "../api/address/Address";

export const ADDRESS_TITLE_FIELD = "city";

export const AddressTitle = (record: TAddress): string => {
  return record.city?.toString() || String(record.id);
};
