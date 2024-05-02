import './UserBar.css';

export function UserBar() {
    function onLogin() {
        console.log('onLogin: Login Button pressed');
    }
    return (<>
        <div className="user-bar">
            <h2>USER</h2>
            <button className="button-login" onClick={() => {onLogin}}>login</button>
        </div>
    </>)
}