import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DSelectFace = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinejoin="round" strokeWidth="1.5">
        <Path
          d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524"
          strokeLinecap="round"
        />
        <Path
          d="m3.528 7.294 8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9"
          strokeLinecap="round"
        />
        <Path
          fill="#131927"
          d="m11.691 11.829-7.8-4.334A.6.6 0 0 0 3 8.02v8.627a.6.6 0 0 0 .309.525l7.8 4.333A.6.6 0 0 0 12 20.98v-8.627a.6.6 0 0 0-.309-.524Z"
        />
      </G>
    </Svg>
  );
};
