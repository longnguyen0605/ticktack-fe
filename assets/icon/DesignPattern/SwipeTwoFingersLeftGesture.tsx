import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const SwipeTwoFingersLeftGesture = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 17.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0m0 0H5m0 0L7.4 15M5 17.5 7.4 20M12 6.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0m0 0H5m0 0L7.4 4M5 6.5 7.4 9" />
      </G>
    </Svg>
  );
};
