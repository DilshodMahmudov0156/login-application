import "./profile.css";
import RightSide from "../administration/rightSide";

function Profile({}) {

    const logOut = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div className="profile-box">
            <RightSide/>
        </div>
    );
}

export default Profile;