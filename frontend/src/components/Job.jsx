import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'

const Job = () => {
  return (
    <div>
      <p>2 days ago</p>
      <Button variant= "outline" className="rounded-full" size="icon"><Bookmark/></Button>
    </div>
  )
}

export default Job