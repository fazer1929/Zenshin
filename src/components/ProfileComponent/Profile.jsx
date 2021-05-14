import React from 'react'
import {useAuth} from '../../contexts/AuthContext';

function Profile() {
    const {currentUser, logout} = useAuth();

    return (
        <div>
            {
                currentUser && (
                    <div>
                        Profile
                        <div>
                            <button onClick={logout}>Logout</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Profile
