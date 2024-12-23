import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Fridge = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="M10 14H9M10 6H9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M5 10V2.6a.6.6 0 0 1 .6-.6h12.8a.6.6 0 0 1 .6.6V10M5 10v11.4a.6.6 0 0 0 .6.6h12.8a.6.6 0 0 0 .6-.6V10M5 10h14" />
      </G>
    </Svg>
  );
};
