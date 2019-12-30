import React, {Component} from 'react';
import DatePicker from 'react-date-picker';
import PropTypes from 'prop-types';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DatePickerComponent extends Component {
    constructor() {
        super();
        this.state = {
            date: new Date(),
        }
    }

    render() {
        const {id, label, setProps} = this.props;
        // console.log(this.state.date)
        return (
            <div id={id}>
                {label}: &nbsp;
                <DatePicker
                    value={this.state.date}
                    onChange={(date) => {
                        setProps({value: date})
                        this.setState({date})
                    }}
                />
            </div>)
    }
}

const isValue = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
]);

DatePickerComponent.defaultProps = {
    value: new Date()
};

DatePickerComponent.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * A label that will be printed when this component is rendered.
     */
    label: PropTypes.string.isRequired,
    /**
     * The value displayed in the input.
     */
    value: PropTypes.oneOfType([
        isValue,
        PropTypes.arrayOf(isValue),
    ]),
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
