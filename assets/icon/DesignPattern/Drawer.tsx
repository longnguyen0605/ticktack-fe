import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Drawer = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M21 14H3M3 8h18M11 17h2M11 11h2M11 5h2M21 2.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V2.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6M17.5 20v2M6.5 20v2" />
      </G>
    </Svg>
  );
};
