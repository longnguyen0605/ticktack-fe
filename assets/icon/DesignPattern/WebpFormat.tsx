import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const WebpFormat = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeLinecap="round" strokeWidth="1.5">
        <Path d="M4 6V3.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6V6M4 18v2.4a.6.6 0 0 0 .6.6h14.8a.6.6 0 0 0 .6-.6V18" />
        <Path
          d="M13.5 15V9h2.4a.6.6 0 0 1 .6.6v.9A1.5 1.5 0 0 1 15 12v0"
          strokeLinejoin="round"
        />
        <Path
          d="M13.5 15h2.4a.6.6 0 0 0 .6-.6v-.9A1.5 1.5 0 0 0 15 12v0h-1.5M19.5 15v-3m0 0V9h3v3zM1.5 9v6L3 12l1.5 3V9M10.5 9h-3v6h3M7.5 12h2"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
