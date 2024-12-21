import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const TestTube = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M6.14 19.995c2.458 1.72 4.282-.012 5.319-1.492l7.3-10.426 1.966-1.065-6.553-4.588-8.448 12.063c-1.036 1.481-2.04 3.787.417 5.508" />
        <Path d="M16.09 11.02c-2.876-.853-4.403.78-7.28-.071" />
      </G>
    </Svg>
  );
};
