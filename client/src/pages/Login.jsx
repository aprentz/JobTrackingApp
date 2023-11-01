import { Form, Link, redirect, useNavigate } from 'react-router-dom'
import { FormRow, Logo, SubmitBtn } from '../components'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import customFetch from '../utils/customFetch.js'
import { toast } from 'react-toastify'

export const action = async ({ request }) => {
   const formData = await request.formData()
   const data = Object.fromEntries(formData)

   try {
      await customFetch.post('/auth/login', data)
      toast.success('Login successful')
      return redirect('/dashboard')
   } catch (error) {
      toast.error(error?.response?.data?.msg)
      return error
   }
}

const Login = () => {
   const navigate = useNavigate()
   const loginDemoUser = async () => {
      const data = {
         email: 'chuckles@example.com',
         password: 'giggle123',
      }

      try {
         await customFetch.post('/auth/login', data)
         toast.success('Test mode enabled!')
         navigate('/dashboard')
      } catch (error) {
         toast.error(error?.response?.data?.msg)
      }
   }

   return (
      <Wrapper>
         <Form method="post" className='form'>
            <Logo />
            <h4>login</h4>
            <FormRow type="email" name="email" defaultValue="john@test.com" />
            <FormRow type="password" name="password" defaultValue="Password123" />
            <SubmitBtn />
            <button type="button" className="btn btn-block" onClick={loginDemoUser}>explore the app</button>
            <p>Not a member yet?</p>
            <Link to="/register" className="member-btn">
               Register
            </Link>
         </Form>
      </Wrapper>
   )
}

export default Login