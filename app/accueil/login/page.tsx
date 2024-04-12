import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from 'lucide-react'

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Connexion</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-green-400">
        <DialogHeader>
          <div className='border-b-2 border-gray-800'><img className='w-[30%]  mx-auto' src='/logo.png'/>
          <DialogTitle className='text-center p-2'>Connexion</DialogTitle></div>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="mail" className="text-right">
              Mail
            </Label>
            <Input
              id="mail"
              // defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Password" className="text-right">
              Password
            </Label>
            <Input
              id="Password"
              // defaultValue=""
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          {/* adding buttons for connexion and subscription */}
          <Button type="submit" className='hover:bg-green-300'>Connexion</Button>
          <Button type="submit" className='hover:bg-green-300'>Créer un compte</Button>
          {/* <Button type="submit">Save changes</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
