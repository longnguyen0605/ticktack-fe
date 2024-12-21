import Svg, { Circle, Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Navigator = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Circle cx="12" cy="12" r="10" />
        <Path
          d="M17.873 15.475c.46.87-.437 1.831-1.336 1.432l-4.538-2.017-4.537 2.017c-.9.4-1.797-.562-1.337-1.432l4.959-9.365a1.036 1.036 0 0 1 1.831 0z"
          clipRule="evenodd"
        />
      </G>
    </Svg>
  );
};
