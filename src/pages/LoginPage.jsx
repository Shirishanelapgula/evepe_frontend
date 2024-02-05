import  axios  from "axios"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify";
import {VITE_BACKEND_URL} from "../App";


const LoginPage =()=>{

    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const navigate = useNavigate()

    const loginFunction = async (e)=>{

        e.preventDefault()

        if (password === "" || email ===""){

            alert("Please fill out all the input completely")
            return;

        }
        try{

            const response = await axios.post(`${VITE_BACKEND_URL}/user/login`, {email: email ,password:password})
            console.log(response)
            toast.success("You logged in successfully");
            if(response.status === 200){
                localStorage.setItem("userData",email)
                navigate("/home")
            }

        }catch(err){
            console.log(err)

            toast.error(err.response.data.message)

        }

    }


    return(
        <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
        <h2 className="font-semibold text-2xl mb-4 block text-center">
            Enter Your Email and login
        </h2>
        <form onSubmit={loginFunction}>
            <div className="space-y-2">
                <div>
                    <label>Email</label>
                    <input type="text" value={email}  onChange={(e)=>setEmail(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Email"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Password"/>
                </div>
                <div>
                    <button className="block w-full mt-6 bg-green-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-green-600 hover:cursor-pointer">Login</button>
                </div>
            </div>
        </form>
        
    </div>

    )
}

export default LoginPage;