import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const HouseRooms = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M11 19v2M11 12v4M16 12v4h-2M21 12H8M5 12H3M3 5l9-2 9 2" />
        <Path d="M21 8.6v11.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V8.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6" />
      </G>
    </Svg>
  );
};
