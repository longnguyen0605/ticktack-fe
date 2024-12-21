import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const VideoCamera = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#131927"
        d="M15 12v4.4a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6h10.8a.6.6 0 0 1 .6.6zm0 0 5.016-4.18a.6.6 0 0 1 .984.461v7.438a.6.6 0 0 1-.984.46z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
