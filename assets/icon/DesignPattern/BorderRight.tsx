import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const BorderRight = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m4 20 .01.01M4 16l.01.01M4 12l.01.01M4 8l.01.01M4 4l.01.01M16 4l.01.01M12 4l.01.01M12 12l.01.01M8 4l.01.01M16 20l.01.01M12 20l.01.01M8 20l.01.01M20.01 4v16" />
      </G>
    </Svg>
  );
};
