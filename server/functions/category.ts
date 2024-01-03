"use server"

import Controller from "@/react-tailwind-components/backend/mainController";
import CategoryModel, { CategoryInterface } from "../models/category";

const categoryController = new Controller(CategoryModel)


export const createCategoryCreator = async ({ data }: { data: Partial<CategoryInterface> }) => {
   return categoryController.create(data)
}

export const updateCategoryCreator = async ({ id, data }: { id: string, data: Partial<CategoryInterface> }) => {
   return categoryController.findByIdAndUpdate(id, data)
}

export const deleteCategoryCreator = async ({ id }: { id: string }) => {
   return categoryController.deleteById(id)
}

export const findCategoryByIdCreator = async ({ id }: { id: string }) => {
   return categoryController.findById(id)
}

export const findCategoryById = async ({ id }: { id: string }) => {
   const res :CategoryInterface = await categoryController.findById(id)
   if (!res.isActive || res.isPublish) throw ({code:404 , msg: 'לא נמצא'})
   return  res
}

export const findAllCategoriesCreator = async () => {
   return categoryController.find()
}

export const findAllCategories = async () => {
   return categoryController.find({ isActive: true, isPublish: true})
}

