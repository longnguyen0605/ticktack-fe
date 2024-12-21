import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const MicMute = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m3 3 18 18M9 9a5 5 0 0 0 5 5v0m1-3.5V5a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v.5" />
        <Path d="M5 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1M12 18v4m0 0H9m3 0h3" />
      </G>
    </Svg>
  );
};
