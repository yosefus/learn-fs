import { ViewBlog } from "@/react-tailwind-components";
import { connectToMongo } from "@/react-tailwind-components/backend/connect";
import { findBlogByIdCreator } from "@/server/functions/blog";
import Link from "next/link";
import { MdOutlineModeEditOutline } from "react-icons/md";



export default async function viewBlog({ params: { id } }: { params: { id: string } }) {
   await connectToMongo()
   const blog = await findBlogByIdCreator({ id })

   return (
      <>
         <Link
            href={`/admin/blog/${id}`}
            className="w-9 h-9 rounded-full bg-primary fixed right-8 bottom-8 text-xl f-c hover:scale-90">
            <MdOutlineModeEditOutline />
         </Link>
         <ViewBlog blog={blog} />
      </>
   )
}