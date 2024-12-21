import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AdobeAfterEffects = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M21 7v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4" />
        <Path d="M14 13v-1a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v1zm0 0v1a2 2 0 0 0 2 2h1.5M6 16l1.125-3M12 16l-1.125-3m-3.75 0L9 8l1.875 5m-3.75 0h3.75" />
      </G>
    </Svg>
  );
};
