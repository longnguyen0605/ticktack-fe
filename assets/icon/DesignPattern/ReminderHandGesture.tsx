import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ReminderHandGesture = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="m17.5 12 2.004 2.672a2 2 0 0 1-.126 2.552l-3.783 4.127A2 2 0 0 1 14.12 22H9.5c-2.358 0-3.622-2.575-3.982-3.93a.6.6 0 0 1-.018-.143V9.43c0-2.286 3-2.286 3 0v.57"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11.5 10V8.286c0-2.286-3-2.286-3 0V10M14.5 10V7.5c0-2.286-3-2.286-3 0q0 0 0 0V10M14.5 10V3.499A1.5 1.5 0 0 1 16 2v0a1.5 1.5 0 0 1 1.5 1.5V15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M17.563 6.5h2.062C20.5 6.5 21 6.078 21 5.25S20.5 4 19.625 4H12.25C11.56 4 11 4.56 11 5.25v.25a1 1 0 0 0 1 1" />
      </G>
    </Svg>
  );
};
