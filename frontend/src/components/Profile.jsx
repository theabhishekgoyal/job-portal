import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobtable from './AppliedJobtable'
const skills = ["HTML", "CSS", "javascript", "React", "mongodb", "C++"];
const isResume = true;
const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-4 '>

            <Avatar className="h-24 w-24">
              <AvatarImage src="https://github.com/shadcn.png"
                alt="profile pic" />
            </Avatar>
            <div>
              <h1 className='font-medium text-xl'>Full Name</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <Button className="text-right" variant="outline"> <Pen /></Button>
        </div>
        <div className='my-5'>
          <div className='flex items-center gap-3 my-2'>
            <Mail />
            <span>example@gmail.com</span>
          </div>
          <div className='flex items-center gap-3 my-2'>
            <Contact />
            <span>64853489</span>
          </div>
        </div>
        <div className='my-5'>
          <h1 >Skills</h1>
          <div className='flex items-center gap-1'>
            {
              skills.length !== 0 ? skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>Add some Skills</span>
            }
          </div>
        </div>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label className='text-md font-bold'>Resume</Label>
          {isResume ? <a target='blank' href='http://google.com' className='text-blue-500 w-full hover:underline cursor-pointer'>abhishek_goyal_resume</a> : <span>Add resume</span>
          }
        </div>

      </div>
      <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
        <h1>
          Applied jobs
        </h1>
        {/* application table */}
        <AppliedJobtable />
      </div>
    </div>
  )
}

export default Profile
