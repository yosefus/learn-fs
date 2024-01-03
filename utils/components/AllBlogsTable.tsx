import { Table } from '@/react-tailwind-components'
import { BlogInterface } from '@/server/models/blog'
import React from 'react'
import { FaEye } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'

interface Props {
   prefetchData: string
}

export default function AllBlogsTable({ prefetchData }: Props) {
   const allBlogs = JSON.parse(prefetchData)
   const blogsWithLinks = allBlogs.map((b: BlogInterface) => ({
      ...b,
      cat: b.category.name,
      editLink: `/admin/blog/${b._id}`, viewLink: `/admin/blog/${b._id}/view`
   }))

   return (
      <div className='container mx-auto px-1 rounded-lg'>
         <Table
            columns={[
               { key: 'title', name: 'כותרת', type: 'string' },
               { key: 'isPublish', name: 'פורסם', type: 'boolean' },
               { key: 'isActive', name: 'פעיל', type: 'boolean' },
               { key: 'cat', name: 'קטגוריה', type: 'string' },
               { key: 'createdAt', name: 'נוצר', type: 'date' },
               { key: 'updatedAt', name: 'נערך', type: 'date' },
            ]}
            data={blogsWithLinks}
            orderByOptions={[]}
            loading={false}
            links={[
               { key: 'editLink', element: <MdEdit /> },
               { key: 'viewLink', element: <FaEye /> },
            ]}
         />
      </div>)
}
