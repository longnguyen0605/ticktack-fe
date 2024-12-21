import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Prohibition = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="M19.141 5A9.97 9.97 0 0 0 12 2C6.477 2 2 6.477 2 12a9.97 9.97 0 0 0 2.859 7M19.14 5A9.97 9.97 0 0 1 22 12c0 5.523-4.477 10-10 10a9.97 9.97 0 0 1-7.141-3M19.14 5 4.86 19"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
