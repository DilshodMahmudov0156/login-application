import './style.css';
import {signInWithPopup, createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {auth, provider} from "../../firebaseConfig";
import {useState} from "react";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getEmVal = (e) => {
        setEmail(e.target.value);
    };
    const getPassVal = (e) => {
        setPassword(e.target.value);
    };

    const loginWithEmailPassword = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
        }).catch((error) => {
            console.log(error.message);
        })

    }

    const loginPopup = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider).then((data) => {
            console.log(data.user);
        })

    };

    return (
        <div className="login-panel">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-md-5 col-sm-7 col-10 login-parent">
                        <h4 className="text-center">LogIn</h4>
                        <form onSubmit={(e) => {loginWithEmailPassword(e)}}>
                            <input type="email" placeholder="Enter_your_email_name_@..." onChange={(e) => {getEmVal(e)}}/>
                            <input type="password" placeholder="Enter_your_email_password****" onChange={(e) => {getPassVal(e)}}/>
                            <button className="enter-btn">Enter <i className="bi bi-hand-index-thumb"></i></button>
                            <button className="enter-btn-2" onClick={(e) => {loginPopup(e)}}>LogIn with <i className="bi bi-google"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;