import React from 'react'
import Passengers from './Passengers'
import { connect } from 'react-redux'
import { addPassenger } from '../../store/reducers/passengerReducer'


const PassengerControl = (props) => {
    const {addPassenger, success, error} = props; 

    const onSubmit = (data) => {
        addPassenger(data)
        console.log(data)
    }

    return (
        <div>
            <Passengers error={error} success={success} onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        error: state.passenger.error,
        success: state.passenger.success
    }
}

export default connect(mapStateToProps, { addPassenger})(PassengerControl);