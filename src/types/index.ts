export type Book={
  _id:string,
  title:string,
  coverImg:string,
  file:string,
  description:string,
  author:Author

}


export  type Author={
    name:string,
}