import React from 'react'

function page({ params }) {
    return (
        <div>
            you are visiting blog post of {params.postId}
        </div>
    )
}

export default page
