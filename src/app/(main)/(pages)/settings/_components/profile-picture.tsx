'use client'
import React from 'react'
import UploadCareButton from './uploadcare-button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

type Props = {
  userImage: string | null
  onDelete?: any
  onUpload: any
}

const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {
  const router = useRouter()

  const onRemoveProfileImage = async () => {
    const response = await onDelete()
    if (response) {
      router.refresh()
    }
  }

  return (
    <div className="flex flex-col">
      <p className="text-lg text-white"> Profile Picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center">
        {userImage ? (
          <>
            <div className="size-64 relative">
              <Image
                src={userImage}
                alt="User_Image"
                fill
              />
              <Button
                onClick={onRemoveProfileImage}
                className="absolute top-4 right-4"
                size={'icon'}
                variant='destructive'
              >
                <X />
              </Button>
            </div>
          </>
        ) : (
          <UploadCareButton onUpload={onUpload} />
        )}
      </div>
    </div>
  )
}

export default ProfilePicture