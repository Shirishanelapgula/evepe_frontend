import  axios  from "axios"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify";
import {VITE_BACKEND_URL} from "../App"


const RegisterPage =()=>{

    const [username,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const saveDetails = async (e)=>{

        e.preventDefault()

        if (username === "" || email ==="" || password === ""){

            alert("Please fill out all the input completely")
            return;

        }
        try{
            console.log(VITE_BACKEND_URL)
            const response = await axios.post(`${VITE_BACKEND_URL}/user/sign-up`, {username: username, email: email , password : password})
            console.log(response)
            toast.success(`Saved ${response.data.name} Details sucessfully`);
            if(response.status === 200){
                navigate("/login")
            }

        }catch(err){
            console.log(VITE_BACKEND_URL)
            toast.error(err.response.data.message)

        }

    }

    const navigateToLogin=()=>{
        navigate("/login")

    }


    return(
        <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
        <h2 className="font-semibold text-2xl mb-4 block text-center">
            Enter Your Details
        </h2>
        <form onSubmit={saveDetails}>
            <div className="space-y-2">
                <div>
                    <label>Name</label>
                    <input type="text" value={username} onChange={(e)=>setName(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Name"/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" value={email}  onChange={(e)=>setEmail(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Email"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Password"/>
                </div>
                <div>
                    <button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">Register</button>
                </div>
            </div>
        </form>
        <button onClick={()=>navigateToLogin()} className="block w-full mt-6 bg-green-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-green-600 hover:cursor-pointer">Login</button>
        
    </div>

    )
}

export default RegisterPage;