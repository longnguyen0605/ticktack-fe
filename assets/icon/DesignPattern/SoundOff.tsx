import Svg, { Path, G, ClipPath, Defs, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const SoundOff = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" clipPath="url(#a)" strokeWidth="1.5">
        <Path
          d="m18 14 2-2m2-2-2 2m0 0-2-2m2 2 2 2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M2 13.857v-3.714a2 2 0 0 1 2-2h2.9a1 1 0 0 0 .55-.165l6-3.956a1 1 0 0 1 1.55.835v14.286a1 1 0 0 1-1.55.835l-6-3.956a1 1 0 0 0-.55-.165H4a2 2 0 0 1-2-2Z" />
      </G>
      <Defs>
        <ClipPath>
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
