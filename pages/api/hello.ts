// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'

type Data = {
  name: string;
  age: number;
}

const handler=(req: NextApiRequest, res: NextApiResponse<Data>)=> {
  res.status(200).json({ name: 'John Doe', age:24 })
}
export default handler
