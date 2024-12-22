import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Internet = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13 2.05S16 6 16 12M11 21.95S8 18 8 12s3-9.95 3-9.95M2.629 15.5h9.37M2.629 8.5h18.74"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M21.88 17.917c.493.304.463 1.043-.046 1.101l-2.567.291-1.15 2.312c-.229.459-.934.234-1.05-.334l-1.256-6.116c-.098-.48.333-.782.75-.525z"
          clipRule="evenodd"
        />
      </G>
    </Svg>
  );
};
