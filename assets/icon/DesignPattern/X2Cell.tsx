import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const X2Cell = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path d="M21 3.6V12h-9V3h8.4a.6.6 0 0 1 .6.6ZM21 20.4V12h-9v9h8.4a.6.6 0 0 0 .6-.6ZM3 12V3.6a.6.6 0 0 1 .6-.6H12v9zM3 12v8.4a.6.6 0 0 0 .6.6H12v-9z" />
      </G>
    </Svg>
  );
};
