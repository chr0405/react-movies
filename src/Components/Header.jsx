import React from 'react'
import { Link } from 'react-router-dom'
// import LoginControl from './LoginControl'
import LoginControl1 from './LoginControl1'

function Header(){
    return(
        <div id='Header_title'>
            <Link to="/">
            <img id='Img'
		        style={{ width: "154px", height: "20px" }}
		        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
		        alt="로고"
            />
            </Link>
            <ul id="Page_list">
                <li><Link to="/Movies">영화</Link></li>
                <li><Link to="/TV">TV 프로그램</Link></li>
                <li><Link to="/Celerbirity">인물</Link></li>
            </ul>
            <LoginControl1/>

        </div>
    )
}

export default Header