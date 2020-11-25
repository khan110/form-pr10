import React from 'react'
import {useFormik} from 'formik';

export const FormikForm = () => {
    const formik = useFormik({
        initialValues :{
            email: "",
            password: ""

        }, onSubmit : (values) => {
            console.log(values)
        }
    })
    return (
        <div>
            <form onSubmit={formik.onSubmit}>
             <label>
              Enter User email 
              <input type ="text" id="email" value={formik.values.email} onChange={formik.onChange} />
           </label>
           <br/>
           <label>
               Enter User password
               <input type= "text" id="password" value={formik.values.password} onChange={formik.onChange}/>
           </label>
             <br/>
             <input type="submit"/>
            </form>


        </div>
    )
}
