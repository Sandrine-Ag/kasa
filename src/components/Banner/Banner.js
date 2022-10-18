


function Banner ({text, image, imageDesc}) {
    return (
        <div className="Banner">
            <h1> { text}</h1>
            <img src={image} alt={imageDesc} />
            <div className="banner"></div>
        </div>
    )
}

export default Banner;