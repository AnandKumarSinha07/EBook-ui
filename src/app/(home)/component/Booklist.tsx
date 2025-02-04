import { Book } from "@/types";
import Bookcard from "./Bookcard";

const Booklist = ({ book }: { book: Book[] }) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-10">
      {book.map((item) => (
        <Bookcard key={item._id} book={item} />
      ))}
    </div>
  );
};

export default Booklist;
