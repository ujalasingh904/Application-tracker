import { useAuthContext } from "../context/AuthContext"
import logoutHook from "../hooks/logoutHook"

const Navbar = () => {
    const { authUser } = useAuthContext()
    const { loading, logout } = logoutHook();

    const handleLogout = async (e) => {
        e.preventDefault();
        await logout()
    }
    return (
        <div> 

            <div className='py-4 md:py-6 px-4 md:px-12 flex justify-between items-center border-b-4 text-white'>
                <div className="w-[50%]">
                    <h1 className='text-sm sm:text-2xl md:text-3xl lg:text-5xl font '>Application Tracker</h1>
                </div>

                <div className='flex justify-end items-center gap-2 sm:gap-4 md:gap-8 '>
                    <h2 className='font-semibold  text-xs sm:text-base md:text-lg  text-white '> Hello {authUser.name} 👋</h2>
                    {loading ? <div className="loader"></div> :
                        <button
                            className="p-2 sm:px-4 text-xs sm:text-base md:text-lg border-[2.5px] border-solid border-sky-500 rounded-md cursor-pointer hover:border-white hover:scale-105 transition-all ease-in  text-white font-semibold"
                            onClick={handleLogout}
                        >Logout</button>
                    }
                </div>
            </div>

        </div>
    )
}

export default Navbar