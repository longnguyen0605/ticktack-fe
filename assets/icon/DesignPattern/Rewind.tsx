import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Rewind = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M21.044 5.704a.6.6 0 0 1 .956.483v11.626a.6.6 0 0 1-.956.483l-7.889-5.813a.6.6 0 0 1 0-.966zM10.044 5.704a.6.6 0 0 1 .956.483v11.626a.6.6 0 0 1-.956.483l-7.888-5.813a.6.6 0 0 1 0-.966z" />
      </G>
    </Svg>
  );
};
