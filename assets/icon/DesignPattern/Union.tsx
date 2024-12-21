import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Union = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M15 9h5.4a.6.6 0 0 1 .6.6v10.8a.6.6 0 0 1-.6.6H9.6a.6.6 0 0 1-.6-.6V15" />
        <Path d="M15 9V3.6a.6.6 0 0 0-.6-.6H3.6a.6.6 0 0 0-.6.6v10.8a.6.6 0 0 0 .6.6H9" />
      </G>
    </Svg>
  );
};
