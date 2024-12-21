import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DCenterBox = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path fill="#131927" d="M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        <Path d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524" />
        <Path d="m20.5 16.722-8.209-4.56a.6.6 0 0 0-.582 0L3.5 16.722M3.528 7.294l8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 3v9M12 19.5V22" />
      </G>
    </Svg>
  );
};
