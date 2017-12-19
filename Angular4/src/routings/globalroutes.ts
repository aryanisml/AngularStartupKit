//http://localhost/ =>
//http://localhost/inventory 
//http://localhost/common
//404 


import ParentComponent from "../components/Parent/ParentComponent";
import InventoryComponent from '../components/InventoryComponent/InventoryComponent';

const GlobalRoutes: any[] = [
    //Default Case
    ///http://localhost/
    {
        path: '', //forward
        pathMatch: 'full',
        component: ParentComponent
    },
    ///http://localhost/Common
    {
        path: 'common', //forward path
        component: ParentComponent
    },
    ///404
    {
        path: '*', //forward path
        redirectTo:'common'
    }
];

export default GlobalRoutes