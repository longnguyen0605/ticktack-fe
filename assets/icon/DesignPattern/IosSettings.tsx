import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const IosSettings = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12M18 12h-6M9 6.803 12 12m0 0-3 5.197" />
        <Path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14" strokeDasharray="1 3" />
        <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" />
        <Path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
      </G>
    </Svg>
  );
};