import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const TableRows = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="M3 12h18M3 12v4.5M3 12V7.5M21 12v4.5m0-4.5V7.5m-18 9v3.9a.6.6 0 0 0 .6.6h16.8a.6.6 0 0 0 .6-.6v-3.9m-18 0h18m0-9V3.6a.6.6 0 0 0-.6-.6H3.6a.6.6 0 0 0-.6.6v3.9m18 0H3"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
