import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const BookmarkBook = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinecap="round" strokeWidth="1.5">
        <Path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114" />
        <Path d="M8 3v8l2.5-1.6L13 11V3" strokeLinejoin="round" />
        <Path d="M6 17h14M6 21h14" />
        <Path d="M6 21a2 2 0 1 1 0-4" strokeLinejoin="round" />
      </G>
    </Svg>
  );
};
