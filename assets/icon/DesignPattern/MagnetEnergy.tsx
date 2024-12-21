import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const MagnetEnergy = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinejoin="round" strokeWidth="1.5">
        <Path
          d="M5 9v6.74C5 19.199 8.134 22 12 22s7-2.802 7-6.26V9M5 9h3M16 9h3"
          strokeLinecap="round"
        />
        <Path
          d="M14.074 11.5v3.56c0 1.072-.928 1.94-2.074 1.94s-2.074-.868-2.074-1.94V11.5"
          strokeLinecap="round"
        />
        <Path d="M10 13H5M19 13h-5" />
        <Path d="M11.667 2 10 5h4l-1.667 3" strokeLinecap="round" />
      </G>
    </Svg>
  );
};
