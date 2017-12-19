
import { Component, ViewEncapsulation } from '@angular/core';
import NotificationService  from '../../services/NotificationService';

@Component(
    {
        selector: 'web-notification',
        templateUrl : './NotificationTemplate.html',
        encapsulation : ViewEncapsulation.Emulated
    }
)

class NotificationComponent 
{
    private _NotificationMessage : string;

    constructor(private _NotificationService : NotificationService)
    {
        this._NotificationMessage = "TEST";
        _NotificationService.Register().subscribe(
            (message:string) => // called next function of observable it means each subscriber ;
            {
                this._NotificationMessage = message;
            }
        )
    }
}

export default NotificationComponent;