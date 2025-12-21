import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Dialog, DialogContent, DialogHeader } from './ui/dialog'
import React, { useRef } from 'react'
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const CreatePost = ({ open, setOpen }) => {
    const imageRef = useRef();

    const createPostHandler = async (e) => {
        e.preventDefault();
        try {

        } catch (error) {

        }
    }
    return (
        <Dialog open={open}>
            <DialogContent onInteractOutside={() => setOpen(false)} className="bg-white">
                <DialogHeader className="text-center font-semibold">Create New Post</DialogHeader>
                <div className='flex gap-3 items-center'>
                    <Avatar>
                        <AvatarImage src="" alt="image" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <h1 className='font-semibold text-xs'>Username</h1>
                        <span className='text-gray-600 text-xs'>Bio here...</span>
                    </div>
                </div>
                <Textarea className='focus-visible:ring-transparent border-none' placeholder="Write a caption..." />
                <input ref={imageRef} type='file' className='hidden'/>
                <Button onClick={() => imageRef.current.click()} className="w-fit mx-auto bg-[#0095F6] hover:bg-[#489ad1] cursor-pointer">Select From Device</Button>
            </DialogContent>
        </Dialog>
    )
}

export default CreatePost