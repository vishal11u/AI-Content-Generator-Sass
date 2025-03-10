import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function page() {
    return (
        <div className='flex items-center justify-center md:h-screen bg-slate-100 py-5'>
            <UserProfile />
        </div>
    )
}

export default page
