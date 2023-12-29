import React, {useContext, useEffect, useState} from 'react';
import { Context } from '../index';
import image_dec_0 from'../assets/images/menu_decoration_0.png';
import BartenderMenuItem from '../components/BartenderMenuItem'
import { reaction } from 'mobx';

const BartenderMenuPage = () => {
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
                  <div className='header_name boujee-text'>
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
                            Состав
                        </div>
                        <div>
                            <img  src={image_dec_0} style={{height:"70px",position:'absolute',bottom:-25,right:0}} className='flip_yx'/>
                        </div>
                    </div>
                    <div className='menu_item_contain'>
                        {itemSelection.ItemIngridients.filter(function (el) {return el.ItemIngridientVisibility === true}).map(item=>
                            <div key={item.ItemIngridientName} className='item_info_text'>{item.ItemIngridientName}</div>
                        )}
                     
                    </div>
                    <div className='menu_item_descrition' style={{color:`${itemSelection.ItemColor2}`}}>
                       {'"'+itemSelection.ItemDescription+'"'}
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

export default BartenderMenuPage; 



