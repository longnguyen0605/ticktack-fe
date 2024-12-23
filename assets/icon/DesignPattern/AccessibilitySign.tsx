import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AccessibilitySign = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m11.5 12.5 7-.5-1.5 6.5M11.5 12.5l4.5-5L12.5 5 10 7.5M18.5 6.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
        <Path d="M5.5 12.5a5 5 0 0 1 7.584 6M3.729 15A5 5 0 0 0 11 20.831" />
      </G>
    </Svg>
  );
};
