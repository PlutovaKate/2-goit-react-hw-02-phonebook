import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('This field is required!'),
  number: Yup.number().min(2, 'Too Short!').required('This field is required!'),
});

const PhonebookForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={FormSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Field name="name" placeholder="Type the NAME" />
          <ErrorMessage name="name" />
        </label>

        <label>
          Number
          <Field type="number" name="number" placeholder="Type the NUMBER" />
          <ErrorMessage name="number" />
        </label>

        <button type="submit">Add contact</button>

        {/* <label>
          Filter
          <Field name="filter" placeholder="Find contacts by name" />
        </label> */}
      </Form>
    </Formik>
  );
};
export default PhonebookForm;
