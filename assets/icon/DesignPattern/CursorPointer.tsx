import Svg, { Path, G, ClipPath, Defs, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const CursorPointer = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G clipPath="url(#a)">
        <Path
          stroke={props.stroke?props.stroke:"#131927"}
          d="M19.503 9.97c1.204.489 1.112 2.224-.137 2.583l-6.305 1.813-2.88 5.895c-.571 1.168-2.296.957-2.569-.314L4.677 6.257A1.369 1.369 0 0 1 6.53 4.7z"
          clipRule="evenodd"
          strokeWidth="1.5"
        />
      </G>
      <Defs>
        <ClipPath>
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
