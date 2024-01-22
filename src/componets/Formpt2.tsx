import React from 'react'
import {TextField} from '@mui/material'
import { useForm } from 'react-hook-form'
import '../Styles/Home.css'

type FormValues = {
    email: string
    fname: string
    lname: string
    planet: string
    phone: Number
    zip: Number
};

function Form() {
    const form = useForm<FormValues>({
        defaultValues: {
            email: '',
            fname: '',
            lname: '',
            planet: '',
            phone: '',
            zip: '',
        }
    })
    const { register, handleSubmit, formState } = form
    const { errors } = formState
   const onSubmit = (data: FormValues)=>{
    console.log(data)
   }
  return (
    <div>
      {/* <!-- Form with validation on submit --> */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* <!-- First input section (names) --> */}
            <section id="names" className="section">
                {/* <label htmlFor="fname">First name</label> */}
                <TextField type="text" id="fname"  className="input"placeholder="Enter your first name" {...register('fname',{required: 'First Name is required' })} error={!!errors.fname} helperText={errors.fname?.message}/><br />
                <br />
                
                {/* <label htmlFor="lname">Last name</label> */}
                <TextField type="text" id="lname" placeholder="Enter your last name" {...register('lname',{required: 'Last Name is required'})} error={!!errors.lname} helperText={errors.lname?.message} />
            </section>
            <br />

            {/* <!-- Second input section (contact info) --> */}
            <section id="contact" className="section">
                {/* <label htmlFor="phone" >Phone Number</label> */}
                <TextField type="tel" id="phone"  placeholder="(XXX) XXX-XXXX"  {...register('phone',{required: 'Phone number is required'})} error={!!errors.phone} helperText={errors.phone?.message}/><br />
                <br />
                {/* <label htmlFor="email" >Email</label> */}
                <TextField type="email" id="email" placeholder="Example@example.com" {...register('email',{required: 'Email is required'})} error={!!errors.email} helperText={errors.email?.message}/>
            </section>
            <br />

            {/* <!-- Third input section (location info) --> */}
            <section id="houseLo" className="section">
                {/* <label htmlFor="planet">Planet</label> */}
                <TextField type="text" id="planet"  placeholder="planet name" {...register('planet',{required: 'Planet is required'})} error={!!errors.planet} helperText={errors.planet?.message} /><br />
                <br />
                {/* <label htmlFor="zip">National Zip Code</label> */}
                <TextField type="number" id="zip"  placeholder="X X X X X" {...register('zip',{required: 'Zip code is required'})} error={!!errors.zip} helperText={errors.zip?.message}/>
            </section>
            <br />

            {/* <!-- Fourth input section (issue selection) --> */}
            <section id="issues" className="section">
                <label htmlFor="issues"></label>
                <select id="issue">
                    <option value="">--Issues--</option>
                    <option value="refund">Refund</option>
                    <option value="shipping">Shipping</option>
                    <option value="seller">Become a Seller</option>
                    <option value="product">Issue with Product</option>
                </select>
            </section>

            {/* <!-- Button to submit form --> */}
            <section id="button">
                <button id="submit" >Submit</button> <br />
                <span id="submit_error"></span>
            </section>
        </form>

        {/* <!-- Message section to display form submission status --> */}
        <section id="message">
            <h3 id="span_message"></h3>
        </section>
    </div>
  )
  
}

export default Form
