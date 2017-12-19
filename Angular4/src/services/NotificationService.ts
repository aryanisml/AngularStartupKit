
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { setTimeout } from "timers";

@Injectable()
class NotificationService
{
    private _Message : string;
    private _NotificationSubscriber : any
    private _NotifierPublisher : any;

    constructor()
    {
        this._Message = "";
        
        this._NotificationSubscriber = new Observable<string>
        (
            (publisher : any) => 
            {
                this._NotifierPublisher = publisher;
            }
        );
    }

    ShowNotification(message : string = "")
    {
        this._Message = message;
        this._NotifierPublisher.next( this._Message );
    }

    Register()
    {
        return this._NotificationSubscriber;
    }
}

export default NotificationService;