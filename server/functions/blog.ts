"use server"

import BlogModel, { BlogInterface } from "../models/blog";
import Controller from "./mainController";

const blogController = new Controller(BlogModel)


export const createBlogCreator = async ({ blog }: { blog: Partial<BlogInterface> }) => {
   return blogController.create(blog)
}

export const updateBlogCreator = async ({ id, blog }: { id: string, blog: Partial<BlogInterface> }) => {
   return blogController.findByIdAndUpdate(id, blog)
}

export const deleteBlogCreator = async ({ id }: { id: string }) => {
   return blogController.deleteById(id)
}

export const findBlogById = async ({ id }: { id: string }) => {
   return blogController.findById(id)
}

