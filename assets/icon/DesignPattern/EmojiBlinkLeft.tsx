import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const EmojiBlinkLeft = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M10 9H8m-6 3c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12" />
        <Path d="M16.5 14.5s-1.5 2-4.5 2-4.5-2-4.5-2" />
        <Path fill="#131927" d="M15.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1" />
      </G>
    </Svg>
  );
};
