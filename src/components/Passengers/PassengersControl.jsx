import React from 'react'
import Passengers from './Passengers'
import { connect } from 'react-redux'
import { addPassenger } from '../../store/reducers/passengerReducer'


const PassengerControl = ({ addPassenger, success, error }) => {
    const onSubmit = (data) => {
        addPassenger(data)
    }

    return (
        <div>
            <Passengers error={error} success={success} onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        error: state.passenger.error,
        success: state.passenger.success
    }
}

export default connect(mapStateToProps, { addPassenger })(PassengerControl);