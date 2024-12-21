import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AlbumCarousel = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path d="M2 19.4V4.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6v14.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z" />
        <Path
          d="M22 6v12M11 14.5V8.6a.6.6 0 0 1 .6-.6H13m-2 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
};
