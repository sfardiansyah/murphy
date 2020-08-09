import React from "react";
import {
  Form as FormikForm,
  Field,
  withFormik,
  FieldInputProps,
  FormikProps,
} from "formik";
import { Form, Input } from "semantic-ui-react";
import { FormValues } from "./types";

const InvestmentForm: React.FC = () => (
  <Form as="div" size="big">
    <FormikForm>
      <Field name="lumpSum">
        {({
          field,
          form: { setFieldValue, submitForm },
        }: {
          field: FieldInputProps<string>;
          form: FormikProps<FormValues>;
        }) => (
          <Form.Field>
            <Input
              {...field}
              placeholder="Lump Sum (ex. Rp 50.000.000)"
              type="string"
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                const {
                  target: { value },
                } = event;

                const num = Number(value.replace(/[^0-9-]+/g, ""));

                setFieldValue(
                  "lumpSum",
                  `Rp ${new Intl.NumberFormat("id-ID").format(num)}`
                );
                submitForm();
              }}
            />
          </Form.Field>
        )}
      </Field>
      <Field name="monthlyDeposit">
        {({
          field,
          form: { setFieldValue, submitForm },
        }: {
          field: FieldInputProps<string>;
          form: FormikProps<FormValues>;
        }) => (
          <Form.Field>
            <Input
              {...field}
              placeholder="Monthly Deposit"
              type="string"
              label={{ basic: true, content: "per month" }}
              labelPosition="right"
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                const {
                  target: { value },
                } = event;

                const num = Number(value.replace(/[^0-9-]+/g, ""));

                setFieldValue(
                  "monthlyDeposit",
                  `Rp ${new Intl.NumberFormat("id-ID").format(num)}`
                );
                submitForm();
              }}
            />
          </Form.Field>
        )}
      </Field>
      <Field name="years">
        {({
          field,
          form: { setFieldValue, submitForm },
        }: {
          field: FieldInputProps<string>;
          form: FormikProps<FormValues>;
        }) => (
          <Form.Field>
            <Input
              {...field}
              placeholder="Years"
              type="number"
              label={{ basic: true, content: "years" }}
              labelPosition="right"
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                setFieldValue(
                  "years",
                  parseInt(event.target.value, 10) || undefined
                );
                submitForm();
              }}
            />
          </Form.Field>
        )}
      </Field>
      <Field name="annualReturn">
        {({
          field,
          form: { setFieldValue, submitForm },
        }: {
          field: FieldInputProps<string>;
          form: FormikProps<FormValues>;
        }) => (
          <Form.Field>
            <Input
              {...field}
              placeholder="Estimated Annual Return"
              type="number"
              step="0.01"
              label={{ basic: true, content: "% per year" }}
              labelPosition="right"
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                setFieldValue(
                  "annualReturn",
                  parseFloat(event.target.value) || undefined
                );
                submitForm();
              }}
            />
          </Form.Field>
        )}
      </Field>
    </FormikForm>
  </Form>
);

interface FormProps {
  handleSubmit: (data: FormValues) => void;
}

const handleSubmit = (values: FormValues, { props }: { props: FormProps }) =>
  props.handleSubmit(values);

export default withFormik<FormProps, FormValues>({
  handleSubmit,
})(InvestmentForm);
