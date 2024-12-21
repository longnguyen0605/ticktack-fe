import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const TwoPointsCircle = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" />
        <Path
          fill="#131927"
          d="M5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M19 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        />
        <Path d="m19 19-1.5-1.5M15.5 15.5l-1-1M12.5 12.5l-1-1M9.5 9.5l-1-1M6.5 6.5 5 5" />
      </G>
    </Svg>
  );
};
