import propTypes from 'prop-types'
import { EmployeeCard } from './EmployeeCard'
import { EmployeeMiniCard } from './EmployeeCardMini'

export function EmployeeList({ employees, mini }) {
    if (mini) {
        return (<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 p-4">
            {employees.map((employee) => (
                <EmployeeMiniCard key={employee.id} employee={employee} />
            ))}
        </div> ) 
    } else {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {employees.map((employee) => (
                <EmployeeCard key={employee.id} employee={employee} />
            ))}
        </div>
    )
    }

}

EmployeeList.propTypes = {
        employees: propTypes.array.isRequired,
        mini: propTypes.bool
}