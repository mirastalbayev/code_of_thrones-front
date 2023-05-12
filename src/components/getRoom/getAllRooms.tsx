
async function getAllRooms(userID: number, myToken: string){
    try {
        const allRooms = await fetch(`http://44.202.105.221:8087/rooms?userId=${userID}`, {
            headers: {Authorization: `Bearer ${myToken}`},
          });
        const allRoomsJson = await allRooms.json();
        return allRooms;
    }
    catch {
        throw new Error("Sorry, try later...");
    }
}

export default getAllRooms;