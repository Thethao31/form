import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name"),
  lastName: yup.string().required('Last Name'),
  email: yup.string().email().required('Email'),
  //số dương và số nguyên
  age: yup.number().positive().integer().required('Age'),
  password: yup.string().min(4).max(15).required("Password"),
  // oneOf là method của yup
  confirmPassword: yup.string().oneOf([yup.ref("re-password"), null]),
  //kiểm tra trong trường mật khẩu này có giống với trường ô "password" không
})

function Form() {
  //register xác định trường nào trở thành 1 phần để xử lí
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  })

  const submitForm = (data) => {
    console.log(data)
  }

  return (
    <div className="Form">
      <div className="title">Sign Up</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(submitForm)}>
          <input
            type="text"
            name="firstName"
            ref={register}
            placeholder="First Name..."
          />
          <p> {errors.firstName?.message}</p>
          <input
            type="text"
            name="lastName"
            ref={register}
            placeholder="Last Name..."
          />
          <p> {errors.lastName?.message} </p>
          <input
            type="text"
            name="email"
            ref={register}
            placeholder="Email..."
          />
          <p> {errors.email?.message} </p>
          <input type="text" name="age" placeholder="Age..." ref={register} />
          <p> {errors.age?.message} </p>
          <input
            type="password"
            name="password"
            ref={register}
            placeholder="Password..."
          />
          <p> {errors.password?.message} </p>
          <input
            type="password"
            name="confirmPassword"
            ref={register}
            placeholder="Confirm Password..."
          />
          <p> {errors.confirmPassword && "Passwords Should Match!"} </p>
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  )
}

export default Form;
