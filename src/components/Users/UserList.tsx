import * as React from "react";
import {User} from "./User";
import {IUser} from "../../IModel/IUser";
import {IUserState} from "../../types/UserTypes";
import listStile from './CSS/User.module.css'

export const UserList: React.FC<IUserState> = (props: IUserState) => {
    return (
        <div className={listStile.list}>
            <div className={listStile.list_head}>Список пользователей:</div>
            <div className={listStile.list_font}>
                {
                    props.users.map((user: IUser, index: number) =>
                        // @ts-ignore
                        <User key={index} user={user}/>
                    )
                }
            </div>
        </div>
    )
};
