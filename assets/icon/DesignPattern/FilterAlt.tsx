import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const FilterAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#131927"
        d="M3 7V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3M3 7l6.65 5.7a1 1 0 0 1 .35.76v6.26a1 1 0 0 0 1.242.97l2-.5a1 1 0 0 0 .758-.97v-5.76a1 1 0 0 1 .349-.76L21 7M3 7h18"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
