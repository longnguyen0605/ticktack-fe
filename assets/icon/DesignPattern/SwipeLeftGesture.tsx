import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const SwipeLeftGesture = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="M10 12a6 6 0 1 0 12 0 6 6 0 0 0-12 0m0 0H2m0 0 3-3m-3 3 3 3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
