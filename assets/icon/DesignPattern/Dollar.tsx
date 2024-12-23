import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Dollar = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="M16.153 7.154c-.948-.949-2.618-1.608-4.153-1.65m-4.154 10.65c.892 1.19 2.551 1.868 4.153 1.926m0-12.576c-1.826-.049-3.461.778-3.461 3.034 0 4.154 7.615 2.077 7.615 6.231 0 2.37-2.026 3.387-4.153 3.31m0-12.575V3m0 15.08V21"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
