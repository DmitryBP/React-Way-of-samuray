import React from 'react';
import s from './Login.module.css';
import { useForm } from 'react-hook-form';

export default function LoginForm(props) {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    props.hendleData(data)
    return data
  };
  
  return (
    <form className={s.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <input type="text" placeholder="Email" {...register('email')} />
      <input type="text" placeholder="Password" {...register('password')} />
      <div className={s.rememberMe}>
        <input type="checkbox" {...register('rememberMe')} /> RememberMe
      </div>
        <button className={s.btn}>login</button>
    </form>
  );
}