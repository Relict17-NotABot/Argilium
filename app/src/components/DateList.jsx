import propTypes from 'prop-types'
import { DateCard } from './DateCard'


export function DateList({ dates }) {

    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
{dates.map((date) => (
    <DateCard
        key={date.id}
        date={date}
    />
))}
        </div>
    )
}

DateList.propTypes = {
    dates: propTypes.array.isRequired
}