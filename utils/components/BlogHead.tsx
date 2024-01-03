import { Input, Select } from "@/react-tailwind-components";
import SelectCategory from "./SelectCategory";

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
            <SelectCategory defaultValue={ data?.category?._id} />
         </div>
         <div className="flex gap-2 mb-2 items-center">
            <label htmlFor="title">כותרת</label>
            <Input defaultValue={data?.title} required name='title' id='title' placeholder='title' specialClassName='flex-1' />
         </div>
         <div className="flex gap-2 mb-2 items-center">
            <label htmlFor="isPublish">לפרסם</label>
            <Input defaultChecked={data?.isPublish} type="checkbox" name='isPublish' id='isPublish' placeholder='isPublish' />
         </div>
         <div className="flex gap-2 mb-2 items-center">
            <label htmlFor="isActive">פעיל</label>
            <Input defaultChecked={data?.isActive} type="checkbox" name='isActive' id='isActive' placeholder='isActive' />
         </div>
      </>
   )
}