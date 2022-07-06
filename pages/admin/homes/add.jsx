import axios from 'axios'
import { Formik, Form, Field } from 'formik'

export default function Add() {

  const createHome = async (data) => {
    const newData = { ...data, homeDetails: { ...data.homeDetails } }
    newData.homeDetails.images = data.homeDetails.images.split(',')
    const home = await axios.post('/api/home/create', newData)
  }
  return (
    <>
      <h2>Add Home</h2>
      <Formik
        initialValues={{
          homeDetails: {
            title: "",
            images: "",
            price: 0,
            description: "",
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
          <Field type='text' name='homeDetails.description' placeholder='Description' />
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
    </>
  )
}
