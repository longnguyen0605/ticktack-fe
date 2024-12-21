import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const EmojiSingRightNote = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path fill="#131927" d="M20.8 8.1a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0" />
      <Path
        stroke="#131927"
        d="M20.8 8.1a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Zm0 0V3.6a.6.6 0 0 1 .6-.6H23"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <Path
        stroke="#131927"
        d="M16 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        stroke="#131927"
        d="M21.95 13c-.501 5.053-4.765 9-9.95 9-5.523 0-10-4.477-10-10S6.477 2 12 2c1.422 0 2.775.297 4 .832"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        fill="#131927"
        stroke="#131927"
        d="M8.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M15.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
