import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const TemperatureDown = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M5 12a5 5 0 1 0 6 0M5 12V3h6v9M11 3h2M11 6h2M11 9h2" />
        <Path d="M8 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0V6M19 6v12m0 0 2.5-2.5M19 18l-2.5-2.5" />
      </G>
    </Svg>
  );
};
