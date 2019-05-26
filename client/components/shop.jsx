import React from 'react';
import CategoryEntry from './ShopDropDowns/categoryentry.jsx';
import SpecificCatEntry from './ShopDropDowns/specificCatEntry.jsx';

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        'MAKEUP',
        'SKINCARE',
        'FRAGRANCE',
        'HAIR',
        'BATH & BODY',
        'TOOLS & BRUSHES',
        'MEN',
        'MINI SIZE',
        'GIFTS',
        'SEPHORA COLLECTION',
        'BEAUTY OFFERS',
        'SALE'
      ],
      toggleDrop: false,
      display: false,
    };
    this.displayBox = this.displayBox.bind(this);
    this.showDropDown = this.showDropDown.bind(this);
    this.hideBox = this.hideBox.bind(this);
  }
  showDropDown() {
    this.setState({
      toggleDrop: !this.state.toggleDrop
    });
  }
  displayBox(e) {
    this.setState({
      display: true
    });
  }
  hideBox() {
    this.setState({
      display: false
    });
  }

  render() {
    return (
      <div>
        <div
          className="shops"
          onMouseEnter={e => {
            this.showDropDown();
          }}
          onPointerLeave={e => {
            console.log('mouse left');
            this.showDropDown();
            this.hideBox();
          }}
        >
          <div className="ShopBoxStyled">SHOP</div>
          <div className="shop-flex">
            <div className="StyledBoxDrop">
              {this.state.toggleDrop ? (
                this.state.entries.map((entry, index) => {
                  return (
                    <CategoryEntry
                      key={index}
                      name={entry}
                      displayBox={this.displayBox}
                    />
                  );
                })
              ) : (
                <div />
              )}
            </div>
            <div className="StyledBoxDrop">
              {this.state.display && this.state.toggleDrop ? (
                <SpecificCatEntry />
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
