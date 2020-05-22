import React from "react";
import { Form as FormikForm, Field, withFormik, FieldInputProps } from "formik";
import { Form, Button } from "semantic-ui-react";

const LoginForm: React.FC = () => {
  return (
    <Form as="div">
      <FormikForm>
        <Field name="email">
          {({ field }: { field: FieldInputProps<string> }) => (
            <Form.Field>
              <label>Email</label>
              <input {...field} placeholder="Enter your email" type="email" />
            </Form.Field>
          )}
        </Field>
        <Field name="password">
          {({ field }: { field: FieldInputProps<string> }) => (
            <Form.Field>
              <label>Password</label>
              <input
                {...field}
                placeholder="Enter your password"
                type="password"
              />
            </Form.Field>
          )}
        </Field>
        <Button type="submit">Submit</Button>
      </FormikForm>
    </Form>
  );
};

interface FormProps {
  handleSubmit: (data: FormValues) => void;
  initialValues: FormValues;
}

interface FormValues {
  email: string;
  password: string;
}

const handleSubmit = (values: FormValues, { props }: { props: FormProps }) =>
  props.handleSubmit(values);

const mapPropsToValues = (props: FormProps) => props.initialValues;

export default withFormik<FormProps, FormValues>({
  handleSubmit,
  mapPropsToValues,
})(LoginForm);
