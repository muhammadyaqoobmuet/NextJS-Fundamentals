
import React from 'react';
import PostLoading from './loading'

async function page({ params }) {
    // const [load, setLoading] = useState(true)
    /**
        React.use() is a special hook that Next.js provides for unwrapping async data. It
        lets you handle promises correctly when working with the App Router, which is why you need to use it to access params safely. 

        // we will use useEffect or useState in client side component 


    1. SSR (Server-Side Rendering)

   -> Purpose: Fetch data on each request. 
** How it works: **
    With SSR, the page is rendered on the server for every request that comes in. When a user visits a page,
  Next.js will fetch the data, generate the HTML, and then send it to the client.
 This happens on each request, ensuring that the data is always up-to-date.

    ** When to use it: **
Use SSR when your page content needs to be fresh with every request and must reflect real-time data (e.g., user profiles).

     */
    const postId = params.postId;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = await response.json()
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 2000)
    // }, [])
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
    )
}

export default page
