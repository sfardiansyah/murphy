import React from "react";
import { Form as FormikForm, Field, withFormik, FieldInputProps } from "formik";
import { Form, Button } from "semantic-ui-react";

const LoginForm: React.FC = () => {
  return (
    <Form as={FormikForm}>
      <Field name="email">
        {({ field }: { field: FieldInputProps<string> }) => (
          <Form.Field>
            <label>Email</label>
            <input placeholder="Enter your email" {...field} />
          </Form.Field>
        )}
      </Field>
      <Field name="password">
        {({ field }: { field: FieldInputProps<string> }) => (
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="Enter your password"
              type="password"
              {...field}
            />
          </Form.Field>
        )}
      </Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

interface FormProps {
  handleSubmit: (data: FormValues) => void;
}

interface FormValues {
  email: string;
  password: string;
}

const handleSubmit = (values: FormValues, { props }: { props: FormProps }) =>
  props.handleSubmit(values);

export default withFormik<FormProps, FormValues>({ handleSubmit })(LoginForm);
