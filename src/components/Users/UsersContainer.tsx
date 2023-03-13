import {useDispatch} from "react-redux";
import * as React from "react";
import {useEffect} from "react";
import {fetchUsers} from "../../store/action-creators/fetchUsers";
import {userTypedHook} from "../../hooks/userTypedHook";
import {userDispatchHook} from "../../hooks/userDispatchHook";
import {UserList} from "./UserList";
import {RootState} from "../../store";
import userStile from './CSS/User.module.css'

export const UsersContainer: React.FC = () => {
    const {users, isLoading, error} = userTypedHook((state: RootState) => state.users);

    const dispatch = useDispatch();

    const {fetchUsers} = userDispatchHook(dispatch);

    useEffect(() => {
        fetchUsers()
    }, [null]);

    if (isLoading) {
        return <h1 className={userStile.isLoading}>Идёт загрузка...</h1>
    }

    if (error) {
        return <h1 className={userStile.error}>{error}</h1>
    }

    return (
        <React.Fragment>
            <UserList users={users} error={null} isLoading={false}/>
        </React.Fragment>
    )
};
