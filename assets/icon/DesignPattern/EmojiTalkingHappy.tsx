import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const EmojiTalkingHappy = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="M10 9H8m8 0h-2M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12m12 1h-4v3c0 .667.4 2 2 2s2-1.333 2-2z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
