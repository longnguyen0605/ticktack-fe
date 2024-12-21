import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const TransitionRight = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path d="M2 18V6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z" />
        <Path
          d="M16 3h2a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-2M10 12h8m0 0-3-3m3 3-3 3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
