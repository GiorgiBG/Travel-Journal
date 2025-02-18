import Header from "./components/Header";
import Entry from "./components/Entry"
import data from "../data.js"


export default function App(){

    const entryElement = data.map((entry)=>{
        return(
            <Entry
                        key={data.id}
                        image={{
                            src: entry.img.src,
                            alt:entry.img.alt
                        }}
                        title={entry.title}
                        country={ entry.country}
                        googleMapsLink={entry.googleMapsLink}
                        dates={entry.dates}
                        text={entry.text}         
                    />
        )
    })
    return(
        <>
            <Header/>
            <main>
                <div className="card-container">
                    {entryElement}
                </div>       
            </main>
        </>
    )
}   