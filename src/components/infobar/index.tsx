'use client'
import React from 'react'
import { Book, Headphones, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import Link from 'next/link'
import Logotipo from '../icons/logotipo'
import { UserButton } from '@clerk/nextjs'

type Props = {}

const InfoBar = (props: Props) => {

  return (
    <div className='dark:bg-black flex items-center justify-between px-4 py-4'>
      <Link
        href="/"
      >
        <Logotipo size="sm" />
      </Link>
      <div className="flex flex-row justify-end gap-6 items-center w-full">
        <span className="flex items-center rounded-full bg-muted px-4">
          <Search />
          <Input
            placeholder="Quick Search"
            className="border-none bg-transparent"
          />
        </span>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <Headphones />
            </TooltipTrigger>
            <TooltipContent>
              <p>Contact Support</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <Book />
            </TooltipTrigger>
            <TooltipContent>
              <p>Guide</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <UserButton />
      </div>
    </div>
  )
}

export default InfoBar