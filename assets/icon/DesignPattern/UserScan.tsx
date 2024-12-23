import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const UserScan = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M6 3H3v3M18 3h3v3M6 21H3v-3M7 18v-1a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v1M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6M18 21h3v-3" />
      </G>
    </Svg>
  );
};
