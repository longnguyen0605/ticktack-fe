import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Sofa = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M2 16v3M4 9V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" />
        <Path d="M20 9a2 2 0 0 0-2 2v2H6v-2a2 2 0 1 0-4 0v6h20v-6a2 2 0 0 0-2-2M22 16v3" />
      </G>
    </Svg>
  );
};
