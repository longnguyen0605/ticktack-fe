import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Check = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#131927"
        d="m5 13 4 4L19 7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};