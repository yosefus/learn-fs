import { connectToMongo } from '@/react-tailwind-components/backend/connect'
import { findAllBlogsCreator } from '@/server/functions/blog'
import { BlogInterface } from '@/server/models/blog'
import Link from 'next/link'
import React from 'react'

export default async function page() {
   await connectToMongo()
   const allBlogs = await findAllBlogsCreator() as BlogInterface[]

   return (
      <div>
         <ul>
            {allBlogs.map(blog =>
               <li key={blog._id}>
                  <Link href={`/admin/blog/${blog._id}`} >{blog.title}</Link>
               </li>
            )}
         </ul>
      </div>
   )
}
