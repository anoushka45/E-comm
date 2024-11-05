import { title } from "process";

export default {
  name:'product',
  type:'document',
  title:'Product',
  fields:[
    {
      name:'name',
      type:'string',
      title:'Name of product'
    },
    {
      name:'images',
      type:'array',
      title:'Product Images',
      of:[{type:'image'}],
    }
,
    {
      name:'description',
      type:'text',
      title:'Description of product'
      
    },
    {
      name:'slug',
      type:'slug',
      title:'product slug',
      options:{
        source:'name'
      }
      
    },
    {
      name:'price',
      type:'number',
      title:'price'
      
    },
    {
      name:'category',
      title:'Product Category',
      type:'reference',
      to:[
        {
          type:'category'
        }
      ]
    }
  ]
}