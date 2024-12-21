import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const WhiteFlag = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#131927"
        d="m5 15 .95-10.454A.6.6 0 0 1 6.548 4h13.795a.6.6 0 0 1 .598.654l-.891 9.8a.6.6 0 0 1-.598.546zm0 0-.6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
