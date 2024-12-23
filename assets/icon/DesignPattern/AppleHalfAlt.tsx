import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AppleHalfAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path d="m12.147 21.265-.147-.03-.147.03c-2.377.475-4.62.21-6.26-1.1C3.964 18.86 2.75 16.374 2.75 12c0-4.473 1.008-6.29 2.335-6.954.695-.347 1.593-.448 2.735-.317 1.141.132 2.458.488 3.943.983l.26.086.255-.102c2.482-.992 4.713-1.373 6.28-.641 1.47.685 2.692 2.538 2.692 6.945 0 4.374-1.213 6.86-2.843 8.164-1.64 1.312-3.883 1.576-6.26 1.1Z" />
        <Path
          d="M12 5.5C12 3 11 2 9 2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M12 6v15" />
        <Path d="M9 12v2" strokeLinecap="round" strokeLinejoin="round" />
      </G>
    </Svg>
  );
};
