import * as cloudFn from '@/utils/server/cloudinary'

export const uploadCloudinaryCreator = ({files, folder}: {files: any[], folder: string}) => {
   return cloudFn.uploadImagesToFolder({files, folder})
}
export const getByFolderCloudinaryCreator = ({ folder}: { folder: string}) => {
   return cloudFn.getImagesByFolder({ folder})
}