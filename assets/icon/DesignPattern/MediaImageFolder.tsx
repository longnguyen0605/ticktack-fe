import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const MediaImageFolder = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M22 12.6v7.8a.6.6 0 0 1-.6.6h-7.8a.6.6 0 0 1-.6-.6v-7.8a.6.6 0 0 1 .6-.6h7.8a.6.6 0 0 1 .6.6M19.5 14.51l.01-.011" />
        <Path d="m13 18.2 3.5-1.2 5.5 2M2 10V3.6a.6.6 0 0 1 .6-.6h6.178a.6.6 0 0 1 .39.144l3.164 2.712a.6.6 0 0 0 .39.144H21.4a.6.6 0 0 1 .6.6V9M2 10v8.4a.6.6 0 0 0 .6.6H10m-8-9h8" />
      </G>
    </Svg>
  );
};
