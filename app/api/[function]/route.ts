import { NextRequest, NextResponse } from "next/server";


async function Post(req: NextRequest, rest: any) {
   const body = await req.json()
   console.log(rest, body);

   return NextResponse.json({ message: 'Hello from Next.js!' })
}


export default { Post }