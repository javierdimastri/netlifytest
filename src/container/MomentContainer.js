import React, {useState} from 'react';
import moment from 'moment';
import {DatePicker} from "antd";

const MomentContainer = () => {
  const [dateValue, setDateValue] = useState('');
  const [anotherDateValue, setAnotherDateValue] = useState('');
  const dateFormat = 'DD-MM-YYYY';

  const renderUsualMoment = (
    < >
    ToISOString
  moment : {
    moment().toISOString()
  }
<
  br / >
  ToString
  moment : {
    moment().toString()
  }
<
  />
)
  ;

  const onChange = (date) => {
    console.log(date);
    if (!date) {
      return setDateValue('');
    }
    return setDateValue(date);
  }

  const onChangeAnother = (date) => {
    console.log('anotherDateValue', date);
    if (!date) {
      return setAnotherDateValue('');
    }
    console.log('anotherDateValue ISO', date.toISOString());
    return setAnotherDateValue(date);
  }

  const renderMomentDatePicker = (
    < >
    From
  DatePicker : {
    dateValue.toString()
  }
<
  />
)
  ;

  const renderAnotherMomentDatePicker = (
    < >
    From
  Another : {
    anotherDateValue.toString()
  }
<
  br / >
  < />
)
  ;

  return (
    < >
    < div
  className = "todo-list" >
    {renderUsualMoment}
    < DatePicker
  onChange = {onChange}
  />
  < br / >
  {renderMomentDatePicker}
  < /div>
  < div
  className = "todo-list" >
    < DatePicker
  onChange = {onChangeAnother}
  defaultValue = {moment('01/10/2020', dateFormat
)
}
  format = {dateFormat}
  />
  < br / >
  {renderAnotherMomentDatePicker}
  < br / >
  < /div>
  < />
)
}

export default MomentContainer;
