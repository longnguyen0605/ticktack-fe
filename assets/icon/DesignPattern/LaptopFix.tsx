import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const LaptopFix = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M20.8 14.222H3.654a.6.6 0 0 0-.578.437L1.72 19.456A2 2 0 0 0 3.644 22h16.712a2 2 0 0 0 1.924-2.544zm0 0v-6.11M3.2 14.222V4a2 2 0 0 1 2-2H12M11 19h2M17.656 4.828l-2.828 2.829M20.485 4.828A2 2 0 0 1 17.656 2M14.828 10.485A2 2 0 0 0 12 7.657" />
      </G>
    </Svg>
  );
};
