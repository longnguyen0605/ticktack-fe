import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PhoneDisabled = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m8.78 8.5.49-2.63L7.814 2h-3.75c-1.128 0-2.016.93-1.848 2.046.288 1.902.957 4.861 2.51 7.7M10.94 13.5c.837.744 1.847 1.392 3.059 2l4.118-.798L22 16.182v3.584c0 1.192-1.032 2.1-2.197 1.847-2.83-.616-7.83-2.107-11.58-5.432M21 3 3 21" />
      </G>
    </Svg>
  );
};
