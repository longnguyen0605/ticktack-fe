import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const SwipeRightGesture = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#131927"
        d="M14 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0m0 0h8m0 0-3-3m3 3-3 3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
