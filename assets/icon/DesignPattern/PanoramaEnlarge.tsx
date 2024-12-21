import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PanoramaEnlarge = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#131927"
        d="M12 5c2.995 0 7.235.692 8.576.925a.58.58 0 0 1 .48.503c.13 1.028.444 3.691.444 5.572 0 1.88-.313 4.544-.444 5.572a.58.58 0 0 1-.48.503c-1.34.233-5.58.925-8.576.925-2.995 0-7.235-.692-8.576-.925a.58.58 0 0 1-.48-.503C2.814 16.544 2.5 13.881 2.5 12c0-1.88.313-4.544.444-5.572a.58.58 0 0 1 .48-.503C4.764 5.692 9.004 5 12 5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
