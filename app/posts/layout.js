export default function PostsLayout({ children }) {
    return (
        <div>
            <header>
                <h1>Posts Section</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}

/*
Purpose: Defines a layout for all routes under /posts, ensuring consistent UI like a header, sidebar, or footer.

*/