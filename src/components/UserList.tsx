import * as React from "react";
import {useEffect} from "react";
import {useTypedSelector} from "../hooks/useTypeSelector";
import {useActions} from "../hooks/useActions";

const UserList: React.FC = () => {
    const {users, loading, error}: any = useTypedSelector(state => state.user);
    const {fetchUsers} = useActions();

    useEffect(() => {
        // @ts-ignore
        fetchUsers()
    }, []);

    if (loading) {
        return <h1>Идёт загрузка!</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {// @ts-ignore
                users.map((user) =>
                    <div key={user.id}>{user.name}</div>)
            }
        </div>
    )
};
export default UserList;
