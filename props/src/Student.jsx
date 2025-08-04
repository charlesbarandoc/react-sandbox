import PropTypes from 'prop-types';

function Student(props) {
    return(
        <div className="cook">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Cook: {props.isCook ? "Yes" : "No"}</p>   
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    cook: PropTypes.bool
}

export default Student