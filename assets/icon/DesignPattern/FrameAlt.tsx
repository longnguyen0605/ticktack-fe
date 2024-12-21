import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const FrameAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#131927"
        d="M6 3v18M18 3v18M3 6h18"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        fill="#131927"
        d="M9.6 9h4.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6H9.6a.6.6 0 0 1-.6-.6V9.6a.6.6 0 0 1 .6-.6"
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <Path
        stroke="#131927"
        d="M3 18h18"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
