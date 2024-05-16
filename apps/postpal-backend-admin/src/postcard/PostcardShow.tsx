import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const PostcardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="ImageUrl" source="imageUrl" />
        <TextField label="ReceivedDate" source="receivedDate" />
        <TextField label="Recipient" source="recipient" />
        <TextField label="Sender" source="sender" />
        <TextField label="SentDate" source="sentDate" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
