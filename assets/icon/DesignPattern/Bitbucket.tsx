import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Bitbucket = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m20.916 4.674-1.85 14.8a.6.6 0 0 1-.596.526H5.53a.6.6 0 0 1-.596-.526l-1.85-14.8A.6.6 0 0 1 3.68 4h16.64a.6.6 0 0 1 .596.674" />
        <Path d="m16.75 7.75-.938 7.97a.6.6 0 0 1-.595.53H8.784a.6.6 0 0 1-.596-.53l-.86-7.3a.6.6 0 0 1 .597-.67zm0 0h3.75" />
      </G>
    </Svg>
  );
};
