import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const TransitionLeft = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path d="M22 18V6a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3Z" />
        <Path
          d="M8 3H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h2M14 12H6m0 0 3-3m-3 3 3 3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
