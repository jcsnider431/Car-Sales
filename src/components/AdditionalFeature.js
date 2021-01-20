import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions/featuresActions';


const AdditionalFeature = props => {

  const {id, name, price, addFeature} = props;

  const handleAdd = () => {
    addFeature({ id, name, price});
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleAdd}>Add</button>
      {name} (+{price})
    </li>
  );
};

export default connect(null, {addFeature})(AdditionalFeature);
