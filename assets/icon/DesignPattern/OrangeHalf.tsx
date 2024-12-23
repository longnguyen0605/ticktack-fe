import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const OrangeHalf = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2m0 20C6.5 22 2 17.5 2 12S6.5 2 12 2m0 20V12m0-10v10m0 0 5 5.5M12 12l5-5m-5 5h7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
