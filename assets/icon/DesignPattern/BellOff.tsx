import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const BellOff = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M6.27 6.5C6.093 7.11 6 7.75 6 8.4 6 15.867 3 18 3 18h15M7.758 3.875C8.883 2.675 10.409 2 12 2c1.59 0 3.117.674 4.242 1.875 1.125 1.2 1.758 2.828 1.758 4.525 0 7.467 3 9.6 3 9.6M13.73 21a2 2 0 0 1-3.46 0M3 3l18 18" />
      </G>
    </Svg>
  );
};
