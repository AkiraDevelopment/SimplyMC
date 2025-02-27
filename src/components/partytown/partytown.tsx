import type {
  PartytownConfig,
//@ts-ignore
} from '@builder.io/partytown/integration';
import {
  partytownSnippet,
//@ts-ignore
} from '@builder.io/partytown/integration';

/**
 * Props for `<QwikPartytown/>`, which extends the Partytown Config.
 *
 * https://github.com/BuilderIO/partytown#config
 *
 * @public
 */
export type PartytownProps = PartytownConfig;

/**
 * @public
 * You can pass setting with props
 */
export const QwikPartytown = (props: PartytownProps) => {
  return <script dangerouslySetInnerHTML={partytownSnippet(props)} />;
};
