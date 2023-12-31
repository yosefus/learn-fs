import { createBlogCreator , deleteBlogCreator, findBlogById, updateBlogCreator, findAllBlogsCreator} from './blog'
import { uploadCloudinaryCreator , getByFolderCloudinaryCreator} from './cloudinary'

const functions: any = {
   createBlogCreator,
   deleteBlogCreator,
   findBlogById,
   updateBlogCreator,
   findAllBlogsCreator,
   uploadCloudinaryCreator,
   getByFolderCloudinaryCreator,

}

export default functions