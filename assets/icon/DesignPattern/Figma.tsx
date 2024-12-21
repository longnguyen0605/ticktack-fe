import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Figma = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M6 6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3M12 3h3a3 3 0 0 1 0 6h-3z" />
        <Path d="M12 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0M6 18a3 3 0 0 1 3-3h3v3a3 3 0 0 1-6 0M6 12a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3" />
      </G>
    </Svg>
  );
};
