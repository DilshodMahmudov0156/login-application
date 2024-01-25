import React from 'react';

function Profile({}) {

    const logOut = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div>
        </div>
    );
}

export default Profile;