# An exploration of React Portals.

Portals allow consumers to render into specific DOM nodes, typically outside the render tree they're responsible for.

It's possible to write React code within standard classes rather than classes extending React.Component, rendering "manually" rather than using the React.Component.render() function. This can allow for exposing a Portal to consumers, allowing them to pass content to child/provider's portals.

This repo explores this construction.
