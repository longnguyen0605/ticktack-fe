import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const SwipeTwoFingersRightGesture = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m0 0h7m0 0L16.6 15m2.4 2.5L16.6 20M12 6.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m0 0h7m0 0L16.6 4M19 6.5 16.6 9" />
      </G>
    </Svg>
  );
};
