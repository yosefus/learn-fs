import { Table } from '@/react-tailwind-components'
import { CategoryInterface } from '@/server/models/category'
import { FaEye } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'

interface Props {
   prefetchData?: string
}

export default function AllCategoriesTable({ prefetchData }: Props) {
   const allCategories = JSON.parse(prefetchData || '[]')
   const categoriesWithLinks = allCategories.map((c: CategoryInterface) => ({
      ...c,
      editLink: `/admin/category/${c._id}`, viewLink: `/admin/category/${c._id}/view`
   }))

   return (
      <div className='container mx-auto px-1 rounded-lg'>
         <Table
            columns={[
               { key: 'name', name: 'שם', type: 'string' },
               { key: 'isPublish', name: 'פורסם', type: 'boolean' },
               { key: 'isActive', name: 'פעיל', type: 'boolean' },
               { key: 'image', name: 'תמונה', type: 'string' },
               { key: 'color', name: 'צבע', type: 'string' },
               { key: 'createdAt', name: 'נוצר', type: 'date' },
               { key: 'updatedAt', name: 'נערך', type: 'date' },
            ]}
            data={categoriesWithLinks}
            orderByOptions={[]}
            loading={false}
            links={[
               { key: 'editLink', element: <MdEdit /> },
               { key: 'viewLink', element: <FaEye /> },
            ]}
         />
      </div>)
}
