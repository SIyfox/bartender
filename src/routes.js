
import MenuPage from "./pages/BartenderMenuPage";
import OrderPage from "./pages/BartenderOrderPage";
import {
    MENUPAGE_ROUTE,ORDERPAGE_ROUTE
} from "./utils/consts"


export const publicRoutes = [
    {
        path:MENUPAGE_ROUTE,
        Component: MenuPage
    }
    ,
    {
        path:ORDERPAGE_ROUTE,
        Component: OrderPage
    }

]