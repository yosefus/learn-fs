import CategoryModel from '../models/category';
import {
   createBlogCreator, deleteBlogCreator,
   findAllBlogsCreator,
   findBlogById,
   findBlogByIdCreator,
   updateBlogCreator
} from './blog'
import {
   createCategoryCreator, 
   deleteCategoryCreator, 
   findAllCategories,
   findAllCategoriesCreator,
   findCategoryById,
   findCategoryByIdCreator,
   updateCategoryCreator,
} from './category'
import { deleteByPublicIdCreator, getByFolderCloudinaryCreator, uploadCloudinaryCreator } from './cloudinary'


async function create() {
   try {
      const all = await CategoryModel.find()
      console.log({all});
      
      if (all.length) return;
      const list = ["html", "css", "javascript", "typescript", "react", "next", "node"]
      const res = await CategoryModel.insertMany(list.map(l => ({ name: l })))
      console.log(res);
      return res
      
   } catch (error) {
      console.log('error create', error);
      
   }
}

const functions: any = {
   create,
   createBlogCreator,
   deleteBlogCreator,
   findBlogById,
   updateBlogCreator,
   findAllBlogsCreator,
   uploadCloudinaryCreator,
   getByFolderCloudinaryCreator,
   deleteByPublicIdCreator,
   findBlogByIdCreator,
   createCategoryCreator, 
   deleteCategoryCreator, 
   findAllCategories,
   findAllCategoriesCreator,
   findCategoryById,
   findCategoryByIdCreator,
   updateCategoryCreator,
}

export default functions