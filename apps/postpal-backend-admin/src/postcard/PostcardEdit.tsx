import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PostcardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ImageUrl" source="imageUrl" />
        <DateTimeInput label="ReceivedDate" source="receivedDate" />
        <TextInput label="Recipient" source="recipient" />
        <TextInput label="Sender" source="sender" />
        <DateTimeInput label="SentDate" source="sentDate" />
      </SimpleForm>
    </Edit>
  );
};
