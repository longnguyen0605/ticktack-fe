import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Microscope = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M19 22H7m-2 0h2m0 0v-3M19 16h-9M16 2h-4M12 7c-3 0-5 1-5 4v2M16 4.6v6.8a.6.6 0 0 1-.6.6h-2.8a.6.6 0 0 1-.6-.6V4.6a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6" />
        <Path d="M7 19a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
      </G>
    </Svg>
  );
};
