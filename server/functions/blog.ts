"use server"

import BlogModel, { BlogInterface } from "../models/blog";
import Controller from "@/react-tailwind-components/backend/mainController";

const blogController = new Controller(BlogModel)


export const createBlogCreator = async ({ data }: { data: Partial<BlogInterface> }) => {
   return blogController.create(data)
}

export const updateBlogCreator = async ({ id, data }: { id: string, data: Partial<BlogInterface> }) => {
   return blogController.findByIdAndUpdate(id, data, 'category')
}

export const deleteBlogCreator = async ({ id }: { id: string }) => {
   return blogController.deleteById(id)
}

export const findBlogByIdCreator = async ({ id }: { id: string }) => {
   return blogController.findById(id, undefined, 'category')
}

export const findBlogById = async ({ id }: { id: string }) => {
   const res :BlogInterface = await blogController.findById(id, null, 'category')
   if (!res.isActive || res.isPublish) throw ({code:404 , msg: 'לא נמצא'})
   return  res
}

export const findAllBlogsCreator = async () => {
   return blogController.find({}, null, 'category')
}

