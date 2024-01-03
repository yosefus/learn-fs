import { Alert, Select, useApi } from "@/react-tailwind-components";
import { CategoryInterface } from "@/server/models/category";


const SelectCategory = ({ defaultValue }: { defaultValue?: string }) => {
   const { data, error, loading } = useApi({ path: '/findAllCategoriesCreator', defaultValue: [], });
   return (
      <>
         {error && <Alert color="red">{error}</Alert>}
         {data && (
            <Select
               name='category'
               id='category'
               specialClassName={` ${loading ? 'animate-pulse' : ''} flex-1`}
               defaultValue={defaultValue}
               options={data.map((cat: CategoryInterface) => ({ text: cat.name, val: cat._id }))} />
         )}
      </>
   );
};

export default SelectCategory