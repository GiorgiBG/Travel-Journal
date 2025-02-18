export default function Entry(props){
    
   
    return(
        <section >
            <div className="card">
                <img src={props.image.src} alt={props.image.alt} className="card-image"/>
                <div className="card-description">
                    <p className="card-location">
                        <img 
                        src="./src/assets/fill-219.png"
                        alt="Location logo"
                        className="card-location-logo"/> 
                        <span className="card-location-name">{props.country}</span>
                        <a href={props.googleMapsLink} className="card-map-text" target="blank">View on the maps</a>
                    </p>
                    <h2 >{props.title}</h2>

                    <p className="card-date">{props.dates}</p>
                    <p className="card-details">{props.text}</p>
                </div>
            </div>
        </section>
    )
}