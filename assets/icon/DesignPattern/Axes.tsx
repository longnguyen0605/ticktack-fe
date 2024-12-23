import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Axes = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m21 19.452-9-6.61m0 0V3m0 9.843-9 6.609M20.438 16.71 21 19.452 18.188 20M9.75 5.194 12 3l2.25 2.194M5.813 20 3 19.452l.563-2.742" />
      </G>
    </Svg>
  );
};
