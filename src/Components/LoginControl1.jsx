import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginControl1() {
    const [isLoggedIn, setisLoggedIn] = useState(false);

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate((`/CheckLogin`));
        setisLoggedIn(true);
    };
    const handleLogoutClick = () => {
        navigate((`/`));
        setisLoggedIn(false);
    };

	return (
		<div>
			{isLoggedIn ? <span className='Login_text'><button className='Login_btn' onClick={handleLogoutClick}>로그아웃</button>환영합니다!</span> : <span className='Login_text'><button className='Login_btn' onClick={handleLoginClick}>로그인</button>로그인 해주세요!</span>}
		</div>
	)
}