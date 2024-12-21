import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AlbumCarousel = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#131927"
        d="M2 19.4V4.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6v14.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z"
        strokeWidth="1.5"
      />
      <Path
        stroke="#131927"
        d="M22 6v12"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <Path fill="#131927" d="M11 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
      <Path
        stroke="#131927"
        d="M11 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 0V8.6a.6.6 0 0 1 .6-.6H13"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
