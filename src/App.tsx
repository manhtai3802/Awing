import { Formik } from 'formik';
import * as yup from 'yup';
import Header from './components/Header/Header';
import TabLists from './components/Tab/TabList';

const schema = yup.object().shape({
  information: yup.object().shape({
    name: yup.string().required('Dữ liệu không hợp lệ'),
    describe: yup.string(),
  }),
  subCampaigns: yup.array().of(
    yup.object().shape({
      name: yup.string().required('Dữ liệu không hợp lệ'),
      status: yup.boolean(),
      ads: yup
        .array()
        .min(1, 'Phải có tối thiểu 1 quảng cáo')
        .of(
          yup.object().shape({
            name: yup.string().required('Dữ liệu không hợp lệ'),
            quantity: yup.number().min(1, 'Dữ liệu không hợp lệ').required('Dữ liệu không hợp lệ'),
          }),
        ),
    }),
  ),
});

function App() {
  return (
    <Formik
      initialValues={{
        information: {
          name: '',
          describe: '',
        },
        subCampaigns: [
          {
            name: 'Chiến dịch con 1',
            status: true,
            ads: [
              {
                id: 'abc',
                name: 'Quảng cáo 1',
                quantity: 0,
              },
            ],
          },
        ],
      }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        alert(
          JSON.stringify({
            campaign: {
              ...values,
            },
          }),
        );

        console.log('>>>>>>>', values);
        setSubmitting(false);
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <Header disabled={isSubmitting} />
          <TabLists />
        </form>
      )}
    </Formik>
  );
}

export default App;
