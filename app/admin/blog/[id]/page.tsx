"use client"

import { useEffect, useState } from "react";

import { Alert, Loader, apiReq } from "@/react-tailwind-components";
import SpecialInput from "@/react-tailwind-components/form/SpecialInput";
import { Blog, DataBlog } from "@/react-tailwind-components/types";
import sortByIndex from "@/utils/sortByIndexes";
import AddBtns from "@/react-tailwind-components/form/AddBtns";



export default function CreateBlog({ params: { id } }: { params: { id: string } }) {
   const
      [loading, setLoading] = useState(false),
      [error, setError] = useState(''),
      [data, setData] = useState<Blog>({ content: [] }),
      [imagesByCountry, setimagesByCountry] = useState([]),
      contentToPrint = data?.content?.length ? sortByIndex(data?.content) : []

   console.log(data, contentToPrint);

   useEffect(() => {
      // apiReq({ path: 'blogs/readOne', body: { _id: id } })
      //    .then(setData)
      //    .catch(handleErrors)
      //    .finally(() => setLoading(false))
   }, [])

   function handleErrors(e: any) {
      console.error({ e })
      setError(e.message || e)
      setTimeout(() => {
         setError('')
      }, 5000)
   }


   // function getImages(country) {
   //    apiReq({ path: 'assets/getFilesByCountryCloud', body: { country: country || data?.country } })
   //       .then(a => setimagesByCountry(a?.resources))
   // }

   async function updateContentServer(updatedContent: DataBlog[]) {
      // debugger
      setData({ content: updatedContent })
      // setLoading(true)
      // apiReq({ path: `blogs/updateContent`, body: { values: updatedContent, _id: id } })
      //    .then(setData)
      //    .catch(handleErrors)
      //    .finally(() => setLoading(false))
   }


   function addContent(type: string, beforeDataIndex: number) {
      const
         isFirst = typeof beforeDataIndex !== 'number',
         newContent = { type, content: '', index: !isFirst ? beforeDataIndex + 1 : 0, _id: Math.random() },
         updatedIndexes = contentToPrint.length ?
            contentToPrint.map(d =>
               ((d.index > beforeDataIndex) || isFirst) ?
                  ({ ...d, index: d.index + 1 }) : d)
            : []

      //@ts-ignore
      updateContentServer([...updatedIndexes, newContent])
   }

   // async function addImageToContent(contentId, file) {
   //    setLoading(true)
   //    await apiReq({ path: `blogs/updateContentImg`, body: { values: { ...file, _id: contentId, country: data.country }, _id: id } })
   //       .then(setData).catch(setError).finally(() => setLoading())
   // }

   async function handleChangeContent(updatedData: DataBlog) {
      const oldOne = contentToPrint.find(d => d._id === updatedData._id)
      if (updatedData?.content === oldOne?.content && updatedData?.href === oldOne?.href) return;
      const content = contentToPrint.map(d => d._id === updatedData._id ? updatedData : d)
      updateContentServer(content)
   }

   function changeIndex(beforeIndex: number) {
      updateContentServer(contentToPrint.map(d => d.index === beforeIndex ?
         ({ ...d, index: d.index + 1 }) :
         d.index === beforeIndex + 1 ?
            ({ ...d, index: d.index - 1 }) : d)
      )
   }

   const handleDelete = async (data: DataBlog) => updateContentServer(
      //@ts-ignore
      contentToPrint.map(d => d._id === data._id ? null :
         ({ ...d, index: d.index >= data.index ? --d.index : d.index }))
         .filter(d => d)
   )



   if (!data) return <div><Loader /></div>

   return (
      <>
         {loading && <div className="p-40" ><Loader /></div>}
         {error && <div ><Alert color="red">{error}</Alert></div>}
         <h1>edit / create</h1>

         <div className={loading ? 'animate-pulse' : ''}>

            {!contentToPrint.length &&
               <div className="relative h-32 border-b border-gray-500">
                  <AddBtns addContent={addContent} isLast isFirst index={0} />
               </div>}
            
            {contentToPrint.map((data, i) =>
               <SpecialInput
                  addContent={addContent}
                  handleChange={handleChangeContent}
                  data={data}
                  key={`${data._id}${i}`}
                  isLast={i === (contentToPrint.length - 1)}
                  changeIndex={changeIndex}
                  handleDelete={handleDelete}
                  imagesByCountry={imagesByCountry}
               />)}
         </div>
         {/* 
         <AssetsManagement
            files={imagesByCountry}
            country={data?.country}
            setImages={setimagesByCountry}
            getImages={getImages}
            handleErrors={handleErrors}
            setError={setError}
            setLoading={setLoading}
         /> */}


      </>
   )
}

