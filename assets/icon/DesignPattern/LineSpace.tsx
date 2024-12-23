import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const LineSpace = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M11 6h10M11 12h10M11 18h10M5 19V5m0 14-2-2.5M5 19l2-2.5M5 5 3 7m2-2 2 2" />
      </G>
    </Svg>
  );
};
