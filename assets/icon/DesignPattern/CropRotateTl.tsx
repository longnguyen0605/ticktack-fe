import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const CropRotateTl = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M10 4H7a4 4 0 0 0-4 4v4" />
        <Path d="M7.5 1.5 10 4 7.5 6.5M20 17v-6a1 1 0 0 0-1-1h-6M8 10h2M20 22v-2M10 8v11a1 1 0 0 0 1 1h11" />
      </G>
    </Svg>
  );
};
