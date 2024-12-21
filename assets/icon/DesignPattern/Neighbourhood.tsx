import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Neighbourhood = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M11 21H4a2 2 0 0 1-2-2v-4.54a2 2 0 0 1 .963-1.71l3.5-2.122a2 2 0 0 1 2.074 0l3.5 2.121A2 2 0 0 1 13 14.46V19a2 2 0 0 1-2 2M6.5 10V6.46a2 2 0 0 1 .963-1.71l3.5-2.122a2 2 0 0 1 2.074 0l3.5 2.121a2 2 0 0 1 .963 1.71V10M16 21h4a2 2 0 0 0 2-2v-4.54a2 2 0 0 0-.963-1.71l-3.505-2.125a2 2 0 0 0-2.065-.005l-.633.38" />
        <Path d="M9 21v-3.4a.6.6 0 0 0-.6-.6H6.6a.6.6 0 0 0-.6.6V21M18 21v-3.4a.6.6 0 0 0-.6-.6H16" />
      </G>
    </Svg>
  );
};
