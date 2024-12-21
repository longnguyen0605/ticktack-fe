import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const NoSmokingCircle = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path
          d="M15 12v3M15 9c0-1-.714-2-2.143-2v0A2.857 2.857 0 0 1 10 4.143V3M18 9V4M18 12v3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M15 15H6.6a.6.6 0 0 1-.6-.6v-1.8a.6.6 0 0 1 .6-.6H12" />
        <Path
          d="m5 5 14 14M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
