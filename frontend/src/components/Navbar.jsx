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

            <div className='py-6 px-12 flex justify-between items-center border-b-4 text-white'>
                <div>
                    <h1 className='md:text-5xl font'>Application Tracker</h1>
                </div>

                <div className='flex justify-center items-center gap-8'>
                    <h2 className='font-semibold text-lg  text-white'> Hello {authUser.name}</h2>
                    {loading ? <div className="loader"></div> :
                        <button
                            className="p-2 px-4 border-[2.5px] border-solid border-sky-500 rounded-md cursor-pointer hover:border-white hover:scale-105 transition-all ease-in  text-white font-semibold"
                            onClick={handleLogout}
                        >Logout</button>
                    }
                </div>
            </div>

        </div>
    )
}

export default Navbar