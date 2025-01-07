'use client'; // Required because error.js is client-side
import { useEffect } from 'react';
// purpose: Catches and displays errors specific to routes under /posts.
export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try Again</button>
        </div>
    );
}
