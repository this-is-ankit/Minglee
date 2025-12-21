import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { MoreHorizontal } from 'lucide-react'

const CommentDialog = ({ open, setOpen }) => {
  const [text, setText] = useState("");

  const changeEventHandler = (e) => {
    const inputText = e.target.value;
    if (inputText.trim()) {
      setText(inputText);
    } else {
      setText("");
    }
  }

  const sendMessageHandler = async () => {
    alert(text)
  }

  return (
    <Dialog open={open}>
      <DialogContent onInteractOutside={() => setOpen(false)} className='max-w-5xl p-0 flex flex-col bg-white'>
        <div className='flex flex-1'>
          <div className='w-1/2'>
            <img className='w-full h-full object-cover rounded-l-lg' src="https://images.pexels.com/photos/1270184/pexels-photo-1270184.jpeg" alt="post_immg" />
          </div>
          <div className="w-1/2 flex flex-col justify-between bg-white rounded-r-lg">
            <div className='flex items-center justify-between p-4'>
              <div className="flex gap-3 items-center">
                <Link>
                  <Avatar>
                    <AvatarImage />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
                <Link className='font-semibold text-xs'>Username</Link>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <MoreHorizontal className='cursor-pointer' />
                </DialogTrigger>
                <DialogContent className='flex flex-col items-center text-sm text-center bg-white'>
                  <div className='cursor-pointer w-full text-[#ED4956] font-bold'>Unfollow</div>
                  <div className='cursor-pointer w-full'>Add to favorites</div>
                </DialogContent>
              </Dialog>
            </div>
            <hr />
            <div className='flex-1 overflow-y-auto max-h-96 p-4'>
              Comments ayenge yhannn....
            </div>
            <div className='p-4'>
              <div className='flex items-center gap-2'>
                <input
                  type="text"
                  value={text}
                  onChange={changeEventHandler}
                  placeholder='Leave a comment ...'
                  className='w-full outline-none border-gray-300 p-2 rounded'
                />
                <Button disabled={!text.trim()} onClick={sendMessageHandler} variant="outline">Send</Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
export default CommentDialog