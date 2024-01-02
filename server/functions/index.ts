import { createBlogCreator , deleteBlogCreator, findBlogById, updateBlogCreator, findBlogByIdCreator, findAllBlogsCreator} from './blog'
import { uploadCloudinaryCreator , getByFolderCloudinaryCreator, deleteByPublicIdCreator} from './cloudinary'

const functions: any = {
   createBlogCreator,
   deleteBlogCreator,
   findBlogById,
   updateBlogCreator,
   findAllBlogsCreator,
   uploadCloudinaryCreator,
   getByFolderCloudinaryCreator,
   deleteByPublicIdCreator,
   findBlogByIdCreator,
}

export default functions