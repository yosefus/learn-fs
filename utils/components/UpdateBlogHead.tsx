'use client'

import { Form, apiReq } from '@/react-tailwind-components'
import BlogHead from '@/utils/components/BlogHead'
import { useState } from 'react'


export default function UpdateBlogHead({data, id}: {data: any, id: string}) {
   const [newData, setNewData] = useState(data ? JSON.parse(data): {})

   async function createBlog(data: any) {
      // TODO - send the head only and received the head only
      const res = await apiReq({ path: '/updateBlogCreator', body: { data , id} })
      setNewData(res)
   }

   return (
      <div >
         <div className='w-[600px] max-w-full p-3 card mx-auto mt-12'>
            <Form onSubmit={createBlog} title='עריכת ראש הבלוג' showTitle>
               <BlogHead data={newData} />
            </Form>
         </div>
      </div>
   )
}