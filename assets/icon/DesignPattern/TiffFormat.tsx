import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const TiffFormat = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinecap="round" strokeWidth="1.5">
        <Path d="M4 6V3.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6V6M4 18v2.4a.6.6 0 0 0 .6.6h14.8a.6.6 0 0 0 .6-.6V18" />
        <Path
          d="M12 15V9h3M17.5 15V9h3M3.5 9H5m1.5 0H5m0 0v6M12 12h2.5M17.5 12H20M9 15V9"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
