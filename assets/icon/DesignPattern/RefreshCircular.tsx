import Svg, { Circle, Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const RefreshCircular = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Circle cx="12" cy="12" r="10" />
        <Path
          d="M16.583 9.667C15.81 8.097 14.043 7 11.988 7 9.388 7 7.25 8.754 7 11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.494 9.722H16.4a.6.6 0 0 0 .6-.6V7.5M7.417 13.667C8.191 15.629 9.957 17 12.012 17c2.6 0 4.736-2.193 4.988-5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.506 13.622H7.6a.6.6 0 0 0-.6.6V16.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
