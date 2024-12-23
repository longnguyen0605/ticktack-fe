import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Hourglass = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 12a7 7 0 0 0 7-7H5a7 7 0 0 0 7 7m0 0a7 7 0 0 1 7 7H5a7 7 0 0 1 7-7M5 2h14M5 22h14" />
      </G>
    </Svg>
  );
};
