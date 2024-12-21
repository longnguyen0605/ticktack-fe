import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Forward15Seconds = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M21 13a9 9 0 1 1-9-9M12 4h7.5m0 0-2-2m2 2-2 2M9 9v7" />
        <Path d="M15 9h-2a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1h-2" />
      </G>
    </Svg>
  );
};
