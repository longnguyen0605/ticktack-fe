import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Magnet = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M4 4v8.296C4 16.551 7.582 20 12 20s8-3.45 8-7.704V4" />
        <Path d="M4 4h5.63v6.818C9.63 12.023 10.69 13 12 13s2.37-.977 2.37-2.182V4H20M9 8H4M20 8h-5" />
      </G>
    </Svg>
  );
};
