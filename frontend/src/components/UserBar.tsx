import './UserBar.css';

export function UserBar() {

    function onLogin() {
        console.log('onLogin: Login Button pressed');
    }

    function onLogout() {
        console.log('onLogout: Logout Button pressed');
    }

    return (<>
    <div className="user-bar">
        <div></div>
        <div className="login-logout-button-container" >
            <button className="button-login-logout button-login" onClick={() => {onLogin}}>login</button>
            <button className="button-login-logout button-logout" onClick={() => {onLogout}}>logout</button>
        </div>
    </div>
</>)
}