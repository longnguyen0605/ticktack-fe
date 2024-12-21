import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const SwipeTwoFingersDownGesture = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M6.5 12a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m0 0v7m0 0L9 16.6M6.5 19 4 16.6M17.5 12a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m0 0v7m0 0 2.5-2.4M17.5 19 15 16.6" />
      </G>
    </Svg>
  );
};
