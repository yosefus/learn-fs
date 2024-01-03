import { connectToMongo } from '@/react-tailwind-components/backend/connect'
import { findAllCategories } from '@/server/functions/category'
import React from 'react'

export default async function Category() {
   await connectToMongo()
   const allCategories = await findAllCategories()
   
   console.log(allCategories);
   
  return (
    <div>Category</div>
  )
}
