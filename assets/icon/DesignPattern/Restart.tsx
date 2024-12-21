import Svg, { Path, G, ClipPath, Defs, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Restart = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        clipPath="url(#a)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M6.678 20.567C2.532 18.021.76 12.758 2.718 8.144 4.876 3.06 10.746.688 15.83 2.846s7.456 8.029 5.298 13.113a9.95 9.95 0 0 1-3.962 4.608" />
        <Path d="M17 16v4.4a.6.6 0 0 0 .6.6H22M12 22.01l.01-.011" />
      </G>
      <Defs>
        <ClipPath>
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
