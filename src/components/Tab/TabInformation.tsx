import { useFormikContext } from 'formik';
import TextField from '../TextField/TextField';
const TabInformation = () => {
  const formik = useFormikContext();

  return (
    <div>
      <TextField label="Tên chiến dịch *" name="information.name" formik={formik} />
      <TextField label="Mô tả" name="information.describe" formik={formik} />
    </div>
  );
};

export default TabInformation;
