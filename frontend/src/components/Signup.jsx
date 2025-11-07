import React, { useState } from "react";
import {Input} from "../components/ui/input"
import {Label} from "../components/ui/label"
import { Button } from '@/components/ui/button';
import axios from "axios";
import { toast } from "sonner";

const Signup = () => {
    const [input , setInput] = useState({
        username:"",
        email:"",
        password:""
    });
    const changeEventHandler = (e) => {
        setInput({...input , [e.target.name]:e.target.value});
    }
    const signupHandler = async(e) => {
        e.preventDefault();
        console.log(input);
        try {
            const res = await axios.post("http://localhost:800/api/v1/user/register" , input , {
                headers : {
                    'Content-Type' : 'application/json'
                },
                withCredentials:true,
            });
            if(res.data.success){
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
    return(
        <div className="flex items-center w-screen h-screen justify-center">
            <form onSubmit={signupHandler} className="shadow-lg flex flex-col gap-5 p-8">
                <div className="my-4">
                <h1 className="text-center font-bold text-xl">LOGO</h1>
                <p className="text-sm text-center">Signup to see the post from your socials</p>
                </div>
                <div>
                    <Label className="py-2 font-medium">Username</Label>    
                    <Input type="text" name="username" value={input.username} onChange = {changeEventHandler} className="focus-visible:ring-transparent my-2"/>
                </div>
                <div>
                    <Label className="py-2 font-medium">Email</Label>    
                    <Input type="email" name="email" value={input.email} onChange = {changeEventHandler} className="focus-visible:ring-transparent my-2"/>
                </div>
                <div>
                    <Label className="py-2 font-medium">Password</Label>    
                    <Input type="text" name="password" value={input.password} onChange = {changeEventHandler} className="focus-visible:ring-transparent my-2"/>
                </div>
                <Button>Signup</Button>
            </form>

        </div>
    )
}
export default Signup