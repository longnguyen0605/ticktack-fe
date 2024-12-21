import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ArrowEmailForward = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#131927"
        d="M22 10H8c-8 0-8 11 0 11m14-11-7-7m7 7-7 7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
