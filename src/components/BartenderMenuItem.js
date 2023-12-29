import { set } from 'mobx';
import React, {useContext, useState} from 'react';
import { Context } from '../index';


const BartenderMenuItem = ({item}) => {

    const {global} = useContext(Context)

    function ItemSelectionClick(item)
    {
                let data = global.getMenuData
            
                data[item.id].ItemSelected = true
                data.setMenuData = data
    }
   
    return (
        <div style={{position:'absolute',height:145,width:120,top:`${item.ItemSelected?0:item.ItemPositionY}`,left:`${item.ItemSelected?'100px':item.ItemPositionX}`}} onClick={()=>{ItemSelectionClick(item);}} className={`item_selected ${item.ItemSelected?"item_selected_anim ":""}`}>        
            <img  src={item.ItemImage} style={{height:"140px",position:'absolute',left:60,top:0}} className='menu_item_image' />
            <div className='menu_item_name' style={{color:`${item.ItemSelected?item.ItemColor1:"white"}`}}>
                {item.ItemName}
            </div>
         </div>
    )
}

export default BartenderMenuItem; 