import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const GifFormat = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinecap="round" strokeWidth="1.5">
        <Path d="M4 6V3.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6V6M4 18v2.4a.6.6 0 0 0 .6.6h14.8a.6.6 0 0 0 .6-.6V18" />
        <Path
          d="M15.5 15V9h3M15.5 12h2M12 15V9M8.5 9h-3v6h3v-2.4"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
