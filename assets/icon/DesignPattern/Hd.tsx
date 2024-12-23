import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Hd = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M3 7v5m0 5v-5m0 0h7m0 0V7m0 5v5M13 12V7c4 0 8 0 8 5s-4 5-8 5z" />
      </G>
    </Svg>
  );
};
