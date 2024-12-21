import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PenConnectBluetooth = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m6.5 17.5-1 4 3.731-.933a1 1 0 0 0 .465-.263L21.5 8.5a2.12 2.12 0 0 0 0-3v0a2.12 2.12 0 0 0-3 0l-4 4M17.5 6.5l3 3M5 6.6l7 5.1L8.333 15V3L12 6.3l-7 5.1" />
      </G>
    </Svg>
  );
};
