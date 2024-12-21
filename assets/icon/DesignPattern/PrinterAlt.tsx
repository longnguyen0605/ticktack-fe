import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PrinterAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m17 13.01.01-.011M7 17h10M6 10V3.6a.6.6 0 0 1 .6-.6h10.8a.6.6 0 0 1 .6.6V10m3 10.4V14a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v6.4a.6.6 0 0 0 .6.6h16.8a.6.6 0 0 0 .6-.6" />
      </G>
    </Svg>
  );
};
