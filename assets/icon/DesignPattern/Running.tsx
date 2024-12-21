import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Running = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M15 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M12.613 8.267l-3.308 4.135 4.135 4.135-2.068 4.55" />
        <Path d="m6.41 9.508 3.387-3.309 2.816 2.068 2.895 3.308h3.721M8.893 15.71l-1.241.827H4.344" />
      </G>
    </Svg>
  );
};
