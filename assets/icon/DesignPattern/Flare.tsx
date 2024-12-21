import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Flare = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#131927"
        d="M11.456 2.665a.6.6 0 0 1 1.088 0l2.864 6.137a.6.6 0 0 0 .29.29l6.137 2.864a.6.6 0 0 1 0 1.088l-6.137 2.864a.6.6 0 0 0-.29.29l-2.864 6.137a.6.6 0 0 1-1.088 0l-2.864-6.137a.6.6 0 0 0-.29-.29l-6.137-2.864a.6.6 0 0 1 0-1.088l6.137-2.864a.6.6 0 0 0 .29-.29z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
