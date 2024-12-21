import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Glasses = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M2 14a4 4 0 1 0 8 0 4 4 0 0 0-8 0m0 0V6M22 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0m0 0V6M14 14h-4" />
      </G>
    </Svg>
  );
};
