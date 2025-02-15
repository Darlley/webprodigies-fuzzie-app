import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

type Props = {
  size: "sm" | "3xl"
}

export default function Logotipo(props: Props) {
  const { size } = props
  return (
    <div className='flex items-center gap-[2px]'>
        <p className={clsx(
          "font-bold",
          size === "3xl" ? "text-3xl" :  "text-sm",
        )}>Fu</p>
        <Image
          src="/fuzzieLogo.png"
          width={size === "3xl" ? 15 : 12}
          height={size === "3xl" ? 15 : 12}
          alt="fuzzie logo"
          className="shadow-sm"
        />
        <p className={clsx(
          "font-bold",
          size === "3xl" ? "text-3xl" : "text-sm",
        )}>zie</p>
        </div>
  )
}
