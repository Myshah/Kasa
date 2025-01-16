function Accommodations() {
    const { title, cover}= props
    return(
        <div>
            <img src={cover} alt="interieur d'un logement"/>
            <p>{title}</p>
        </div>
    )
}

export default Accommodations;