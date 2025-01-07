import Image from "next/image";


// static metadata 
export const metadata = () => {
  title: 'home'
}


// smilar we can use api calls or params in similar way that will be called dynamic meta deta
//output 
/*

  <head>
  <title>Home</title>
  </head>
*/


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <h1>Basics of Nextjs And Exploring NextJs files structure</h1>
    </div>
  );
}
