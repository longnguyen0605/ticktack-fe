import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const SwipeDownGesture = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="M12 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0 0v8m0 0-3-3m3 3 3-3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
