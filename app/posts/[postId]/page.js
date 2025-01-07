'use client'
import React, { useEffect, useState } from 'react'
import PostLoading from './loading'

function page({ params }) {
    const [load, setLoading] = useState(true)
    /**
        React.use() is a special hook that Next.js provides for unwrapping async data. It
        lets you handle promises correctly when working with the App Router, which is why you need to use it to access params safely. 

     */


    const postId = React.use(params).postId;

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    return (
        load ? <PostLoading /> : <div>
            you are visiting blog post of {postId}
        </div>
    )
}

export default page
