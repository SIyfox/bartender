import React, {useContext, useEffect, useState} from 'react';
import { Context } from '../index';
import image_dec_0 from'../assets/images/menu_decoration_0.png';
import BartenderMenuItem from '../components/BartenderMenuItem'
import { reaction } from 'mobx';

const BartenderHomePage = () => {


    const {report,global} = useContext(Context)
    const[menuData,setMenuData] = useState(global.getMenuData)
    const[itemClicked,setItemClicked] = useState(false)
    const[itemSelection,setItemSelection] = useState(menuData[0])

    function MenuItemClicked(item)
    {
       
        setItemClicked(true)
        setItemSelection(item)
      
    }
    function MenuItemInfoClicked()
    {
        setItemClicked(false)
        let data = global.getMenuData
        data.forEach(item => {
            item.ItemSelected=false
        });

        global.setMenuData(data)
        
        setMenuData(global.getMenuData)
       
        
      
    }
    
  
    return (
        <div className='menu_content_back'>
            <div className='menu_panel_top'>
                  <img  src={image_dec_0} style={{height:"110px",position:'absolute',top:0,left:0}} />
                  <img  src={image_dec_0} style={{height:"110px",position:'absolute',top:0,right:0}} className='flip_x'/>
                  <div className='header_name'>
                        LAG-00  NA
                  </div>
            </div>
            <div className='menu_content'> 
                <div className={`menu_content_list_wrap `} >
                {menuData.map(item=>

                        <div key={item.id} onClick={()=>MenuItemClicked(item)} className={`menuItemAnim no-select  ${(itemClicked&!item.ItemSelected)?"item_hide noClick":""}`} > 
                            <BartenderMenuItem  item={item}/>
                        </div>
                   
                    
                    )}
                </div>
               
           
                <div className={`menu_item_info ${itemClicked?"menu_item_info_opened":""}`} onClick={()=>MenuItemInfoClicked()}>
                    <div className='menu_item_info_content'>
                        <div>
                           <img  src={image_dec_0} style={{height:"70px",position:'absolute',bottom:-25,left:0}} className='flip_y'/>
                        </div>
                        <div>
                            Рецепт
                        </div>
                        <div>
                            <img  src={image_dec_0} style={{height:"70px",position:'absolute',bottom:-25,right:0}} className='flip_yx'/>
                        </div>
                    </div>
                    <div className='menu_item_info_content_res'>
                        {itemSelection.ItemIngridients.map(item=>
                        <div key={item.ItemIngridientName} className='menu_item_info_content_res_s'>
                            <div className='item_info_text_res'>{item.ItemIngridientName}</div>
                            <div className='item_info_text_res'>{item.ItemIngridientAmmount===0?"":item.ItemIngridientAmmount}</div>
                            <div className='item_info_text_res'>{item.ItemIngridientMessure}</div>
                        </div>
                            
                        )}
                     
                    </div>
                    <div className='menu_item_descrition_res' style={{color:`${itemSelection.ItemColor2}`,fontSize:10,lineHeight:2,width:350}}>
                       {itemSelection.ItemRecipe}
                    </div>
                </div>
              </div>
              <div className='menu_panel_bottom'>
                  <img  src={image_dec_0} style={{height:"110px",position:'absolute',bottom:0,left:0}} className='flip_y'/>
                  <img  src={image_dec_0} style={{height:"110px",position:'absolute',bottom:0,right:0}} className='flip_yx'/>
                 
              </div>
             
            </div>
        
    )
}

export default BartenderHomePage; 



