import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const RepeatOnce = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M17 17H8c-1.667 0-5-1-5-5M8 7h8c1.667 0 5 1 5 5 0 1.494-.465 2.57-1.135 3.331" />
        <Path d="M14.5 14.5 17 17l-2.5 2.5M4 8V3L2 4" />
      </G>
    </Svg>
  );
};
