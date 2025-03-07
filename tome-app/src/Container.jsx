import React, { useState } from 'react'
import TopNav from './TopNav'
import ArtworksList from './art-pages/ArtworksList'

function Container() {

    return (
        <div className="flex flex-col min-h-screen w-full p-0">
            <TopNav />
            <div className="flex-grow">
                <ArtworksList />
            </div>
        </div>
    )
}

export default Container;
