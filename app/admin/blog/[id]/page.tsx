// import { EditBlogContent } from "@/react-tailwind-components";

import { connectToMongo } from "@/react-tailwind-components/backend/connect";
import EditBlogContent from "@/react-tailwind-components/form/EditBlogContent";
import { findBlogById } from "@/server/functions/blog";
import UpdateBlogHead from "@/utils/components/UpdateBlogHead";



export default async function CreateBlog({ params: { id } }: { params: { id: string } }) {
   await connectToMongo()
   const blog = await findBlogById({ id })

   return (
      <>
         <UpdateBlogHead
            data={JSON.stringify(blog)}
            id={id}
         />
         {/* TODO - update only the content end get only the content */}
         <EditBlogContent
            id={id}
            preFetchData={JSON.stringify(blog)}
            updateContentPath="/updateBlogCreator"
            fetchPath="/findBlogById"
            updatePath=""
            pathAddToCloudinary=""
            pathDeleteFromCloudinary=""
            pathGetFromCloudinary=""
         />
      </>
   )
}

