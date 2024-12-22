import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Antenna = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path fill="#131927" d="M12 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        <Path d="M16 1s1.5 1 1.5 3S16 7 16 7M8 1S6.5 2 6.5 4 8 7 8 7M7 23l1.111-4M17 23l-1.111-4M14.5 14 12 5l-2.5 9m5 0h-5m5 0 1.389 5M9.5 14l-1.389 5m0 0h7.778" />
      </G>
    </Svg>
  );
};
