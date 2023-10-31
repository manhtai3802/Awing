import MuiTextField from '@mui/material/TextField';
import { Field, FieldProps } from 'formik';

interface TextFieldPropsType {
  name: string;
  label?: string;
  type?: string;
  value?: string;
}

export default function TextField(props: TextFieldPropsType) {
  const { name } = props;

  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <div>
          <MuiTextField
            fullWidth
            {...field}
            variant="standard"
            error={!!meta.touched && !!meta.error}
            onBlur={() => {}}
            {...props}
          />
          {meta.touched && meta.error && <div style={{ color: 'red' }}>{meta.error}</div>}
        </div>
      )}
    </Field>
  );
}
