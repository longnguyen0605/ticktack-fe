import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Soap = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinecap="round" strokeWidth="1.5">
        <Path d="M7 11a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v9.4a.6.6 0 0 1-.6.6H7.6a.6.6 0 0 1-.6-.6zM7 13h10M12 7V3m0 0H9m3 0h1" />
      </G>
    </Svg>
  );
};
