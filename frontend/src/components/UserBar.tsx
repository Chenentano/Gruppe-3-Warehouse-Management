import './UserBar.css';

type UserBarProps = {
    loginFunction: () => void,
    logoutFunction: () => void
}

export function UserBar(props: UserBarProps): JSX.Element {

    function onLogin() {
        console.log('onLogin: Login Button pressed');
        if (props.loginFunction) {
            props.loginFunction();
        }
    }

    function onLogout() {
        console.log('onLogout: Logout Button pressed');
        if (props.logoutFunction) {
            props.logoutFunction();
        }
    }

    return (<>
    <div className="user-bar">
        <div></div>
        <div className="login-logout-button-container" >
            <button className="button-login-logout button-login" onClick={onLogin}>login</button>
            <button className="button-login-logout button-logout" onClick={onLogout}>logout</button>
        </div>
    </div>
</>)
}