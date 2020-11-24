import React from "react";
import Player from "./Producer";
import "./Consumer.css";

function Consumer() {
  const mainRef = React.useRef(null);
  const player = React.useRef<Player | null>(null);

  React.useLayoutEffect(() => {
    console.log(mainRef);
    if (!mainRef.current) return;
    if (player.current) return;

    player.current = new Player(mainRef.current);
  });

  return (
    <div className="Consumer">
      <header className="Consumer-header">
        <h1>Consumer</h1>
        <p>Some | nav | items</p>
      </header>
      <main ref={mainRef}>
        {player?.current?.Portal && (
          <player.current.Portal>
            This content is declared in the Consumer, but appears in the portal
            defined in the Producer.
          </player.current.Portal>
        )}
      </main>
      <aside>
        <h2>Consumer's content</h2>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>a</li>
          <li>b</li>
          <li>c</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </aside>
    </div>
  );
}

export default Consumer;
