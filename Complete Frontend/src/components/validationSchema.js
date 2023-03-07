
import * as Yup from 'yup';


export const schema = Yup.object({
    fullname:Yup.string().min(2).max(25).required("Please Enter Your Name"),
    email:Yup.string().email().required("Please, Enter Your Email"),
    username:Yup.string(Yup.number()).lowercase().required("Please, Enter Your UserName"),
    password:Yup.string().min(8).required("Please, Enter Your Password"),
    phone:Yup.string().min(10).required("Please, Enter Your Number"), 

}); 