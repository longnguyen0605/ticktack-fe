import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ClosedCaptions = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path d="M1 15V9a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6Z" />
        <Path
          d="m10.5 10-.172-.172a2.83 2.83 0 0 0-2-.828v0A2.83 2.83 0 0 0 5.5 11.828v.344A2.83 2.83 0 0 0 8.328 15v0c.75 0 1.47-.298 2-.828L10.5 14M18.5 10l-.172-.172a2.83 2.83 0 0 0-2-.828v0a2.83 2.83 0 0 0-2.828 2.828v.344A2.83 2.83 0 0 0 16.328 15v0c.75 0 1.47-.298 2-.828L18.5 14"
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
};
