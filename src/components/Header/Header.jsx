import React from 'react'
import { Header, Image } from 'semantic-ui-react';


const HeaderComponent = () => {
    return (
        <div className='header' >
            <Header as='h1' dividing>
                <Image src='/img/logo.png' />
            </Header>
        </div>
    )
}

export default HeaderComponent
