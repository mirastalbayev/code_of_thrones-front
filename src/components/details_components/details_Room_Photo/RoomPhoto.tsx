import { useState } from "react"; 

type RoomPhotos = {
    photos: string[];
}

function RoomPhoto (props: RoomPhotos){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLeftArrowShown, setLeftArrowShown] = useState (false);
    const [isRightArrowShown, setRightArrowShown] = useState (false);
    const [isDotShown, setDotShown] = useState (false);
    
    const leftArrow = String.fromCodePoint(8656);
    const rightArrow = String.fromCodePoint(8658);
    const circle = String.fromCodePoint(9679);

    const sliderStyles = {
        height: "100%",
        position: "relative",
    };

    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${props.photos[currentIndex]})`,
    };

    
    const checkLeftArrow = () => {
        if (!isLeftArrowShown) {
            return (
                {
                    position: "absolute",
                    top: "50%",
                    transform: "translate(0, -50%)",
                    left: "32px",
                    fontSize: "55px",
                    color: "#808080",
                    zIndex: 1,
                    cursor: "pointer",
                }
            )
        } else {
            return (
                {
                    position: "absolute",
                    top: "50%",
                    transform: "translate(0, -50%)",
                    left: "32px",
                    fontSize: "55px",
                    color: "#F09440",
                    zIndex: 1,
                    cursor: "pointer",
                }
            )
        }
    }
    const leftArrowStyles = checkLeftArrow();

    const checkRightArrow = () => {
        if (!isRightArrowShown) {
            return (
                {
                    position: "absolute",
                    top: "50%",
                    transform: "translate(0, -50%)",
                    right: "32px",
                    fontSize: "55px",
                    color: "#808080",
                    zIndex: 1,
                    cursor: "pointer",
                }
            )
        } else {
            return (
                {
                    position: "absolute",
                    top: "50%",
                    transform: "translate(0, -50%)",
                    right: "32px",
                    fontSize: "55px",
                    color: "#F09440",
                    zIndex: 1,
                    cursor: "pointer",
                }
            )
        }
    }
     

    const rightArrowStyles = checkRightArrow();

    const dotContainerStyles = {
        display: "flex",
        justifyContent: "center",
    }

    const checkDot = () => {
        if (!isDotShown) {
            return(
                {
                    margin: "0 3px",
                    cursor: "pointer",
                    fontSize: "20px",
                    color: "#808080",
                }
            )
        } else {
            return(
                {
                    margin: "0 3px",
                    cursor: "pointer",
                    fontSize: "20px",
                    color: "#F09440",
                }
            )
        }
        
    }

    const dotStyles = checkDot();

    const goToPrevious = () => {
        const isFirstPhoto = currentIndex === 0;
        const newIndex = isFirstPhoto ? props.photos.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastPhoto = currentIndex === props.photos.length - 1;
        const newIndex = isLastPhoto ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToPhoto = (photoIndex) => {
        setCurrentIndex(photoIndex);
    }    

    return(
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious} 
                onMouseEnter={() => setLeftArrowShown (true)}
                onMouseLeave={() => setLeftArrowShown (false)}>
                {leftArrow}
            </div>
            <div style={rightArrowStyles} onClick={goToNext}
                onMouseEnter={() => setRightArrowShown (true)}
                onMouseLeave={() => setRightArrowShown (false)}>
                {rightArrow}
            </div>
            <div style={slideStyles}></div>
            <div style={dotContainerStyles}>
                {props.photos.map((photo, photoIndex) => (
                    <div key={photoIndex} style={dotStyles} 
                    onClick={() => goToPhoto(photoIndex)}
                    onMouseEnter={() => setDotShown(true)}
                    onMouseLeave={() => setDotShown (false)}>
                        {circle}
                    </div>
                ))}
            </div>
        </div>
    );
}

    

export default RoomPhoto;