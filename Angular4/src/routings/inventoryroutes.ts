//http://localhost/ =>
//http://localhost/inventory 
//http://localhost/common
//404 

import InventoryComponent from '../components/InventoryComponent/InventoryComponent';
import InventoryListComponent from '../components/InventoryListComponent/InventoryListComponent';
import InventoryEntryComponent from '../components/InventoryEntryComponent/InventoryEntryComponent';

// const InventoryRoutes: any[] = [

//     ///http://localhost/inventory 
//     {
//         path: 'inventory', //forward path
//         component: InventoryComponent,
//         childern: [
//             ///http://localhost/inventory  [Default] 
//             {
//                 path:'',
//                 pathMatch:'full',
//                 component:InventoryEntryComponent
//             },
//                 ///http://localhost/inventory/entry 
//            {
//                 path:'entry',
//                 component:InventoryEntryComponent
//             },
//               ///http://localhost/inventory/list 
//             {
//                 path:'list',
//                 component:InventoryListComponent
//             }
//         ]
//     }
//     ///http://localhost/Inventory  [Default] 




  
// ];

// export default InventoryRoutes



const InventoryRoutes : any[] =
[

    //http://localhost/Inventory
    {
        path : 'inventory', // Forward Path
        component : InventoryComponent,
        children : 
        [
            //http://localhost/inventory/ [Default]
            {
                path : '',
                pathMatch : 'full',
                component : InventoryListComponent
            },

            //http://localhost/inventory/entry
            {
                path : 'entry',
                component : InventoryEntryComponent
            },

            //http://localhost/inventory/list
            {
                path : 'list',
                component : InventoryListComponent
            },
            
                        //http://localhost/inventory/list/id
                        {
                            path : 'list/:id',
                            component : InventoryListComponent
                        }
        ]
    }
];

export default InventoryRoutes;

