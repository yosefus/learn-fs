'use client'

import { Form, apiReq } from '@/react-tailwind-components'
import BlogHead from '@/utils/components/BlogHead'
import { useRouter } from 'next/navigation'


export default function page() {
   const router = useRouter()

   async function createBlog(data: any) {
      const res = await apiReq({ path: '/createBlogCreator', body: { data } })
      router.push(`/admin/blog/${res._id}`)
   }

   return (
      <div >
         <div className='w-96 max-w-full p-3 card mx-auto mt-12'>
            <Form onSubmit={createBlog} title='יצירת בלוג חדש' showTitle>
               <BlogHead />
            </Form>
         </div>
      </div>
   )
}


