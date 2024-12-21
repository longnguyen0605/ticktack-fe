import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const EmojiLookDown = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path
          fill="#131927"
          d="M8.5 14a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M15.5 14a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"
        />
        <Path d="M10 18h4m8-6c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10" />
      </G>
    </Svg>
  );
};