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

            <div className='py-6 px-12 flex justify-between items-center bg-[#c161bc]'>
                <div>
                    <h1 className='font text-4xl'>Application Tracker</h1>
                </div>

                <div className='flex justify-center items-center gap-8'>
                    <h2 className='font-semibold text-lg  text-sky-500'> Hello {authUser.name}</h2>
                    {loading ? <div className="loader"></div> :
                        <button
                            className="p-2 px-4 border-[2.5px] border-solid border-sky-500 rounded-md cursor-pointer hover:border-sky-300 transition-all ease-in hover:scale-[1.1] text-white font-semibold"
                            onClick={handleLogout}
                        >Logout</button>
                    }
                </div>
            </div>

        </div>
    )
}

export default Navbar