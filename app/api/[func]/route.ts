
import { NextResponse, NextRequest, } from "next/server";
import { headers } from 'next/headers'
import functions from '@/server/functions'
import { connectToMongo } from "@/react-tailwind-components/backend/connect";

export async function POST(req: NextRequest, { params }: { params: { func: string } }) {
   const
      body = await req.json(),
      { func = '' } = params,
      currBl = functions[func]

   console.log('req: \n ', body, params);


   try {
      await connectToMongo()

      const Lfunc = func.toLowerCase()

      //TODO - check admin
      if (Lfunc.includes('admin')) { console.log('checking admin'); }
      //TODO - check creator
      if (Lfunc.includes('creator')) { console.log('checking creator'); }

      if (!currBl) throw `the ${func} not there exist`

      const result = await currBl(body)

      return new NextResponse(JSON.stringify({ data: result, success: true }))

   } catch (error: any) {
      console.log('main server error handler \n', error.message || error.msg || error);

      return new NextResponse(JSON.stringify({ message: error.msg || 'Sorry something went wrong...', code: error.code || 500, success: false }))
   }
}
