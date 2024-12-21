import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const TruckLength = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeLinecap="round" strokeWidth="1.5">
        <Path
          d="M7 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4M17 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
        />
        <Path d="M14 14V3.6a.6.6 0 0 0-.6-.6H2.6a.6.6 0 0 0-.6.6v9.8a.6.6 0 0 0 .6.6h2.05M14 14H9.05M14 6h5.61a.6.6 0 0 1 .548.356l1.79 4.028a.6.6 0 0 1 .052.243V13.4a.6.6 0 0 1-.6.6h-1.9M14 14h1" />
        <Path
          d="M3 20h17.75M3 20l1.75 1.75M3 20l1.75-1.75m16 1.75L19 21.75M20.75 20 19 18.25"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
