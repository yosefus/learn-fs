
import { Text } from '@/react-tailwind-components'
import { connectToMongo } from '@/react-tailwind-components/backend/connect'
import { findAllBlogsCreator } from '@/server/functions/blog'
import { BlogInterface } from '@/server/models/blog'
import AllBlogsTable from '@/utils/components/AllBlogsTable'
import Link from 'next/link'
import { FaEye } from "react-icons/fa"
import { MdEdit } from "react-icons/md"


export default async function page() {
   await connectToMongo()
   const allBlogs = await findAllBlogsCreator() as BlogInterface[]

   return (
      <div>
         <Text type='h1' className='text-center my-4' >כל הבלוגים</Text>
         <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 p-3'>
            {allBlogs.map(blog =>
               <li key={blog._id} className='card py-3 px-2 text-center'>
                  <Text type='h2'>{blog.title}</Text>
                  <Text> is publish: {blog.isPublish ? 'yes' : 'no'} </Text>
                  <Text> is active: {blog.isActive ? 'yes' : 'no'} </Text>
                  <Text>category : {blog.category?.name}</Text>
                  <div className="f-c py-2 gap-2">
                     <Link href={`/admin/blog/${blog._id}`} className='button' >
                        עריכה <MdEdit />
                     </Link>
                     <Link href={`/admin/blog/${blog._id}/view`} className='button'
                     >תצוגה <FaEye />
                     </Link>
                  </div>
               </li>
            )}
         </ul>
         <AllBlogsTable prefetchData={JSON.stringify(allBlogs) } />
      </div>
   )
}
