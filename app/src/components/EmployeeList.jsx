import propTypes from 'prop-types'
import { EmployeeCard } from './EmployeeCard'

export function EmployeeList({ employees }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {employees.map((employee) => (
                <EmployeeCard key={employee.id} employee={employee} />
            ))}
        </div>
    )
}

EmployeeList.propTypes = {
    employees: propTypes.array.isRequired
}