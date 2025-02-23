import { useSession } from 'next-auth/react'
import Image from 'next/image';
import React from 'react'

const Profile = () => {
    const {data} = useSession();

  return (
    <div>
        <p>{data?.user?.name}</p>
        <p>{data?.user?.email}</p>
        {data && <Image alt='' src={data?.user?.image || '/s.png'} width={80} height={80} />}
    </div>
  )
}

export default Profile