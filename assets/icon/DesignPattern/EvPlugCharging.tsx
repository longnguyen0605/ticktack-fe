import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const EvPlugCharging = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinecap="round" strokeWidth="1.5">
        <Path d="M10 13.154V21M15 8.385v2.769a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2.77a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2ZM13.334 6.385V3M6.666 6.385V3" />
        <Path d="M16.667 16 15 19h4l-1.667 3" strokeLinejoin="round" />
      </G>
    </Svg>
  );
};
