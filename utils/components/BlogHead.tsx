import { Input, Select } from "@/react-tailwind-components";

export default function BlogHead({data = {}} : {data?: any}) {
   return (
      <>
         <div className="flex gap-2 mb-2 items-center">
            <label htmlFor="description">תיאור</label>
            <Input required name='description' id='description' defaultValue={data?.description} placeholder='description' specialClassName='flex-1' />
         </div>
         <div className="flex gap-2 mb-2 items-center">
            <label htmlFor="keywords">מילות תיוג</label>
            <Input required name='keywords' id='keywords' defaultValue={data?.keywords} placeholder='keywords' specialClassName='flex-1' />
         </div>
         <div className="flex gap-2 mb-2 items-center">
            <label htmlFor="category">קטגוריה</label>
            <Select name='category' id='category' specialClassName='flex-1' defaultValue={data?.category}
               options={["html", "css", "javascript", "typescript", "react", "next", "node"]} />
         </div>
         <div className="flex gap-2 mb-2 items-center">
            <label htmlFor="title">כותרת</label>
            <Input defaultValue={data?.title} required name='title' id='title' placeholder='title' specialClassName='flex-1' />
         </div>
      </>
   )
}