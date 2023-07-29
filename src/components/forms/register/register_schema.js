import * as Yup from 'yup';

const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const emailRegex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phonenumberRegex = /^\d{10}$/;

export const registerSchema=Yup.object({
    Name:Yup.string().min(4).max(20).required('Field cannot be empty'),
    Email:Yup.string().matches(emailRegex,'Enter a valid email').required('Field cannot be empty'),
    PhoneNumber:Yup.string().min(10).matches(phonenumberRegex,'Enter a valid phone number').required('Field cannot be empty'),
    Password:Yup.string().matches(passwordRegex, 'Must be atleast 8 characters,contain an uppercase, lowercase, digit, symbol').required('Field cannot be empty'),
});