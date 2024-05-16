import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PostcardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ImageUrl" source="imageUrl" />
        <DateTimeInput label="ReceivedDate" source="receivedDate" />
        <TextInput label="Recipient" source="recipient" />
        <TextInput label="Sender" source="sender" />
        <DateTimeInput label="SentDate" source="sentDate" />
      </SimpleForm>
    </Create>
  );
};
