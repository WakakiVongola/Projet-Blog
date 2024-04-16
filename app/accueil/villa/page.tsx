"use client"

import useSWR from 'swr'
 
//ts-ignore 
const fetcher = (...args:any) => fetch(...args).then(res => res.json())

const Page = () =>{
  const { data, error, isLoading } = useSWR('/api/poste/take', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  const obj = data.data[0];
 
  // render data
  return <h1>helloee {obj.titre}  !</h1>
}

export default Page;

  
