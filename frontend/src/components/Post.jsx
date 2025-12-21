import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import { Bookmark, MessageCircle, MoreHorizontal, Send } from 'lucide-react'
import { Button } from './ui/button'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import CommentDialog from './CommentDialog'

const Post = () => {
    const [text, setText] = useState("");
    const [open, setOpen] = useState(false);
    const changeEventHandler = (e) => {
        const inputText = e.target.value;
        if (inputText.trim()) {
            setText(inputText);
        }
        else {
            setText("");
        }
    }
    return (
        <div className='my-8 w-full max-w-sm mx-auto'>
            <div className='flex items-center justify-between'>
                <div className="flex items-center gap-2">
                    <Avatar>
                        <AvatarImage src="" alt="Post_image">
                            <AvatarFallback>CN</AvatarFallback>
                        </AvatarImage>
                    </Avatar>
                    <h1>Username</h1>
                </div>
                <Dialog >
                    <DialogTrigger asChild>
                        <MoreHorizontal className='cursor-pointer' />
                    </DialogTrigger>
                    <DialogContent className='flex flex-col items-center text-sm text-center  bg-white'>
                        <Button variant='ghost' className='cursor-pointer w-fit text-[#ED4956] font-bold hover:bg-gray-200'  >Unfollow</Button>
                        <Button variant='ghost' className='cursor-pointer w-fit  hover:bg-gray-200'>Add to collections</Button>
                        <Button variant='ghost' className='cursor-pointer w-fit  hover:bg-gray-200'>Delete</Button>
                    </DialogContent>
                </Dialog>
            </div>
            <img
                className='rounded-sm my-2 w-full aspect-square object-cover'
                src="https://images.pexels.com/photos/1270184/pexels-photo-1270184.jpeg"
                alt="post_image"
            />
            <div className='flex flex-row justify-between my-2'>
                <div className='flex items-center gap-3 '>
                    <FaRegHeart size={'22px'} className='cursor-pointer hover:text-gray-600' />
                    <MessageCircle onClick={() => setOpen(true)} className='cursor-pointer hover:text-gray-600' />
                    <Send className='cursor-pointer hover:text-gray-600' />
                </div>
                <Bookmark className='cursor-pointer hover:text-gray-600' />
            </div>
            <span className='font-medium block mb-2'>1K likes</span>
            <p>
                <span className='font-medium mr-2'>username</span>
                caption
            </p>
            <span onClick={() => setOpen(true)} className='cursor-pointer text-sm text-gray-400'>View all 10 comments</span>
            <CommentDialog open={open} setOpen={setOpen} />
            <div className='flex items-center justify-between'>
                <input
                    type='text'
                    placeholder='Add a comment...'
                    value={text}
                    onChange={changeEventHandler}
                    className='outline-none text-sm w-full'
                />{

                    text && <span className='text-[#3BADF8]'>Post</span>
                }

            </div>

        </div>

    )
}

export default Post