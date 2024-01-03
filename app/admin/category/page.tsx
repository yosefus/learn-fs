import { connectToMongo } from '@/react-tailwind-components/backend/connect'
import { findAllCategoriesCreator } from '@/server/functions/category'
import AllCategoriesTable from '@/utils/components/AllCategoriesTable'
import React from 'react'

export default async function Category() {
   await connectToMongo()
   const allCategories = await findAllCategoriesCreator()

   return (
      <div>
         <AllCategoriesTable prefetchData={JSON.stringify(allCategories)} />
      </div>
   )
}
