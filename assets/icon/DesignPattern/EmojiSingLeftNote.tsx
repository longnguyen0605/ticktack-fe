import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const EmojiSingLeftNote = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path fill="#131927" d="M2.8 8.1a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0" />
      <Path
        stroke="#131927"
        d="M2.8 8.1a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Zm0 0V3.6a.6.6 0 0 1 .6-.6H5"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <Path
        stroke="#131927"
        d="M8 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        stroke="#131927"
        d="M2.05 13c.501 5.053 4.765 9 9.95 9 5.523 0 10-4.477 10-10S17.523 2 12 2a10 10 0 0 0-4 .832"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        fill="#131927"
        stroke="#131927"
        d="M15.5 9a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8.5 9a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
