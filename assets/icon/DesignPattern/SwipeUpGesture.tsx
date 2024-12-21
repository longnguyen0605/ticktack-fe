import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const SwipeUpGesture = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#131927"
        d="M12 10a6 6 0 1 0 0 12 6 6 0 0 0 0-12m0 0V2m0 0 3 3m-3-3L9 5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
