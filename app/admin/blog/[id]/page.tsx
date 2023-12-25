// import { EditBlogContent } from "@/react-tailwind-components";

import EditBlogContent from "@/react-tailwind-components/form/EditBlogContent";



export default function CreateBlog({ params: { id } }: { params: { id: string } }) {
  
   return (
      <EditBlogContent
         id={id}
         updatePath=""
         fetchPath=""
         updateContentPath=""
         pathAddToCloudinary=""
         pathDeleteFromCloudinary=""
         pathGetFromCloudinary=""
      />
   )
}

