import React from 'react'
import Image from 'next/image'
import { Book } from '@/types';
import DownloadButton from './component/Download';

const page=async({params}:{params:{bookid:string}})=> {

 
 let book: Book|null =null;

 try {
  const response=await fetch(`${process.env.NEXT_BACKEND_URL}/books/${params.bookid}`,{cache:"no-store"}) ;
  book=await response.json();
  console.log("rbook",book)
  if(!response.ok)
  {
           throw new Error("Cannot get a single book")
  }
 } catch (error) {
    console.log(error)
    throw new Error("Error")
 }

 if(!book){
   throw new Error("Book not found")
 }


  return (
    <div>
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10">
            <div className="col-span-2 pr-16 text-primary-950">
                <h2 className="mb-5 text-5xl font-bold leading-[1.1]">{book.title}</h2>
                <span className="font-semibold text-3xl">By {book.author.name}</span>
                <p className="mt-5 text-lg leading-8">{book.description}</p>
                
            </div>
            <div className="flex justify-end">
                <Image
                    src={book.coverImg}
                    alt={book.title}
                    className="rounded-md border"
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ width: 'auto', height: 'auto' }}
                />
            </div>

            <DownloadButton fileLink={book.file}/>
        </div>

    </div>
  )
}

export default page