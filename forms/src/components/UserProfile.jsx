import React from 'react';
import { Avatar } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';


function UserProfile(props) {
    const { pictureUrl } = props;

    return (
        <div>
            {pictureUrl ? (
                <Avatar alt="User profile picture" src={pictureUrl} />
            ) : (
                    <AccountCircle />
            )}
        </div>
    );
}

export default UserProfile;