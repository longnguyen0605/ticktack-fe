import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Unity = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="M4 13h9.5M4 13l4 4.5M4 13l4-4.5m5.5 4.5 5-9m-5 9 5 7m0-16-6 1m6-1L20 9.5M18.5 20l1.5-5.5M18.5 20l-6-.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
