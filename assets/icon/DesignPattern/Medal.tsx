import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Medal = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="M14.272 10.445 18 2m-8.684 8.632L5 2m7.762 8.048L8.835 2m5.525 0-1.04 2.5M6 16a6 6 0 1 0 12 0 6 6 0 0 0-12 0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
