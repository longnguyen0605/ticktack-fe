import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const SvgFormat = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinecap="round" strokeWidth="1.5">
        <Path
          d="M4.5 15h2A1.5 1.5 0 0 0 8 13.5v0A1.5 1.5 0 0 0 6.5 12H6a1.5 1.5 0 0 1-1.5-1.5v0A1.5 1.5 0 0 1 6 9h1.5M10.5 9l1.5 6 1.5-6M19.5 9h-3v6h3v-2.4"
          strokeLinejoin="round"
        />
        <Path d="M4 6V3.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6V6M4 18v2.4a.6.6 0 0 0 .6.6h14.8a.6.6 0 0 0 .6-.6V18" />
      </G>
    </Svg>
  );
};
