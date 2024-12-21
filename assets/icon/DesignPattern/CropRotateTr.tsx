import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const CropRotateTr = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M20 10V7a4 4 0 0 0-4-4h-4" />
        <Path d="M22.5 7.5 20 10l-2.5-2.5M14 17v-6a1 1 0 0 0-1-1H7M2 10h2M14 22v-2M4 8v11a1 1 0 0 0 1 1h11" />
      </G>
    </Svg>
  );
};
