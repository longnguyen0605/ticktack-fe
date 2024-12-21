import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Pants = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path d="M5.035 3.633a.6.6 0 0 1 .6-.633h12.73a.6.6 0 0 1 .6.633l-.933 16.8a.6.6 0 0 1-.6.567h-2.898a.6.6 0 0 1-.596-.53L12.596 9.065c-.083-.706-1.109-.706-1.192 0L10.062 20.47a.6.6 0 0 1-.596.53H6.568a.6.6 0 0 1-.6-.567z" />
        <Path d="M5 7.5h1.5a2 2 0 0 0 2-2V3M18.5 7.5h-1a2 2 0 0 1-2-2V3" />
      </G>
    </Svg>
  );
};
