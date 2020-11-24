import React from "react";
import ReactDOM from "react-dom";
import "./Producer.css";

class Producer {
  private portHole: React.RefObject<HTMLDivElement>;

  constructor(root: HTMLElement | null) {
    this.portHole = React.createRef();

    if (!root) return;

    this.mount(root);
  }

  private mount(root: HTMLElement) {
    ReactDOM.render(
      <div className="Producer">
        <span>Producer</span>
        <div ref={this.portHole}></div>
      </div>,
      root
    );
  }

  public get Portal(): React.FC {
    return (props) =>
      !this.portHole.current
        ? null
        : ReactDOM.createPortal(
            <div className="Producer-portal">{props.children}</div>,
            this.portHole.current
          );
  }
}

export default Producer;
