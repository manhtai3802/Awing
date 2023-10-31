import TextField from '../TextField/TextField';
const TabInformation = () => {
  return (
    <div>
      <TextField label="Tên chiến dịch *" name="information.name" />
      <TextField label="Mô tả" name="information.describe" />
    </div>
  );
};

export default TabInformation;
