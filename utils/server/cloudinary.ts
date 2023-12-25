
const
   { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env,
   cloudinary = require('cloudinary').v2

cloudinary.config({
   api_key: CLOUDINARY_API_KEY,
   cloud_name: CLOUDINARY_CLOUD_NAME,
   api_secret: CLOUDINARY_API_SECRET
})


export function showFilesInFolder(folderName: string) {
   return cloudinary.api.resources({
      type: 'upload',
      prefix: folderName,
      direction: folderName
   })
}
// console.log(showFilesInFolder('new'))

interface File { base64: string }

export interface uploadProps {
   files: File[],
   folder: string
   blog: string
   options: any
}

export async function uploadImages({ files, folder, blog, options = {} }: uploadProps) {
   const uploadSingleFile = (f: File) => cloudinary.uploader.upload(f.base64, { upload_preset: 'blog', folder, ...options, format: 'WebP' })
   const res = await Promise.all(files.map(uploadSingleFile))
   return res.map(r => r.url)
}

export async function deleteImageByPublicId({ publicId }: { publicId: string }) {
   return await cloudinary.uploader.destroy(publicId);
}

export async function getImagesByFolder({ folder }: { folder: string }) {
   return await cloudinary.search.expression(`${folder}/*`).execute()
}

export interface uploadPropsToFolder {
   files: File[],
   folder: string
}

export async function uploadImagesToFolder({ files, folder }: uploadPropsToFolder) {
   const options = {
      responsive_breakpoints: { create_derived: true, bytes_step: 20000, min_width: 200, max_width: 1920, max_images: 10 },
      overwrite: true,
      quality: '90',
      fetch_format: 'auto',
      crop: 'fill',
      gravity: 'auto',
      upload_preset: 'blog',
      folder,
      use_filename: true,
      format: 'WebP'
   }

   const uploadSingleFile = (f: File) => cloudinary.uploader.upload(f, { ...options })
   return await Promise.all(files.map(uploadSingleFile))
}

export { cloudinary }
