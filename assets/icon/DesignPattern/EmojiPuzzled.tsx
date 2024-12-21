import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const EmojiPuzzled = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2" />
        <Path d="M11.5 15.5s1.5-2 4.5-2 4.5 2 4.5 2M3 4c0-2.754 4-2.754 4 0 0 1.967-2 1.64-2 4M5 11.01l.01-.011" />
        <Path
          fill="#131927"
          d="M17.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M10.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"
        />
      </G>
    </Svg>
  );
};
