import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const KDisplay = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="M13.5 9v4m0 2v-2m0 0 1.37-1.566M17 9l-2.13 2.434m0 0L17 15M9.5 9l-3 4.5H10V15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M2 18.4V5.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z" />
      </G>
    </Svg>
  );
};
