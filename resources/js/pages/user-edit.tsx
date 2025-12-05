interface User{
    id:number,
    name:string,
    email:string,
    role:string,
}

interface UserEditDetailsProps{
    user:User;
}


export default function EditUser({user}:UserEditDetailsProps){
    return (
        <>
        <div>
            <h1>
                THIS IS USER EDIT PAGE
            </h1>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.role}</p>
        </div>
        </>
    );
}   