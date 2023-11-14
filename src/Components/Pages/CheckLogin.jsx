import React from 'react'
import { useState } from 'react'

export default function CheckLogin() {

  const email_check = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  const password_check = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;

  const [email, setEmail] = useState('');
  const [passEmail, setPassEmail] = useState('');
  const [checkEmail, setCheckEmail] = useState(false);

  const onCheckEmail = (email) =>{
    setEmail(email.target.value);
    if(email_check.test(email.target.value)){
      setPassEmail('');
      setCheckEmail(true);
    }else{
      setPassEmail('올바른 이메일을 입력해 주세요.');
      setCheckEmail(false);
    }
  }


  const [password, setPassword] = useState('');
  const [passPassword, setPassPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState(false);

  const onCheckPassword = (password) =>{
    setPassword(password.target.value);
    if(password_check.test(password.target.value)){
      setPassPassword('');
      setCheckPassword(true);
    }else{
      setPassPassword('올바른 비밀번호를 입력해 주세요.');
      setCheckPassword(false);
    }
  }

  return (
    <div>
      <h3 id='CheckLogin_h3'>이메일과 비밀번호를 입력해 주세요.</h3>
      <form id='CheckLogin_form'>
        <label className='CheckLogin_label'>이메일 주소</label>
        <input className='CheckLogin_input' value={email} onChange={onCheckEmail}></input>
        <p className='CheckLogin_p'>{passEmail}</p>
        <label className='CheckLogin_label'>비밀번호</label>
        <input className='CheckLogin_input' type='password' value={password} onChange={onCheckPassword}></input>
        <p className='CheckLogin_p'>{passPassword}</p>
        <input id='CheckLogin_submit' type='submit' value='확인' disabled={!(checkEmail && checkPassword)}></input>
      </form>
    </div>
  )
}
