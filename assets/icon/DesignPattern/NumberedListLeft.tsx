import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const NumberedListLeft = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M9 6h11M5 8V4M6 14H4.6a.6.6 0 0 1-.6-.6v-.8a.6.6 0 0 1 .6-.6h.8a.6.6 0 0 0 .6-.6v-.8a.6.6 0 0 0-.6-.6H4M4 16h1.4a.6.6 0 0 1 .6.6v2.8a.6.6 0 0 1-.6.6H4M6 18H4M9 12h11M9 18h11" />
      </G>
    </Svg>
  );
};
