import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const RefreshDouble = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M21.17 8A10 10 0 0 0 12 2c-5.185 0-9.448 3.947-9.95 9" />
        <Path d="M17 8h4.4a.6.6 0 0 0 .6-.6V3M2.881 16c1.544 3.532 5.068 6 9.168 6 5.186 0 9.45-3.947 9.951-9" />
        <Path d="M7.049 16h-4.4a.6.6 0 0 0-.6.6V21" />
      </G>
    </Svg>
  );
};
