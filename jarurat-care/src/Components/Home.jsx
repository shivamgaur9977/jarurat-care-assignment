import Navbar from '../ComponentHelper/Navbar'
import '../CSS/Home.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    let navigate = useNavigate();

    let handleClick = () => {
        navigate("/patients")
    }

    return (
        <>
            <Navbar />
            <div className="container flex flex-col items-center text-center gap-2 md:gap-4 relative z-10 mt-3">
                <h1 data-svelte-h="svelte-1ve57gn">JARURAT CARE</h1>
                <h2 style={{ color: '#132F78' }} data-svelte-h="svelte-5bxyh7">Jaisi Jarurat Vaisi Care</h2>
                <img src="https://jc.vercel.app/_app/immutable/assets/logo-transparent.BSvw7Cn6.webp" style={{width:"275px"}} alt="logo-image"/>
                <p className="m-3" data-svelte-h="svelte-16l7yf2">Providing support, guidance, hope and personalized care for
                    <span className="underline font-bold">cancer patients</span>
                    and their families. Here to ensure you never face your journey alone.</p>
                <div className="my-4"></div>
                <a>
                    <button className="py-3 px-5 rounded-5" style={{backgroundColor: '#92c7cf'}} onClick={handleClick}>See Patients</button>
                </a>
            </div>
        </>
    )
}