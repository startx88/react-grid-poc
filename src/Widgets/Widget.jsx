import React, { useState, useCallback } from "react";
import Icons from "../UI/Icons";
import PropTypes from "prop-types";

// Widget Context
const WidgetContext = React.createContext({});
const Widget = ({ children, className, onRemove, refs, ...rest }) => {
  const [state, setState] = useState(false);
  const minimizeHandler = useCallback(() => setState(true), []);
  const maximizeHandler = useCallback(() => setState(false), []);
  const closeHandler = useCallback(() => onRemove(), [onRemove]);
  const value = React.useMemo(
    () => ({ minimizeHandler, maximizeHandler, closeHandler, state }),
    [minimizeHandler, maximizeHandler, closeHandler, state]
  );

  return (
    <WidgetContext.Provider value={value}>
      <div
        {...rest}
        className={["widget", className, state ? "ht" : null].join(" ")}
      >
        {children}
      </div>
    </WidgetContext.Provider>
  );
};

// Widget Props
Widget.defaultProps = {
  className: "",
  onRemove: () => {},
};
Widget.propTypes = {
  className: PropTypes.string,
  onRemove: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
};

// WIDGET TITLE
const Title = ({ title, className }) => {
  const context = React.useContext(WidgetContext);
  return (
    <div className={["widget-title", className].join(" ")}>
      <h2>{title}</h2>
      <div className="widget-action">
        {context.state ? (
          <button
            onClick={context.maximizeHandler}
            className="maximize"
          ></button>
        ) : (
          <button
            onClick={context.minimizeHandler}
            className="minimize"
          ></button>
        )}

        <button onClick={context.closeHandler} className="close">
          <Icons icon="times" />
        </button>
        <div className="dots">
          <Icons icon="ellipsis-v" />
        </div>
      </div>
    </div>
  );
};

Title.defaultProps = {
  title: "",
  classname: "",
};
Title.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.element,
};

// WIDGET BODY
const Body = ({ children, className }) => {
  // const context = React.useContext(WidgetContext);
  return <div className={["widget-body", className].join(" ")}>{children}</div>;
};

Body.defaultProps = {
  className: "",
};
Body.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
};

Widget.Title = Title;
Widget.Body = Body;
export default Widget;
