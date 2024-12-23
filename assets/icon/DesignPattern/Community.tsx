import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Community = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M7 18v-1a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v1M1 18v-1a3 3 0 0 1 3-3v0M23 18v-1a3 3 0 0 0-3-3v0M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M20 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
      </G>
    </Svg>
  );
};
