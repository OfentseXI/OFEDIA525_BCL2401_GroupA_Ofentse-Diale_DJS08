import React from "react"

export default function Vans() {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="van-tile">
            <img src={van.imageUrl} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
    ))

    return (
        <h1>Vans page goes here 🚐</h1>
    )
}