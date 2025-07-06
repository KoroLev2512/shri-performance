import {memo, useEffect, useRef} from "react";

export const Event = memo((props) => {
  const ref = useRef();

  const {onSize} = props;

  useEffect(() => {
    const width = ref.current.offsetWidth;
    const height = ref.current.offsetHeight;
    if (onSize) {
      onSize({width, height});
    }
  });

  return <li ref={ref} className="event">
    <button className="event__button">
      <span className={`event__icon event__icon_${props.icon}`} role="img" aria-label={props.iconLabel}></span>
      <h4 className="event__title">{props.title}</h4>
      <span className="event__subtitle">{props.subtitle}</span>
    </button>
  </li>;
});
