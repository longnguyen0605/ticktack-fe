import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ElectronicsTransistor = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="M7 16V3.6a.6.6 0 0 1 .6-.6h8.8a.6.6 0 0 1 .6.6V16M7 16h2m-2 0H5m12 0h-2m2 0h2m-7 0v6m0-6H9m3 0h3m-6 0v6m6-6v6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
