import './style.css';

function Login() {
    return (
        <div className="login-panel">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-md-5 col-sm-7 col-10 login-parent">
                        <h4 className="text-center">LogIn</h4>
                        <form>
                            <input type="email" placeholder="Enter_your_email_@..."/>
                            <input type="password" placeholder="Enter_your_password****"/>
                            <button className="enter-btn">Enter <i className="bi bi-hand-index-thumb"></i></button>
                            <button className="enter-btn-2">LogIn with <i className="bi bi-google"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;