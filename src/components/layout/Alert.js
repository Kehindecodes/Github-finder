import React from 'react';
import AlertContext from '../../context/alert/alertContext';
import { useContext } from 'react';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    // show a div if the alert is not null
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'>{alert.msg}</i>
      </div>
    )
  );
};
export default Alert;
