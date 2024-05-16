import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const AddressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="City" source="city" />
        <TextInput label="Country" source="country" />
        <TextInput label="State" source="state" />
        <TextInput label="Street" source="street" />
        <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <TextInput label="ZipCode" source="zipCode" />
      </SimpleForm>
    </Create>
  );
};
