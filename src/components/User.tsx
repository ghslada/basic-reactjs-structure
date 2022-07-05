import { useState } from "react";

type UserProps = {
    id: number;
    name: string;
    email: string;
}

export function User (props) {

    const [user, setUser] = useState<UserProps>(props.user);

    return (

        <div>
            <h1>{user.name}</h1>
            <h3>{user.email}</h3>
        </div>

    );

}