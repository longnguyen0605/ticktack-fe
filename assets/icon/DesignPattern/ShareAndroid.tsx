import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ShareAndroid = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path
          d="M18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="m15.5 6.5-7 4M8.5 13.5l7 4" />
      </G>
    </Svg>
  );
};
