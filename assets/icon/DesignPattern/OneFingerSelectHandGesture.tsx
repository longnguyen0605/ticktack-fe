import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const OneFingerSelectHandGesture = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m7.5 12-2.004 2.672a2 2 0 0 0 .126 2.552l3.784 4.128c.378.413.912.648 1.473.648H15.5c2.4 0 4-2 4-4q0 0 0 0V9.429M16.5 10v-.571c0-2.286 3-2.286 3 0" />
        <Path d="M13.5 10V8.286c0-2.286 3-2.286 3 0V10M10.5 10V7.5c0-2.286 3-2.286 3 0q0 0 0 0V10M10.5 10V3.499A1.5 1.5 0 0 0 9 2v0a1.5 1.5 0 0 0-1.5 1.5V15" />
      </G>
    </Svg>
  );
};
