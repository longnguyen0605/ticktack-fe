import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const EmojiBlinkRight = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path fill="#131927" d="M8.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1" />
        <Path d="M14 9h2m6 3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10" />
        <Path d="M7.5 14.5s1.5 2 4.5 2 4.5-2 4.5-2" />
      </G>
    </Svg>
  );
};
