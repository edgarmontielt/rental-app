import axios from 'axios'
import { Formik, Form, Field } from 'formik'
import dynamic from 'next/dynamic'
import { useRef } from 'react'
import AdminPage from '../../../components/admin'

const Editor = dynamic(
  () => import('../../../components/editor'), {
  ssr: false
})

export default function FormModule() {
  const editor = useRef(null)

  const createHome = async (data) => {
    const content = await editor.current.save()
    // const newData = { ...data, homeDetails: { ...data.homeDetails } }
    // newData.homeDetails.images = data.homeDetails.images.split(',')
    // const home = await axios.post('/api/home/create', newData)
  }
  return (
    <AdminPage>
      <h2>Add Home</h2>
      <Formik
        initialValues={{
          homeDetails: {
            title: "",
            images: "",
            price: 0,
            type: "HOUSE",
          },
          locationDetails: {
            country: "",
            state: "",
            city: "",
            street: "",
            number: 0,
            zipCode: 0
          },
        }}

        onSubmit={createHome}
      >
        <Form>
          <Field type='text' name='homeDetails.title' placeholder='Title' />
          <div>
            {Editor && <Editor instance={editor} />}
          </div>
          <Field type='text' name='homeDetails.images' placeholder='Images' />
          <Field type='number' name='homeDetails.price' placeholder='Price' />
          <Field as='select' name='homeDetails.type' >
            <option value="HOUSE">House</option>
            <option value="DEPARTMENT">Deparment</option>
          </Field>
          <Field type='text' name='locationDetails.country' placeholder='Country' />
          <Field type='text' name='locationDetails.state' placeholder='State' />
          <Field type='text' name='locationDetails.city' placeholder='City' />
          <Field type='text' name='locationDetails.street' placeholder='Street' />
          <Field type='number' name='locationDetails.number' placeholder='Number' />
          <Field type='number' name='locationDetails.zipCode' placeholder='Zip Code' />
          <button type='submit'> Save</button>
        </Form>
      </Formik>
    </AdminPage>
  )
}
