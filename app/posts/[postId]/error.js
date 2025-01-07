'use client';
export default function PostError({ error, reset }) {
    return (
        <div>
            <h2>Failed to load the post!</h2>
            <button onClick={() => reset()}>Retry</button>
        </div>
    );
}
    