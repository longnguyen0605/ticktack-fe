import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Playlist = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinecap="round" strokeWidth="1.5">
        <Path d="M2 11h14M2 17h11M2 5h18" strokeLinejoin="round" />
        <Path d="M20 18.5v-7.9a.6.6 0 0 1 .6-.6H22m-2 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </G>
    </Svg>
  );
};
