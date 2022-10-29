import React from 'react'

export default function Profile() {
    return (
        <nav className='nav-container'>
            <div className="arrow-icon-circle">
                <img className='arrow-icon' src="https://i.ibb.co/YBFSH2m/Icon.png" alt="" />
                <img className='dots-icon' src='https://i.ibb.co/P9K2h8Q/dots.png' alt='' />
            </div>
            <div className='profile-image-div'>
                <img id="profile__image" src='https://i.ibb.co/rbfZj5y/linkLogo.jpg' alt='profile pics='/>
            </div>
            <h3>Busayo Ogunde</h3>
        </nav>
    )
}
