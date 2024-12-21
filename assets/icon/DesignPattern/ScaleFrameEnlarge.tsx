import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ScaleFrameEnlarge = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M11 13.6V21H3.6a.6.6 0 0 1-.6-.6V13h7.4a.6.6 0 0 1 .6.6M11 21h3M3 13v-3M6 3H3.6a.6.6 0 0 0-.6.6V6M14 3h-4M21 10v4M18 3h2.4a.6.6 0 0 1 .6.6V6M18 21h2.4a.6.6 0 0 0 .6-.6V18M11 10h3v3" />
      </G>
    </Svg>
  );
};
