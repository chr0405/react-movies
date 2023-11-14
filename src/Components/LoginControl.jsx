import React, {useState} from 'react'

export default function LoginControl() {
	const [isLoggedIn, setisLoggedIn] = useState(false);
	const handleLoginClick = () => {
		setisLoggedIn((prev) => !prev)
	}

	return (
		<div>
			{isLoggedIn ? <span className='Login_text'><button className='Login_btn' onClick={handleLoginClick}>로그아웃</button>환영합니다!</span> : <span className='Login_text'><button className='Login_btn' onClick={handleLoginClick}>로그인</button>로그인 해주세요!</span>}
		</div>
	)
}