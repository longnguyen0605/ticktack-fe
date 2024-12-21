import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Dna = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M4 3c0 5.625 8 9 8 9s8 3.375 8 9" />
        <Path d="M20 3c0 5.625-8 9-8 9s-8 3.375-8 9M8 6h11M8 18h11M11 9h5.5M11 15h5.5" />
      </G>
    </Svg>
  );
};
