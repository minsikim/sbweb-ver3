import React from "react";

class Section extends React.Component {
    render() {
      return (
        <div className="section">
          <h3>{this.props.content}</h3>
          {this.props.children}
        </div>
      );
    }
  }

  export default Section;