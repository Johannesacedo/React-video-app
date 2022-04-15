import React from 'react';


const Navbar = () =>{
    return(
        <div className='ui inverted menu'>
            <p className='active item'>
                <img src='/video.png' alt='logo' /> &nbsp;&nbsp;    
                React mini video player
            </p>
        </div>
    );
}

export default Navbar;