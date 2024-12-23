import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DatabaseSettings = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M4 6v6s0 3 7 3 7-3 7-3V6" />
        <Path d="M11 3c7 0 7 3 7 3s0 3-7 3-7-3-7-3 0-3 7-3M11 21c-7 0-7-3-7-3v-6M19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
        <Path d="M19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6" strokeDasharray="0.3 2" />
      </G>
    </Svg>
  );
};
