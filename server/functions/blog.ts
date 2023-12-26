"use server"
import BlogModel, { BlogInterface } from "../models/blog";
import Controller from "./mainController";

export const blogController = new Controller(BlogModel)

const blogFn = {
    createBlogCreator : (blog: Partial<BlogInterface>) => {
      return blogController.create(blog)
   },
   
    updateBlogCreator : (id:string , blog: Partial<BlogInterface>) => {
      return blogController.findByIdAndUpdate(id, blog)
   },
   
    deleteBlogCreator : (id:string ) => {
      return blogController.deleteById(id)
   },
   
    findBlogById : (id:string ) => {
      return blogController.findById(id)
   },
}


export default blogFn