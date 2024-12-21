import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const BasketballField = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path d="M12 5h9.4a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H12m0-14H2.6a.6.6 0 0 0-.6.6v12.8a.6.6 0 0 0 .6.6H12m0-14v14" />
        <Path
          d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6M2 17A5 5 0 0 0 2 7M22 17a5 5 0 0 1 0-10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
