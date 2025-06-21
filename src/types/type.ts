export type filterListType ='new arrival'| 'bestseller'| 'featured products' |'discountUp'

export interface productType {
id:string,
  Name:string, 
  image:string,
  Price:number,
  discounts:number,
  Like:number,       
  count:number,      
  sellCount:number,  
  categoryId:String
  createTime:Date
}

