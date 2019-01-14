import React from 'react';
import Brands from './NavDropDown/Brands.jsx';
import New from './NavDropDown/New.jsx';
import Gifts from './NavDropDown/Gifts.jsx';
import Community from './NavDropDown/Community.jsx';
import HowTos from './NavDropDown/HowTos.jsx';
import StoresLocator from './NavDropDown/StoresLocator.jsx';

class NavDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whichTab: props.name,
      brands: props.brands,
      ads: props.ads
    };
  }
  render() {
    let navRender;
    if (this.props.name === 'NEW') {
      let newads = this.props.ads.filter((ad, index) => {
        return ad.location === 'NEW';
      });
      navRender = <New ads={newads} />;
    } else if (this.props.name === 'BRANDS') {
      let newads = this.props.ads.filter((ad, index) => {
        return ad.location === 'BRANDS';
      });
      navRender = <Brands brands={this.state.brands} ads={newads} />;
    } else if (this.props.name === 'GIFTS') {
      let newads = this.props.ads.filter((ad, index) => {
        return ad.location === 'GIFTS';
      });
      navRender = <Gifts ads={newads} />;
    } else if (this.props.name === 'COMMUNITY') {
      let newads = this.props.ads.filter((ad, index) => {
        return ad.location === 'COMMUNITY';
      });
      navRender = <Community ads={newads} />;
    } else if (this.props.name === 'HOW-TOS') {
      let newads = this.props.ads.filter((ad, index) => {
        return ad.location === 'HOW-TOS';
      });
      navRender = <HowTos ads={newads} />;
    } else {
      let newads = this.props.ads.filter((ad, index) => {
        return ad.location === 'STORES';
      });
      navRender = <StoresLocator ads={newads} />;
    }
    return (
      <div
        className="StyledNav"
        onPointerEnter={e => this.props.showDrop(this.props.name)}
        onPointerLeave={this.props.hideDropDown}
      >
        <div>{navRender}</div>
      </div>
    );
  }
}
export default NavDropDown;
