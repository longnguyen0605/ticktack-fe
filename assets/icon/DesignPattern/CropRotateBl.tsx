import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const CropRotateBl = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M4 14v3a4 4 0 0 0 4 4h4" />
        <Path d="M1.5 16.5 4 14l2.5 2.5M20 11V5a1 1 0 0 0-1-1h-6M8 4h2M20 16v-2M10 2v11a1 1 0 0 0 1 1h11" />
      </G>
    </Svg>
  );
};
