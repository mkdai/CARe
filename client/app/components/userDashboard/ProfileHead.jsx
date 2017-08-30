import React from 'react';

export default class ProfileHead extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <div className="UserPic">
                    <img src="http://www.hazelearth.com/admin-content/thumbs/nouser.jpg" className="img-responsive" id="user-pic"/>
                    <div className="profile-info">
                        <div>Brandon Tilley</div>
                        <div><a href="#" className="reviews-link">Reviews</a></div>
                        <div><a href="#" className="favorites-link">Favorites</a></div>
                        <button className="btn-primary" id="edit-profile-button">Edit Profile</button>
                    </div>     
                </div>   
            </div>
        );
    }
}