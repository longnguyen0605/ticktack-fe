import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Bluetooth = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#131927"
        d="m6.75 8 10.5 8.5-5.5 5.5V2l5.5 5.5L6.75 16"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
