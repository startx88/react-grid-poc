import React, { useState, memo, useEffect } from "react";
import _ from "lodash";
import Title from "../../Components/Title/Title";
import Icons from "../../UI/Icons";
import Widget from "../../Widgets/Widget";
import CardTile from "../../Widgets/CardTile";
import Calendar from "../../Widgets/Calendar";
import RGL, { WidthProvider } from "react-grid-layout";
import { LIBRARY, CARDTITLEDATA, EVENTS, LAYOUTS } from "../../data";
import Date from "../../UI/Date";

const GridLayout = WidthProvider(RGL);

let ht = null;
const Container = (props) => {
  const [state, setState] = useState({ items: LAYOUTS });
  const onRemoveItem = (id) => {
    setState({
      ...state,
      items: _.reject(state.items, { i: id }),
    });
  };

  console.log(ht);
  const createElement = (layout) => {
    return layout.i === "library" ? (
      <Widget key="library" onRemove={() => onRemoveItem(layout.i)}>
        <Widget.Title title="Library" />
        <Widget.Body>
          <ul className="list">
            {LIBRARY.map((lib) => (
              <li key={lib.id}>
                <div className="list-icon">
                  <Icons icon={lib.icon} />
                </div>
                <div className="list-text">
                  <h6>{lib.title}</h6>
                  <span>{lib.text}</span>
                </div>
                <div className="dots">
                  <Icons icon="ellipsis-h" />
                </div>
              </li>
            ))}
          </ul>
        </Widget.Body>
      </Widget>
    ) : layout.i === "calendar" ? (
      <Widget key="calendar" onRemove={() => onRemoveItem(layout.i)}>
        <Widget.Title title="Event Calendar" />
        <Widget.Body>
          <Calendar events={EVENTS} />
        </Widget.Body>
      </Widget>
    ) : null;
  };

  return (
    <>
      <Title title="Dashboard" />
      <div className="grid" style={{ position: "relative" }}>
        <GridLayout
          className="layout"
          cols={12}
          rowHeight={30}
          containerPadding={[0, 10]}
          width={window.innerWidth - 300}
        >
          {CARDTITLEDATA.map((data, index) => (
            <CardTile
              icon={data.icon}
              iconColor={data.iconColor}
              iconBg={data.iconBg}
              key={data.key}
              data-grid={data.datagrid}
              bottomIconData={data.list}
            >
              <h5>{data.title}</h5>
              <small>{data.value}</small>
            </CardTile>
          ))}
        </GridLayout>

        <GridLayout
          className="layout"
          layout={state.items}
          cols={12}
          rowHeight={40}
          width={window.innerWidth - 300}
          containerPadding={[0, 15]}
          onResize={(resize) => console.log("hello", resize)}
        >
          {_.map(state.items, (item) => createElement(item))}
        </GridLayout>
      </div>
    </>
  );
};

Container.defaultProps = {
  rowHeight: 150,
  cols: 2, // to make grid item 50% or 100%
};

export default memo(Container);
