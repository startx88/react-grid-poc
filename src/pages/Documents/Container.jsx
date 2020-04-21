import React, { useState } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import Title from "../../Components/Title/Title";
import Widget from "../../Widgets/Widget";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Container = (props) => {
  const [state, setState] = useState({
    items: [0, 1, 2, 3, 4].map(function (i, key, list) {
      return {
        i: i.toString(),
        x: i * 2,
        y: 0,
        w: 2,
        h: 2,
        static: false,
      };
    }),
  });

  const onRemoveItem = (id) => {
    setState({
      ...state,
      items: _.reject(state.items, { i: id }),
    });
  };

  const createElement = (el) => {
    return (
      <Widget key={el.i} data-grid={el} onRemove={() => onRemoveItem(el.i)}>
        <Widget.Title title={"widget-" + el.i} />
        <Widget.Body>{el.i}</Widget.Body>
      </Widget>
    );
  };

  const onLayoutChange = (layout) => {
    setState({ items: layout });
  };

  return (
    <>
      <Title title="Documents" />
      <div style={{ position: "relative" }}>
        <ResponsiveReactGridLayout onLayoutChange={onLayoutChange}>
          {_.map(state.items, (el) => createElement(el))}
        </ResponsiveReactGridLayout>
      </div>
    </>
  );
};

export default Container;
