import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const RssFeed = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 19c0-4.2-2.8-7-7-7M19 19c0-8.4-5.6-14-14-14M5 19.01l.01-.011" />
      </G>
    </Svg>
  );
};
