import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Arcade = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path d="M11 8.5 9.8 9l-7.448 3.386a.6.6 0 0 0-.352.546v.136a.6.6 0 0 0 .352.546l8.82 4.01a2 2 0 0 0 1.656 0l8.82-4.01a.6.6 0 0 0 .352-.546v-.136a.6.6 0 0 0-.352-.546L14.2 9 13 8.5" />
        <Path d="M22 13v4.112a.6.6 0 0 1-.354.547l-8.825 3.972a2 2 0 0 1-1.642 0l-8.825-3.972A.6.6 0 0 1 2 17.112V13" />
        <Path
          d="M12 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M11 8v5a1 1 0 1 0 2 0V8" />
        <Path d="M16 13h1" strokeLinecap="round" strokeLinejoin="round" />
      </G>
    </Svg>
  );
};
