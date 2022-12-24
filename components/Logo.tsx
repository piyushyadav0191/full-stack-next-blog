import Image from 'next/image';
import React from 'react'

const Logo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div>
      <Image className='rounded-full object-cover' height={50} width={50} alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOHNnSrP3CX15BIsUNt7h_07bbwdozAnTNkQ&usqp=CAU" />
      <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo