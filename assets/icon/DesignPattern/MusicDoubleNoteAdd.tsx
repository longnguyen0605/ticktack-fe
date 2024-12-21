import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const MusicDoubleNoteAdd = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M17 6.5h3m3 0h-3m0 0v-3m0 3v3M6 16V5l8-1M15 14v-4M12 19h1a2 2 0 0 0 2-2v-3h-3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2M3 21h1a2 2 0 0 0 2-2v-3H3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2" />
      </G>
    </Svg>
  );
};
