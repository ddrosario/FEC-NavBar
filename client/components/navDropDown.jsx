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
    console.log(this.props.ads);
    let navRender;
    let newads;
    switch (this.props.name) {
      case 'NEW':
        newads = this.props.ads.filter((ad, index) => {
          return ad.location === 'NEW';
        });
        navRender = <New ads={newads} />;
        break;
      case 'BRANDS':
        newads = this.props.ads.filter((ad, index) => {
          return ad.location === 'BRANDS';
        });
        navRender = <Brands brands={this.state.brands} ads={newads} />;
        break;
      case 'GIFTS':
        newads = this.props.ads.filter((ad, index) => {
          return ad.location === 'GIFTS';
        });
        navRender = <Gifts ads={newads} />;
        break;
      case 'COMMUNITY':
        newads = this.props.ads.filter((ad, index) => {
          return ad.location === 'COMMUNITY';
        });
        navRender = <Community ads={newads} />;
        break;
      case 'HOW-TOS':
        newads = this.props.ads.filter((ad, index) => {
          return ad.location === 'HOW-TOS';
        });
        navRender = <HowTos ads={newads} />;
        break;
      default:
        newads = this.props.ads.filter((ad, index) => {
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
