import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Podcast = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M6 19a9.99 9.99 0 0 1-4-8C2 5.477 6.477 1 12 1s10 4.477 10 10a9.99 9.99 0 0 1-4 8" />
        <Path d="M6 19a9.99 9.99 0 0 1-4-8C2 5.477 6.477 1 12 1s10 4.477 10 10a9.99 9.99 0 0 1-4 8" />
        <Path d="M7.528 15a6 6 0 1 1 8.944 0" />
        <Path d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4M10.076 16.283l.815-.543a2 2 0 0 1 2.218 0l.815.543a2 2 0 0 1 .863 1.993l-.509 3.053A2 2 0 0 1 12.307 23h-.612a2 2 0 0 1-1.973-1.671l-.508-3.053a2 2 0 0 1 .863-1.993" />
      </G>
    </Svg>
  );
};
