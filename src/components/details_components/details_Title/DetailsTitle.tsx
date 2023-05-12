import styled from 'styled-components';

type DetailsTitle = {
    roomID: number;
}



function DetailsTitle(props: DetailsTitle) {

    const Title = styled.div `
    display: flex;
    justify-content: center;
    color: #808080; 
    font-family: 'Helvetica Neue', sans-serif; 
    font-size: 46px; 
    font-weight: 100; 
    line-height: 50px; 
    letter-spacing: 1px; 
    padding: 0 0 40px; 
    border-bottom: double #555;
    margin: 5px;
        `;

    return (
        <Title>
             Room: {props.roomID}
        </Title>
    )
}

export default DetailsTitle;