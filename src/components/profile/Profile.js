import React from 'react';

function Profile({}) {

    const logOut = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h2 className="text-center mt-5">Profile</h2>
                    <button className="btn btn-danger" onClick={logOut}>
                        logOut
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Profile;