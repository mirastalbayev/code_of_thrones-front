import { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    role: string;
}

type UserID = {
    userID: number;
}

function UserInfo(props: UserID) {
    const [data, setData] = useState<User[]>([]);

    // set loading to true initially
    const [isLoading, setIsLoading] = useState(true);

    //set the error to false initially
    let [isError, setIsError] =useState(false);

    useEffect(() => {
      const dataFetch = async () => {
        try{
            //fetch data
            const data = await fetch(`http://localhost:3000/users?id=${props.userID}`)
            
            // handling empty object errors
            if (!data.ok){
                setIsError(true); 
            }

            // convert reponce to json format
            const dataJSON = await data.json();

            // set state when the data received
            setData(dataJSON);
            setIsLoading(false);
        }
        catch (e){
            //handle fetch errors
            setIsError(true);
        }
      };
  
      dataFetch();
    }, []);

    // Error state message
    if (isError) return <h1>Oops, something went wrong...</h1>

    // Loading State message
    if (isLoading) return <h1>Loading...</h1>

    // Success State Rendering
    
    return (
        <div>
            <h3>{data[0]?.name} {data[0]?.surname}</h3>
        </div>
    )

}

export default UserInfo;