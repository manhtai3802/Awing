import { Formik } from 'formik';
import * as yup from 'yup';
import Header from './components/Header/Header';
import TabLists from './components/Tab/TabList';

const schema = yup.object().shape({
  information: yup.object().shape({
    name: yup.string().required('Dữ liệu không hợp lệ'),
    describe: yup.string(),
  }),
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
            name: 'Tên chiến dịch 1',
            status: true,
            ads: [
              {
                name: '',
                quantity: 0,
              },
            ],
          },
        ],
      }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        // const objValues = {
        //   campaign: {
        //     information: {
        //       name: values.name,
        //       describe: values.describe,
        //     },
        //     subCampaigns: [],
        //   },
        // };

        // setTimeout(() => {
        //   alert(JSON.stringify(objValues, null, 2));
        //   setSubmitting(false);
        // }, 400);
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
