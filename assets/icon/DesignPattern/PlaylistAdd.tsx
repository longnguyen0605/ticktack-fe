import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PlaylistAdd = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M18 18h2m2 0h-2m0 0v-2m0 2v2M2 11h18M2 17h12M2 5h18" />
      </G>
    </Svg>
  );
};
