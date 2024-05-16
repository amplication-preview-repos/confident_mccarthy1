import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AddressTitle } from "../address/AddressTitle";
import { PointsTitle } from "../points/PointsTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="address.id" reference="Address" label="Address">
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Password" source="password" />
        <ReferenceArrayInput
          source="pointsItems"
          reference="Points"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PointsTitle} />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
