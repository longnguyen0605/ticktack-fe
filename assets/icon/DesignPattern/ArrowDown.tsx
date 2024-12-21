import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ArrowDown = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="M12.25 5.5V18m0 0-6-6m6 6 6-6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
