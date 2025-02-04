import Banner from "@/app/(home)/component/Banner";
import Booklist from "./component/Booklist";

export default async function Home() {

  const response=await fetch(`http://localhost:5513/api/books`);

  if(!response.ok)
  {
    throw new Error('An Error occured while fetching the books')
  }

  const data=await response.json();
  const books=data.findBook


  return (
    <>
       <Banner/>
       <Booklist book={books}/>
    </>
  );
}
