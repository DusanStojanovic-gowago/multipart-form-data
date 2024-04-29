import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.blob();
  console.log("FILE", body);

  return new Response("Success!", {
    status: 201,
  });
};
