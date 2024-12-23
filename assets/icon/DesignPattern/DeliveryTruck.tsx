import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DeliveryTruck = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeLinecap="round" strokeWidth="1.5">
        <Path
          d="M8 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4M18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
        />
        <Path d="M10.05 17H15V6.6a.6.6 0 0 0-.6-.6H1M5.65 17H3.6a.6.6 0 0 1-.6-.6v-4.9" />
        <Path d="M2 9h4" strokeLinejoin="round" />
        <Path d="M15 9h5.61a.6.6 0 0 1 .548.356l1.79 4.028a.6.6 0 0 1 .052.243V16.4a.6.6 0 0 1-.6.6h-1.9M15 17h1" />
      </G>
    </Svg>
  );
};
