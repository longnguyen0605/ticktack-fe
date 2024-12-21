import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DatabaseTag = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path d="M2 15V9a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6Z" />
        <Path
          d="M16.357 12c.714 0 2.143 0 2.143-2s-1.429-2-2.143-2H13.5v4m2.857 0H13.5m2.857 0c.714 0 2.143 0 2.143 2s-1.429 2-2.143 2H13.5v-4M8.357 8H5.5v8h2.857c.714 0 2.143 0 2.143-2v-4c0-2-1.429-2-2.143-2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
