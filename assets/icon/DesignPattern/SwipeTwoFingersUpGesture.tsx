import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const SwipeTwoFingersUpGesture = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M6.5 12a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m0 0V5m0 0L9 7.4M6.5 5 4 7.4M17.5 12a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m0 0V5m0 0L20 7.4M17.5 5 15 7.4" />
      </G>
    </Svg>
  );
};
