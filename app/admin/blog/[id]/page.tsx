// import { EditBlogContent } from "@/react-tailwind-components";

import { connectToMongo } from "@/react-tailwind-components/backend/connect";
import EditBlogContent from "@/react-tailwind-components/form/EditBlogContent";
import { findBlogByIdCreator } from "@/server/functions/blog";
import UpdateBlogHead from "@/utils/components/UpdateBlogHead";
import Link from "next/link";
import { FaEye } from "react-icons/fa";



export default async function CreateBlog({ params: { id } }: { params: { id: string } }) {
   await connectToMongo()
   const blog = await findBlogByIdCreator({ id })

   return (
      <>
         <UpdateBlogHead
            data={JSON.stringify(blog)}
            id={id}
         />
         <Link
            href={`/admin/blog/${id}/view`}
            title="see a preview"
            className="w-9 h-9 rounded-full bg-primary fixed right-8 bottom-8 text-xl f-c hover:scale-90">
            <FaEye />
         </Link>
         {/* TODO - update only the content end get only the content */}
         <EditBlogContent
            id={id}
            preFetchData={JSON.stringify(blog)}
            updateContentPath="/updateBlogCreator"
            fetchPath="/findBlogById"
            pathAddToCloudinary="/uploadCloudinaryCreator"
            pathDeleteFromCloudinary="/deleteByPublicIdCreator"
            pathGetFromCloudinary="/getByFolderCloudinaryCreator"
         />
      </>
   )
}

