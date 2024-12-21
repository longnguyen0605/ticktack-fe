import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Backward15Seconds = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M3 13a9 9 0 1 0 9-9M9 9v7" />
        <Path d="M15 9h-2a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1h-2M12 4H4.5m0 0 2-2m-2 2 2 2" />
      </G>
    </Svg>
  );
};
