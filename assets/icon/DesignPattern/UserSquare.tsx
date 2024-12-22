import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const UserSquare = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeLinecap="round" strokeWidth="1.5">
        <Path d="M7 18v-1a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v1" />
        <Path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6" strokeLinejoin="round" />
        <Path
          d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
