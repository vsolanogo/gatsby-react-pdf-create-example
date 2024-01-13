import * as yup from 'yup'

export const mailSchema = yup.object().shape({
  email: yup.string().trim().email('Invalid email').required('Required'),
})
