import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const EaseInOut = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#131927"
        d="M3 20c8 0 10-16 18-16"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
