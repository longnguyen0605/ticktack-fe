import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AlbumOpen = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinecap="round" strokeWidth="1.5">
        <Path
          d="M15 2.2c4.564.926 8 4.962 8 9.8s-3.436 8.873-8 9.8"
          strokeLinejoin="round"
        />
        <Path
          d="M15 9c1.141.284 2 1.519 2 3s-.859 2.716-2 3M1 2h10v20H1"
          strokeLinejoin="round"
        />
        <Path d="M4 15.5V7.6a.6.6 0 0 1 .6-.6H7m-3 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </G>
    </Svg>
  );
};
