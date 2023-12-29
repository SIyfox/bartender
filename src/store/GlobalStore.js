import {makeAutoObservable} from 'mobx'
import image_0 from'../assets/images/drink_0.png';
import image_1 from'../assets/images/drink_1.png';
import image_2 from'../assets/images/drink_2.png';
import image_3 from'../assets/images/drink_3.png';
import image_4 from'../assets/images/drink_4.png';
import image_5 from'../assets/images/drink_5.png';
import image_6 from'../assets/images/drink_6.png';
import image_7 from'../assets/images/drink_7.png';
import image_8 from'../assets/images/drink_8.png';
import image_9 from'../assets/images/drink_9.png';
import image_10 from'../assets/images/drink_10.png';
import image_11 from'../assets/images/drink_11.png';

export default class GlobalStore {

    constructor(){
        this._locked = false
        this._operating = false
        this._updateTable = false;
        this._tableMode = 0;
        this._pageAgency = "0"
        this._formAgency = ""
        this._menuData=[
            {
                id:"0",
                ItemName:"Гегемон",
                ItemImage:image_0,
                ItemPositionX:'0%',
                ItemPositionY:'0%',
                ItemSelected:false,
                ItemColor1:'#EEFF96',
                ItemColor2:'#D4FF4E',
                ItemDescription:"Можно заказать только после достижения 1000 дукатов в месяц",
                ItemIngridients:[
                    {
                        ItemIngridientName:"Серебрянная текила",
                        ItemIngridientAmmount:50,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Апельсиновый ликер",
                        ItemIngridientAmmount:25,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Сахарный сироп",
                        ItemIngridientAmmount:10,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Лаймовый сок",
                        ItemIngridientAmmount:30,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Лайм",
                        ItemIngridientAmmount:80,
                        ItemIngridientMessure:"г",
                        ItemIngridientVisibility:false
                    },
                    {
                        ItemIngridientName:"Соль",
                        ItemIngridientAmmount:2,
                        ItemIngridientMessure:"г",
                        ItemIngridientVisibility:false
                    },
                    {
                        ItemIngridientName:"Лед кубик",
                        ItemIngridientAmmount:0,
                        ItemIngridientMessure:"",
                        ItemIngridientVisibility:false
                    },
               
                  
                ],
                ItemRecipe:"Сделай на бокале для маргариты соленую окаемку\r\nНалей в шейкер лаймовый сок 30 мл, сахарный сироп 10 мл, ликер трипл сек 25 мл и серебряную текилу 50 мл\r\nНаполни шейкер кубиками льда и взбей\r\nПерелей через стрейнер в охлажденный бокал для маргариты\r\nУкрась кружком лайма"
            }
            ,
            {
                id:"1",
                ItemName:"Фумобосс",
                ItemImage:image_1,
                ItemPositionX:'33%',
                ItemPositionY:'0%',
                ItemSelected:false,
                ItemColor1:'#813700',
                ItemColor2:'#FFD18A',
                ItemDescription:"Не нуждается в представлении",
                ItemIngridients:[
                    {
                        ItemIngridientName:"Водка",
                        ItemIngridientAmmount:30,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Сухой джин",
                        ItemIngridientAmmount:30,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Белый ром",
                        ItemIngridientAmmount:30,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Серебряная текила",
                        ItemIngridientAmmount:30,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Апельсиновый ликер",
                        ItemIngridientAmmount:30,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Лимонный сок",
                        ItemIngridientAmmount:30,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Кола",
                        ItemIngridientAmmount:100,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },{
                        ItemIngridientName:"Лед кубики",
                        ItemIngridientAmmount:0,
                        ItemIngridientMessure:"",
                        ItemIngridientVisibility:false
                    }
                ],
                ItemRecipe:"Наполни хайбол кубиками льда доверху\r\nНалей лимонный сок 30 мл, сахарный сироп 30 мл и ликер трипл сек 30 мл\r\nДобавь водку 30 мл, джин 30 мл, белый ром 30 мл и серебряную текилу 30 мл\r\nДолей колу доверху и аккуратно размешай коктейльной ложкой\r\nУкрась долькой лимона"
            }
            ,
            {
                id:"2",
                ItemName:"Шуруп",
                ItemImage:image_2,
                ItemPositionX:'66%',
                ItemPositionY:'0%',
                ItemSelected:false,
                ItemColor1:'#FFE68D',
                ItemColor2:'#FFE68D',
                ItemDescription:"Для простых работяг",
                ItemIngridients:[
                    {
                        ItemIngridientName:"Водка",
                        ItemIngridientAmmount:50,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Апельсиновый сок",
                        ItemIngridientAmmount:150,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Апельсин",
                        ItemIngridientAmmount:30,
                        ItemIngridientMessure:"г",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Лед кубик",
                        ItemIngridientAmmount:0,
                        ItemIngridientMessure:"",
                        ItemIngridientVisibility:false
                    }
                ],
                ItemRecipe:""
            }
            ,
            {
                id:"3",
                ItemName:"Летальная затея",
                ItemImage:image_3,
                ItemPositionX:'0%',
                ItemPositionY:'25%',
                ItemSelected:false,
                ItemColor1:'#FF5700',
                ItemColor2:'#FFFD7B',
                ItemDescription:"Не надевай маску и поделись двигателем B-52 с жуком",
                ItemIngridients:[
                    {
                        ItemIngridientName:"Серебрянная текила",
                        ItemIngridientAmmount:50,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Гренадин",
                        ItemIngridientAmmount:10,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Апельсиновый сок",
                        ItemIngridientAmmount:150,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Апельсин",
                        ItemIngridientAmmount:30,
                        ItemIngridientMessure:"г",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Лед кубик",
                        ItemIngridientAmmount:0,
                        ItemIngridientMessure:"",
                        ItemIngridientVisibility:false
                    },
                ],
                ItemRecipe:"Наполни коллинз кубиками льда доверху\r\nНалей водку 50 мл\r\nДолей апельсиновый сок доверху и аккуратно размешай коктейльной ложкой\r\nУкрась долькой апельсина"
            }
            ,
            {
                id:"4",
                ItemName:"ZOEбись",
                ItemImage:image_4,
                ItemPositionX:'33%',
                ItemPositionY:'25%',
                ItemSelected:false,
                ItemColor1:'#F0CC9C',
                ItemColor2:'#FFF7B7',
                ItemDescription:"Ваншот",
                ItemIngridients:[
                    {
                        ItemIngridientName:"Белый ром",
                        ItemIngridientAmmount:60,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Сахарный сироп",
                        ItemIngridientAmmount:15,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Лаймовый сок",
                        ItemIngridientAmmount:30,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Лед кубик",
                        ItemIngridientAmmount:0,
                        ItemIngridientMessure:"",
                        ItemIngridientVisibility:false
                    },
                ],
                ItemRecipe:"Налей в шейкер лаймовый сок 30 мл, сахарный сироп 15 мл и белый ром 60 мл\r\nНаполни шейкер кубиками льда и взбей\r\nПерелей через стрейнер в охлажденное шампанское блюдце"
            }
            ,
            {
                id:"5",
                ItemName:"Чирно",
                ItemImage:image_5,
                ItemPositionX:'66%',
                ItemPositionY:'25%',
                ItemSelected:false,
                ItemColor1:'#75CDF6',
                ItemColor2:'#30B4F3',
                ItemDescription:"Нетающая ледяная фея под палящим солнцем",
                ItemIngridients:[
                    {
                        ItemIngridientName:"Водка",
                        ItemIngridientAmmount:50,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Ликер блю кюрасао",
                        ItemIngridientAmmount:20,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Спрайт",
                        ItemIngridientAmmount:150,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Ананас",
                        ItemIngridientAmmount:30,
                        ItemIngridientMessure:"г",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Лед кубик",
                        ItemIngridientAmmount:0,
                        ItemIngridientMessure:"",
                        ItemIngridientVisibility:false
                    },
                ],
                ItemRecipe:"Наполни харрикейн кубиками льда доверху\r\nНалей ликер блю кюрасао 20 мл и водку 50 мл\r\nДолей спрайт доверху и аккуратно размешай коктейльной ложкой\r\nУкрась долькой ананаса"
            }
            ,
            {
                id:"6",
                ItemName:"Крыссовет",
                ItemImage:image_6,
                ItemPositionX:'0%',
                ItemPositionY:'50%',
                ItemSelected:false,
                ItemColor1:'#8A0000',
                ItemColor2:'#EA0000',
                ItemDescription:"Заседание объявляется открытым",
                ItemIngridients:[
                    {
                        ItemIngridientName:"Водка",
                        ItemIngridientAmmount:40,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Апельсиновый ликер",
                        ItemIngridientAmmount:20,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Клюквенный сок",
                        ItemIngridientAmmount:50,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Лаймовый сок",
                        ItemIngridientAmmount:10,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Апельсиновая цедра",
                        ItemIngridientAmmount:8,
                        ItemIngridientMessure:"г",
                        ItemIngridientVisibility:true
                    },

                    {
                        ItemIngridientName:"Лед кубик",
                        ItemIngridientAmmount:0,
                        ItemIngridientMessure:"",
                        ItemIngridientVisibility:false
                    },
                ],
                ItemRecipe:"Налей в шейкер лаймовый сок 10 мл, клюквенный сок 50 мл, ликер трипл сек 20 мл и цитрусовую водку 40 мл\r\nНаполни шейкер кубиками льда и взбей\r\nПерелей через стрейнер в охлажденный коктейльный бокал\r\nЗажги над коктейлем горелку и выжми на нее масло из апельсиновой цедры"
            }
            ,
            {
                id:"7",
                ItemName:"Смешная нарезка",
                ItemImage:image_7,
                ItemPositionX:'33%',
                ItemPositionY:'50%',
                ItemSelected:false,
                ItemColor1:'#335B66',
                ItemColor2:'#B4C0C3',
                ItemDescription:"Не хочу тратить жизнь на плохие шутки",
                ItemIngridients:[
                    {
                        ItemIngridientName:"Сухой джин",
                        ItemIngridientAmmount:50,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Тоник",
                        ItemIngridientAmmount:150,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Лайм",
                        ItemIngridientAmmount:20,
                        ItemIngridientMessure:"г",
                        ItemIngridientVisibility:true
                    },
 
                    {
                        ItemIngridientName:"Лед кубик",
                        ItemIngridientAmmount:0,
                        ItemIngridientMessure:"",
                        ItemIngridientVisibility:false
                    },
                ],
                ItemRecipe:"Наполни хайбол кубиками льда доверху\r\nНалей джин 50 мл\r\nДолей тоник доверху и аккуратно размешай коктейльной ложкой\r\nУкрась кружками лайма"
            }
            ,
            {
                id:"8",
                ItemName:"Отошел на пять минут...",
                ItemImage:image_8,
                ItemPositionX:'66%',
                ItemPositionY:'50%',
                ItemSelected:false,
                ItemColor1:'#DEC87F',
                ItemColor2:'#FFF6C3',
                ItemDescription:"...вернулся через два часа, но все время был тут",
                ItemIngridients:[
                    {
                        ItemIngridientName:"Белый ром",
                        ItemIngridientAmmount:60,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Темный ром",
                        ItemIngridientAmmount:15,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Кокосовый сироп",
                        ItemIngridientAmmount:40,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Лаймовый сок",
                        ItemIngridientAmmount:20,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Ананас",
                        ItemIngridientAmmount:30,
                        ItemIngridientMessure:"г",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Дроблены лед",
                        ItemIngridientAmmount:0,
                        ItemIngridientMessure:"",
                        ItemIngridientVisibility:false
                    },
                ],
                ItemRecipe:"Вырежи мякоть ананаса слайсером и выжми сок\r\nНалей в блендер лаймовый сок 20 мл, свежевыжатый ананасовый сок 100 мл, кокосовый сироп 40 мл, темный ром 15 мл и белый ром 60 мл\r\nНасыпь в блендер совок дробленого льда и взбей\r\nПерелей в харрикейн\r\nУкрась ананасовым листом и коктейльной вишней на шпажке"
            }
            ,
            {
                id:"9",
                ItemName:"Каршеринг",
                ItemImage:image_9,
                ItemPositionX:'0%',
                ItemPositionY:'75%',
                ItemSelected:false,
                ItemColor1:'#EAF6A2',
                ItemColor2:'#A0AB53',
                ItemDescription:"4 часа в пробке без геолокации, но со вкусом",
                ItemIngridients:[
                    {
                        ItemIngridientName:"Белый ром",
                        ItemIngridientAmmount:50,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Сахарный сироп",
                        ItemIngridientAmmount:15,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Содовая",
                        ItemIngridientAmmount:100,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Лайм",
                        ItemIngridientAmmount:80,
                        ItemIngridientMessure:"г",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Мята",
                        ItemIngridientAmmount:2,
                        ItemIngridientMessure:"г",
                        ItemIngridientVisibility:true
                    },

                    {
                        ItemIngridientName:"Дробленый лед",
                        ItemIngridientAmmount:0,
                        ItemIngridientMessure:"",
                        ItemIngridientVisibility:false
                    },
                ],
                ItemRecipe:"Положи в хайбол лайм 3 дольки и подави мадлером\r\nВозьми мяту 10 листиков в одну руку и хлопни по ним другой рукой\r\nПоложи мяту в хайбол\r\nНаполни бокал дробленым льдом доверху\r\nДобавь сахарный сироп 15 мл и белый ром 50 мл\r\nДолей содовую доверху и аккуратно размешай коктейльной ложкой\r\nДосыпь немного дробленого льда\r\nУкрась веточкой мяты и долькой лайма"
            }
            ,
            {
                id:"10",
                ItemName:"Майнкрафт",
                ItemImage:image_10,
                ItemPositionX:'33%',
                ItemPositionY:'75%',
                ItemSelected:false,
                ItemColor1:'#FF4E00',
                ItemColor2:'#FFB833',
                ItemDescription:"Это жизнь",
                ItemIngridients:[
                    {
                        ItemIngridientName:"Водка",
                        ItemIngridientAmmount:50,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Персиковый ликер",
                        ItemIngridientAmmount:25,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Клюквенный сок",
                        ItemIngridientAmmount:40,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Ананасовый сок",
                        ItemIngridientAmmount:40,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Ананас",
                        ItemIngridientAmmount:80,
                        ItemIngridientMessure:"г",
                        ItemIngridientVisibility:true
                    },


                    {
                        ItemIngridientName:"Лед кубик",
                        ItemIngridientAmmount:0,
                        ItemIngridientMessure:"",
                        ItemIngridientVisibility:false
                    },
                ],
                ItemRecipe:"Наполни слинг кубиками льда доверху\nНалей в шейкер клюквенный сок 40 мл, ананасовый сок 40 мл, персиковый ликер 25 мл и водку 50 мл\nНаполни шейкер кубиками льда и взбей\nПерелей через стрейнер в слинг\nУкрась кусочком ананаса и коктейльной вишней на шпажке"
            }
            ,
            {
                id:"11",
                ItemName:"Демонтаж",
                ItemImage:image_11,
                ItemPositionX:'66%',
                ItemPositionY:'75%',
                ItemSelected:false,
                ItemColor1:'#AB0016',
                ItemColor2:'#FF4556',
                ItemDescription:"Только истинному мастеру подсилу эта непростая работа",
                ItemIngridients:[
                    {
                        ItemIngridientName:"Сухой джин",
                        ItemIngridientAmmount:50,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Ежевичный ликер",
                        ItemIngridientAmmount:10,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Сахарный сироп",
                        ItemIngridientAmmount:15,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Лимонный сок",
                        ItemIngridientAmmount:20,
                        ItemIngridientMessure:"мл",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Ежевика",
                        ItemIngridientAmmount:12,
                        ItemIngridientMessure:"г",
                        ItemIngridientVisibility:true
                    },
                    {
                        ItemIngridientName:"Лимонная цедра",
                        ItemIngridientAmmount:2,
                        ItemIngridientMessure:"г",
                        ItemIngridientVisibility:false
                    },
                    {
                        ItemIngridientName:"Лед кубик",
                        ItemIngridientAmmount:0,
                        ItemIngridientMessure:"",
                        ItemIngridientVisibility:false
                    },
                ],
                ItemRecipe:"Наполни рокс кубиками льда доверху\r\nНалей лимонный сок 20 мл и сахарный сироп 15 мл\r\nДобавь ботаникал джин 50 мл и аккуратно размешай коктейльной ложкой\r\nНалей ликер ежевики 5 мл и добавь немного дробленого льда\r\nУкрась лимонной цедрой и двумя ягодами ежевики на коктейльной шпажке"
            }
            
        ]





        makeAutoObservable(this)
    }

    setMenuData(data){

        this._menuData = data
    }
    



    get getMenuData(){
        return this._menuData
    }
   
}
