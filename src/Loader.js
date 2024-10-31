import { useEffect } from "react";
import bg from './pages/universe-7804938_1920.jpg'
const Loader = () => {
    useEffect(()=>{
        document.body.style.backgroundImage=`url(${bg})`
    })
    return ( 
        <div className=" flex flex-col justify-center items-center">
            <p className="text-white text-5 ">Loading...</p>
<svg className="animate-hover" width="500px" height="500px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="m16.75 28.37a14.3 14.3 0 0 1 3.34-6.31 14.54 14.54 0 0 1 5.88-4c.53-.15 2.84-.34 2.84-.34s0-1.75.78-2a8.24 8.24 0 0 1 1.72-.38v-2.84s-1.53-.28-1.78-1.56.69-2.44 2.47-2.38 2.56 1.25 2.21 2.53a2.32 2.32 0 0 1 -1.84 1.5l-.06 2.69s2.06 0 2.12 1.22.07 1.34.07 1.34 4.71 0 7.68 3.06a26.82 26.82 0 0 1 4.6 5.94 10.68 10.68 0 0 1 .09 1.53 26.08 26.08 0 0 1 9.41 3.47c4 2.69 5.22 4.41 5 8.56a11.29 11.29 0 0 1 -5.07 9.13c-2.84 1.87-6.09 5-15.93 5.75a54.76 54.76 0 0 1 -23.28-3.19c-6-2.09-10.22-4.4-12.72-7.81a9.17 9.17 0 0 1 -.44-9.44c1-1.47 3.88-3.37 7-4.59a52.93 52.93 0 0 1 5.91-1.88z" fill="#1d1d1b"/> <path d="m19.68 35.06a8 8 0 0 1 -1.28-4.44 15.5 15.5 0 0 1 3.91-8.5 11.57 11.57 0 0 1 7.69-3.18c3.15-.19 6.62.43 8.72 1.81a10.73 10.73 0 0 1 2.56 2s-1.35 0-1.38.16-.09.71 0 .75a15.94 15.94 0 0 1 2.63.34c.19.19 2.25 2.06 2.59 3.94a15.76 15.76 0 0 1 0 5c-.12-.1-5.69-2.69-5.81-2.63s-.31.59-.22.69 5.94 2.53 6 2.81-.13 1.78-.13 1.78-5.78-2.87-6-2.72-.5.57-.34.69 6.31 2.75 6.28 2.94-.81.75-1.22.94l-.56.25a53.62 53.62 0 0 0 -4.88-2.75c-.21.09-.65.28-.43.59s4.37 2.41 4.15 2.62-3.87.82-9.09.72-10.15-.37-13.19-3.81z" fill="#cbe7f5"/> <path d="m31.47 9.44c1.07-.13 1.93.4 1.75 1.31s-2.07.78-2.47.5a1.06 1.06 0 0 1 .72-1.81z" fill="#cbe7f5"/> <path d="m30.34 17.62a.37.37 0 0 1 -.41-.43c.07-.32.5-.91 1.69-.85s1.63.35 1.78.72 0 .44-.37.5-2.35 0-2.69.06z" fill="#696a9b"/> <g fill="#1d1d1b"> <path d="m39.84 25.4a21.45 21.45 0 0 1 4 1.72c.09.22.16.72 0 .75a33.77 33.77 0 0 1 -3.88-1.43c-.21-.16-.24-1-.12-1.04z"/> <path d="m40 28a40.88 40.88 0 0 1 4.46 1.93c0 .22.1.5-.12.5a41.64 41.64 0 0 1 -4.38-1.46c-.15-.19-.21-.97.04-.97z"/> <path d="m25 22.59a3.8 3.8 0 0 1 1.87-1.69c1.38-.59 2.22-.62 2.41-.43a.64.64 0 0 1 .12.68 13.46 13.46 0 0 0 -2.4.85c-.66.5-1.06 1.09-1.38 1.19s-.69-.41-.62-.6z"/> <path d="m23.34 24.87c.31-.1 1.81.16 1.81.47a8.74 8.74 0 0 0 -.06 4c.56 1.78 1.72 4.44 1.53 5.28a1.47 1.47 0 0 1 -1.62 1.1 11.25 11.25 0 0 1 -3.6-1.35c-.81-.56-1.06-1.31-.93-3.12s1.93-6.06 2.87-6.38z"/> </g> <path d="m23.68 25.87c.16 0 .19.13.16.41a20.35 20.35 0 0 0 .72 5.47c.69 2.19.84 2.5.59 2.62a9.49 9.49 0 0 1 -3.34-1 10.1 10.1 0 0 1 .12-3.87c.35-1.88 1.35-3.5 1.75-3.63z" fill="#e6e4da"/> <path d="m16.15 29.87c.27 0 .07 4.38 2 6.38s4.85 3.31 9.35 3.9a36 36 0 0 0 12.06-.15 20.52 20.52 0 0 0 7.25-2.91.72.72 0 0 0 .28-.56s.06-6.06.16-6.16 5.5.69 8.43 3 3.69 3.69 3.6 6.22a6.87 6.87 0 0 1 -2.35 4.66 9.78 9.78 0 0 1 -1.81 1.22s-4.25-3.35-4.44-3.32-.62.54-.46.72 4.46 3 4.25 3.19a13.24 13.24 0 0 1 -1.66.75s-2.34-1.81-2.47-1.81-.66.4-.5.65 2.16 1.44 2.06 1.54a49.56 49.56 0 0 1 -14.15 2.09 71.36 71.36 0 0 1 -20.13-2.38 44.59 44.59 0 0 1 -11.5-5.21 4.72 4.72 0 0 1 0-6.75 23.42 23.42 0 0 1 10.03-5.07z" fill="#92a0d1"/> <path d="m52.75 40.62c.38-.11 3.34 2.35 3.28 2.53s-.31.54-.56.44a24.39 24.39 0 0 1 -3.22-2.34c-.07-.25.28-.56.5-.63z" fill="#1d1d1b"/> <path d="m54.5 40c.12 0 .65-.44.87-.41a10.77 10.77 0 0 1 2.56 1.94c-.09.19-.15.53-.5.44s-2.93-1.97-2.93-1.97z" fill="#1d1d1b"/> <path d="m56.78 38.81c.12-.12.22-.53.62-.37s.85.93.72 1.09-.15.37-.28.28-1.06-1-1.06-1z" fill="#1d1d1b"/> <path d="m51.34 35.34a2.57 2.57 0 0 1 3.66 2c.4 2.38-3.82 2.88-4.66 1.41a2.32 2.32 0 0 1 1-3.41z" fill="#1d1d1b"/> <path d="m52 36.19a1.69 1.69 0 0 1 2 1.5c.12 1.15-2.28 1.4-2.75.5a1.41 1.41 0 0 1 .75-2z" fill="#cbe7f5"/> <path d="m43.78 41.78c.9-.25 2.81-.28 3.31 1.19s-1.94 2.93-3.37 2.72a2.13 2.13 0 0 1 -1.82-2.16 2.8 2.8 0 0 1 1.88-1.75z" fill="#1d1d1b"/> <path d="m44.43 42.56c.64-.06 1.75.5 1.41 1.13s-1.66 1.06-2.19.56a1 1 0 0 1 .78-1.69z" fill="#cbe7f5"/> <path d="m31.25 42.75c.76-.11 3.93.06 4.09 1.62s-1.62 3.19-4.28 2.53a2.09 2.09 0 0 1 .19-4.15z" fill="#1d1d1b"/> <path d="m31.28 43.78a3.49 3.49 0 0 1 2.25.66c.53.53.06 1.43-1.35 1.4s-2.56-1.65-.9-2.06z" fill="#cbe7f5"/> <path d="m18.09 40.22c1.33-.22 4.63.47 4.53 2.59s-4.22 2.56-5.62 1.34a2.17 2.17 0 0 1 1.09-3.93z" fill="#1d1d1b"/> <path d="m18 41.34c.87-.1 3.12.25 3.34 1.31s-1.66 1.54-3.09.85-.82-2.1-.25-2.16z" fill="#cbe7f5"/> <path d="m10.93 34.34c1.1-.07 3.72.1 3.19 2.5s-4.22 2.28-5 .66a2.18 2.18 0 0 1 1.81-3.16z" fill="#1d1d1b"/> <path d="m11 35.37c.87-.22 2.19.28 1.81 1.35s-1.59 1-2.41.47-.05-1.65.6-1.82z" fill="#cbe7f5"/> <path d="m7.22 44.15c.28 0 5.65 2.88 10.31 4.13a51.91 51.91 0 0 0 15.47 2.25c7.09 0 10.68-.09 15.65-1.31s7.82-2.88 8-2.75a.33.33 0 0 1 .1.47 23.6 23.6 0 0 1 -10.35 5.9 48.07 48.07 0 0 1 -22.15-.12c-8.19-2.07-12.5-4-14.22-5.41s-3.28-3.19-2.81-3.16z" fill="#696a9b"/> </g>

</svg>


        </div>
     );
}
 
export default Loader;