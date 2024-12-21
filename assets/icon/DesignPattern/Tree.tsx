import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Tree = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 22v-8m0-4v4m0 0 4-2M17 7A5 5 0 0 0 7 7M12 18H7.5a5.5 5.5 0 1 1 0-11H9M12 18h4.5A5.5 5.5 0 0 0 17 7.022" />
      </G>
    </Svg>
  );
};
