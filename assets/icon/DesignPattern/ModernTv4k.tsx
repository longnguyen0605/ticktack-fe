import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ModernTv4k = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="M7 21h10M13.5 7v4m0 2v-2m0 0 1.37-1.566M17 7l-2.13 2.434m0 0L17 13M9.5 7l-3 4.5H10V13"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M2 16.4V3.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z" />
      </G>
    </Svg>
  );
};
