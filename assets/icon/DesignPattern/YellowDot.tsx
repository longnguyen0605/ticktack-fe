import Svg, { Rect, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const YellowDot = (props: IProps) => {
  return (
    <Svg width="10" height="10" fill="none" viewBox="0 0 10 10" {...props}>
      <Rect width="10" height="10" fill="#FA0" rx="5" />
    </Svg>
  );
};
