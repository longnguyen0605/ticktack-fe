import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Gas = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeLinecap="round" strokeWidth="1.5">
        <Path d="M9 8a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v13.4a.6.6 0 0 1-.6.6H9.6a.6.6 0 0 1-.6-.6zM9 11h6M12 5V2m0 0h-1m1 0h1" />
      </G>
    </Svg>
  );
};
