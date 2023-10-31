import MuiTextField from '@mui/material/TextField';
import { Field } from 'formik';

interface TextFieldPropsType {
  name: string;
}

export default function TextField(props: TextFieldPropsType) {
  const { name } = props;

  return (
    <Field name={name}>
      {({ field, form, meta }) => (
        <div>
          <MuiTextField fullWidth {...field} {...props} />
          {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </div>
      )}
    </Field>
  );
}
