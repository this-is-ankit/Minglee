import React from 'react'
import { Dialog, DialogContent } from './ui/dialog'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Link } from 'react-router-dom'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { MoreHorizontal } from 'lucide-react'

const CommentDialog = ({ open, setOpen }) => {
  return (
    <div>
      <Dialog open={open}>
        <DialogContent onInteractOutside={() => setOpen(false)} className='max-w-5xl p-0 flex flex-col' >
          <div className='flex flex-1 '>
            <div className='w-1/2'>
              <img className='w-full h-full object-cover rounded-l-lg' src="https://images.pexels.com/photos/1270184/pexels-photo-1270184.jpeg" alt="post_immg" />
            </div>
            <div className="w-1/2 flex flex-col justify-between">
              <div className='flex items-center justify-between p-4'>
                <div className="flex gap-3 items-center"></div>
                <Link>
                  <Avatar>
                    <AvatarImage>
                      <AvatarFallback>CN</AvatarFallback>
                    </AvatarImage>
                  </Avatar>
                </Link>
              </div>
              <Link className='font-semibold text-xs'>Username</Link>
              {/* <span className='text-gray-600 text-sm '>Bio here...</span> */}
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <MoreHorizontal/>
              </DialogTrigger>
              <DialogContent className='flex flex-col items-center text-sm text-center'>
                <div className='cursor-pointer w-full text-[#ED4956] font-bold'>
                  Unfollow
                </div>
                <div className='cursor-pointer w-full'>
                  Add to favorites
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default CommentDialog    