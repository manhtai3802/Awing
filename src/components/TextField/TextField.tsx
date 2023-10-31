import MuiTextField from '@mui/material/TextField';
import { Field } from 'formik';

interface TextFieldPropsType {
  name: string;
  type: string;
}

export default function TextField(props: TextFieldPropsType) {
  const { name, type } = props;

  return (
    <Field name={name}>
      {({ field, form, meta }) => (
        <div>
          <MuiTextField
            fullWidth
            {...field}
            {...props}
            variant="standard"
            error={meta.touched && meta.error}
            onBlur={() => {}}
            type={type ? type : 'string'}
          />
          {meta.touched && meta.error && <div style={{ color: 'red' }}>{meta.error}</div>}
        </div>
      )}
    </Field>
  );
}
