import { useFormikContext } from 'formik';
import TextField from '../TextField/TextField';
const TabInformation = () => {
  const formik = useFormikContext();

  return (
    <div>
      <TextField label="Tên chiến dịch *" name="information.name" id="information.name" formik={formik} />

      {/* <TextField
        errors={errors?.information?.name}
        touched={touched?.information?.name}
        label={'Tên chiến dịch *'}
        id={'information.name'}
        isSubmitting={isSubmitting}
      />

      <TextField
        errors={errors?.information?.describe}
        touched={touched?.information?.describer}
        label={'Mô tả'}
        id={'information.describe'}
        isSubmitting={isSubmitting}
      /> */}

      {/* <TextField
        label="Mô tả"
        // fullWidth
        // variant="standard"
        // id="describe"
        // // value={values.describe}
        // onChange={handleChange}
        // onBlur={handleBlur}
        // // helperText={touched.describe ? errors.describe : ''}
        // // error={touched.describe && Boolean(errors.describe)}
        // margin="dense"
      /> */}
    </div>
  );
};

export default TabInformation;
