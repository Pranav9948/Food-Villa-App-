import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice(

    {

        name:'cart',
        initialState:{
            
           item: []

        },


        reducers:{

         addItem:(state,action)=>{

            state.item.push(action.payload)
         },

         clearItem:(state,action)=>{

            state.item=[]
         },

         removeItem:(state,action)=>{

            state.item.pop()
         }

        }


    }
)

export const {addItem,clearItem,removeItem}=cartSlice.actions;

export default cartSlice.reducer