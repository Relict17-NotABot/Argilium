import propTypes from "prop-types"

export function EventCard({event}){
    return (
        <article>
            <h3> {event.title} </h3>
            <p>Fecha: {event.date} </p>
            <p>Lugar: {event.location} </p>
        </article>
    )
}
EventCard.propTypes={
    event: propTypes.shape({
        title:propTypes.string.isRequired,
        date: propTypes.string.isRequired,
        location: propTypes.string.isRequired
    }).isRequired
}
