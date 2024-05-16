import { UserUpdateManyWithoutAddressesInput } from "./UserUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  city?: string | null;
  country?: string | null;
  state?: string | null;
  street?: string | null;
  users?: UserUpdateManyWithoutAddressesInput;
  zipCode?: string | null;
};
