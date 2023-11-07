import React from 'react'

class LoginControl extends React.Component {
	constructor(props) {
		super(props);

		this.state = { isLoggedIn : false };

		this.handleLoginClick = this.handleLoginClick.bind(this);
	}

	handleLoginClick() {
		this.setState(prevState => ({
			isLoggedIn : !prevState.isLoggedIn
		}));
	}

	render() {
		return (
            <div>
				{this.state.isLoggedIn ? <span className='Login_text'><button className='Login_btn' onClick={this.handleLoginClick}>로그아웃</button>환영합니다!</span> : <span className='Login_text'><button className='Login_btn' onClick={this.handleLoginClick}>로그인</button>로그인 해주세요!</span>}
            </div>
		)
	}
}

export default LoginControl