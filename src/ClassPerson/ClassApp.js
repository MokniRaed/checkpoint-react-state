import React from "react";
import Person from "../Person/Person";

class ClassApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: false,
    };
  }

  toggleShow = () => {
    this.setState(!this.state.shows);
  };

  render() {
    return (
      <>
        <button onClick={() => this.toggleShow()}>Toggle show</button>
        {this.state.shows && (
          <Person
            fullName={"Ahmed"}
            bio={"Student Full stack js"}
            profession={"It student"}
            imgSrc={
              "https://menshaircuts.com/wp-content/uploads/2023/01/tp-simple-hair-style-men.jpg"
            }
          />
        )}
      </>
    );
  }
}

export default ClassApp;
