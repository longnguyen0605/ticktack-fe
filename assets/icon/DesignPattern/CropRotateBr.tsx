import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const CropRotateBr = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M14 20h3a4 4 0 0 0 4-4v-4" />
        <Path d="M16.5 22.5 14 20l2.5-2.5M14 11V5a1 1 0 0 0-1-1H7M2 4h2M14 16v-2M4 2v11a1 1 0 0 0 1 1h11" />
      </G>
    </Svg>
  );
};