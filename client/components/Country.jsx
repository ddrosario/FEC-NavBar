import React from 'react';
import USA from 'react-svg-loader!../Images/USA.svg';
import Can from 'react-svg-loader!../Images/Canada.svg';

const Country = ({ country }) => {
  const countryRender = country === 'US' ? (
    <span className="row">
      <USA height={15} width={15} />
      <div>US</div>
    </span>) : (
      <span className="row">
        <Can height={15} width={15} />
        <div>Can</div>
      </span>
    );
  return <span>{countryRender}</span>;
};
export default Country;
