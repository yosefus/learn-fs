"use server"

import BlogModel, { BlogInterface } from "../models/blog";
import Controller from "./mainController";

const blogController = new Controller(BlogModel)


export const createBlogCreator = async ({ data }: { data: Partial<BlogInterface> }) => {
   return blogController.create(data)
}

export const updateBlogCreator = async ({ id, data }: { id: string, data: Partial<BlogInterface> }) => {
   return blogController.findByIdAndUpdate(id, data)
}

export const deleteBlogCreator = async ({ id }: { id: string }) => {
   return blogController.deleteById(id)
}

export const findBlogById = async ({ id }: { id: string }) => {
   return blogController.findById(id)
}

