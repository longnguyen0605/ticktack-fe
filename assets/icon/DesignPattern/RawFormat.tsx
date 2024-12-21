import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const RawFormat = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinecap="round" strokeWidth="1.5">
        <Path d="M4 6V3.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6V6M4 18v2.4a.6.6 0 0 0 .6.6h14.8a.6.6 0 0 0 .6-.6V18" />
        <Path
          d="M16.5 9v6l1.5-3 1.5 3V9M10.5 15v-3m0 0v-1.5A1.5 1.5 0 0 1 12 9v0a1.5 1.5 0 0 1 1.5 1.5V12m-3 0h3m0 0v3M4.5 15V9h2.4a.6.6 0 0 1 .6.6v.9A1.5 1.5 0 0 1 6 12v0"
          strokeLinejoin="round"
        />
        <Path d="M4.5 12H6v0a1.5 1.5 0 0 1 1.5 1.5V15" strokeLinejoin="round" />
      </G>
    </Svg>
  );
};
