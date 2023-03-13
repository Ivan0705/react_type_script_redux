import * as React from "react";
import {IUser} from "../../IModel/IUser";
import userStile from './CSS/User.module.css'

export const User: React.FC<IUser> = (props: any) => {
    return (
        <div key={props.index}
             className={props.user.id % 2 ? userStile.list_honest : userStile.list_odd}>
            {props.user.name}
        </div>
    )
};
