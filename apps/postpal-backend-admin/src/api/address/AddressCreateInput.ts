import { UserCreateNestedManyWithoutAddressesInput } from "./UserCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  city?: string | null;
  country?: string | null;
  state?: string | null;
  street?: string | null;
  users?: UserCreateNestedManyWithoutAddressesInput;
  zipCode?: string | null;
};
