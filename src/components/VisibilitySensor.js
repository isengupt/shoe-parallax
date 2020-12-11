import React, { Component } from "react";

import VSensor from "react-visibility-sensor";

class VisibilitySensor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
  }

  render() {
    const { active } = this.state;
    const { once, children, ...otherProps } = this.props;
    return (
      <VSensor
        active={active}
        onChange={isVisible => {
          once &&
            isVisible &&
            this.setState({ active: false }, () =>
              console.log("turned the things off")
            );
        }}
        {...otherProps}
      >
        {({ isVisible }) => children({ isVisible })}
      </VSensor>
    );
  }
}



export default VisibilitySensor;
