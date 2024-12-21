import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DevModePhone = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeLinecap="round" strokeWidth="1.5">
        <Path d="m12 19.01.01-.011" strokeLinejoin="round" />
        <Path d="M18 18v3.4a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6V18M18 6V2.6a.6.6 0 0 0-.6-.6H6.6a.6.6 0 0 0-.6.6V6" />
        <Path
          d="M15.5 8.5 19 12l-3.5 3.5M8.5 8.5 5 12l3.5 3.5"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
