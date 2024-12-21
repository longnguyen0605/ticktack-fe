import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const EmojiLookLeft = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path fill="#131927" d="M8.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1" />
        <Path d="M2.458 15A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10c-4.478 0-8.268-2.943-9.542-7m0 0H7" />
      </G>
    </Svg>
  );
};
