import { FormRow } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { useNavigation, Form } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
   console.log('Profile action handler called');

   const formData = await request.formData()
   const file = formData.get('avatar')
   if (file && file.size > 1800000) {
      toast.error('Image size too large')
      return null
   }

   try {
      await customFetch.patch('/users/update-user', formData)
      toast.success('profile updated successfully')
   } catch (error) {
      toast.error(error?.response?.data?.msg)
   }
   return null
}

const Profile = () => {
   const { user } = useOutletContext()
   const { name, lastName, email, location, } = user
   const navigation = useNavigation();
   const isSubmitting = navigation.state === 'submitting';

   return (
      <Wrapper>
         <Form method="post" className="form" encType='multipart/form-data'>
            <h2 className='form-title'>Profile</h2>

            <div className='form-center'>
               <div className='form-row'>
                  <label htmlFor='avatar' className='form-label'>select an image file (max 0.5mb)</label>
                  <input type='file' id='avatar' name='avatar' className='form-input' accept='image/*' />
               </div>
               <FormRow type='text' name='name' defaultValue={name} />
               <FormRow type='text' name='lastName' labelText='last name' defaultValue={lastName} />
               <FormRow type='email' name='email' defaultValue={email} />
               <FormRow type='text' name='location' defaultValue={location} />
               <button type='submit' className='btn btn-block form-btn' disabled={isSubmitting}>{isSubmitting ? 'submitting...' : 'save changes'}</button>
            </div>
         </Form>
      </Wrapper>
   )
}

export default Profile