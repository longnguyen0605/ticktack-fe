import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Treadmill = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M13 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4M10.613 7.267l-3.308 4.135 4.135 4.135-2.068 4.55" />
        <Path d="m4.41 8.508 3.387-3.309 2.816 2.068 2.895 3.308h1.721M6.893 14.71l-1.241.827H2.344M3.344 21.537l15.308-2V8" />
        <Path d="M20.892 6 18.65 8 17 9.5M20.891 21.71l-2.24-2.173" />
      </G>
    </Svg>
  );
};
