import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Potion = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="M10 4h4v2.568c0 .258.17.487.412.579C22.936 10.37 20.906 22 15 22H9c-5.907 0-7.937-11.63.587-14.853a.63.63 0 0 0 .413-.58z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M6 10h12" />
        <Path d="M9 2h6" strokeLinecap="round" />
        <Path
          d="M11.667 13 10 16h4l-1.667 3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
