import React from 'react'
import { useForm } from 'react-hook-form'

import '../Styles/Home.css'
// import Form from '../componets/Form'
import Formpt2 from '../componets/Formpt2.tsx'
import Header from '../componets/Header'

function Contact() {
  return (
    <div id='ContactPage'>
        <Header />
        <br />
        <Formpt2 />
    </div>
  )
}

export default Contact
