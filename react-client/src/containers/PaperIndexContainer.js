import React, { Component } from "react";
import Paper from "../components/Paper";

class PaperIndexContainer extends Component {
  render() {
    const { allPapers } = this.props;
    console.log("papers in the index page", allPapers)

    const papers = allPapers.map(p => (
      <Paper key={p.id} id={p.id} {...p} />
    ));

    return (
      <div>
        <ul className="papers-list">{papers}</ul>
      </div>
    );
  }
}

export default PaperIndexContainer;