import { useEffect, useState } from "react";
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import RoomInfoCard from "@/components/details_components/details_Room_Info_Card/RoomInfoCard";
import styled from "styled-components";
import DetailsTitle from "@/components/details_components/details_Title/DetailsTitle";
import RoomPhoto from "@/components/details_components/details_Room_Photo/RoomPhoto";
import MakeReservation from "@/components/details_components/details_Make_Reservation_Button/MakeReservation";
import RoomReservationList from "@/components/details_components/details_Reservation_List/RoomReservationList";

type Reservation ={
    id: number;
    userID: number;
    reservation: number[];
}

type Room = {
    id: number;
    type: string;
    capacity: number;
    floor: number;
    photos: string[];
    description: string;
    reservationList: Reservation[];
}

function RoomInfo(){
    const [data, setData] = useState<Room[]>([]);

    // set loading to true initially
    const [isLoading, setIsLoading] = useState(true);

    //set the error to false initially
    let [isError, setIsError] =useState(false);

    useEffect(() => {
      const dataFetch = async () => {
        try{
            //fetch data
            const data = await fetch(`http://localhost:3000/rooms?id=303`)
            
            // handling empty object errors
            if (!data.ok){
                setIsError(true); 
            }

            // convert reponce to json format
            const dataJSON = await data.json();

            // set state when the data received
            setData(dataJSON);
            
        }
        catch (e){
            //handle fetch errors
            setIsError(true);
        }
        finally {
            setIsLoading(false);
        }
      };
  
      dataFetch();
    }, []);

    // Error state message
    if (isError) return <h1>Oops, something went wrong...</h1>

    // Loading State message
    if (isLoading) {
        
        return (
            <div>
                <CircularProgress />
            </div>
        )
    }

    // COntainer Styles
    const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
    }

    const FirstContainer = styled.div `
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    position: relative;
        max-width: 1080px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: content-box;
    `;

    const ChildContainer = styled.div `
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    position: relative;
    margin: 0 5px;
    `;

    // Success State Rendering
    return (
        <div>
            <DetailsTitle roomID={data[0]?.id}/>
            <FirstContainer>
                <ChildContainer>
                <div style={containerStyles}>
                    <RoomPhoto photos={data[0]?.photos}/>
                </div>
                </ChildContainer>
                <ChildContainer>
                <RoomInfoCard type={data[0]?.type} capacity={data[0]?.capacity} floor={data[0]?.floor} description={data[0]?.description}/>
                </ChildContainer>
            </FirstContainer>
                <MakeReservation />
            <RoomReservationList reservationList={data[0]?.reservationList} />
        </div>
    )
}

export default RoomInfo;