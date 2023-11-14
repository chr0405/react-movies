import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate();

  const onClickP = () => {
    navigate((`/`));
  };

  return (
    <div className='NotFound_div0'>
      <h3 id='NotFound_title'>해당 페이지를 찾지 못했습니다.</h3>
      <p id='NotFound_explain'>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</p>
      <p id='NotFound_goToMainPage' onClick={onClickP}>메인 페이지로 이동</p>
    </div>
  )
}
