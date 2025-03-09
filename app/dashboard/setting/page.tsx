import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function page() {
    return (
        <div className='flex items-center justify-center h-screen bg-slate-100'>
            <UserProfile />
        </div>
    )
}

export default page
