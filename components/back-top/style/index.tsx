// deps-lint-skip-all
import { CSSObject } from '@ant-design/cssinjs';
import {
  resetComponent,
  genComponentStyleHook,
  GenerateStyle,
  FullToken,
  mergeToken,
} from '../../_util/theme';

/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {}

type BackTopToken = FullToken<'BackTop'> & {
  backTopBackground: string;
  backTopColor: string;
  backTopHoverBackground: string;

  durationSlow: number;
};

// ============================== Shared ==============================
const genSharedBackTopStyle: GenerateStyle<BackTopToken, CSSObject> = (token): CSSObject => {
  const { componentCls } = token;

  return {
    [componentCls]: {
      ...resetComponent(token),

      position: 'fixed',
      // FIXME
      insetInlineEnd: 100,
      // FIXME
      insetBlockEnd: 50,
      // FIX ME @zindex-back-top
      zIndex: token.zIndexPopup,
      width: 40,
      height: 40,
      cursor: 'pointer',

      '&:empty': {
        display: 'none',
      },

      [`${componentCls}-content`]: {
        width: 40,
        height: 40,
        overflow: 'hidden',
        // FIXME @back-top-color
        color: token.backTopColor,
        textAlign: 'center',
        // FIXME @back-top-bg
        backgroundColor: token.backTopBackground,
        // FIXME
        borderRadius: 20,
        transition: `all ${token.durationSlow}s`,

        '&:hover': {
          // FIX ME @back-top-hover-bg
          backgroundColor: token.backTopHoverBackground,
          transition: `all ${token.durationSlow}s`,
        },
      },

      // change to .backtop .backtop-icon
      [`${componentCls}-icon`]: {
        // FIXME
        fontSize: 24,
        // FIXME
        lineHeight: '40px',
      },
    },
  };
};

const genMediaBackTopStyle: GenerateStyle<BackTopToken> = (token): CSSObject => {
  const { componentCls } = token;

  return {
    [`@media (max-width: ${token.screenMD}px)`]: {
      [componentCls]: {
        marginInlineEnd: 60,
      },
    },

    [`@media (max-width: ${token.screenXS}px)`]: {
      [componentCls]: {
        marginInlineEnd: 20,
      },
    },
  };
};

// ============================== Export ==============================
export default genComponentStyleHook<'BackTop'>(
  'BackTop',

  token => {
    const backTopBackground = 'rgb(16, 136, 233)';
    const backTopColor = '#fff';
    const backTopHoverBackground = '#000000d9';

    const backTopToken = mergeToken<BackTopToken>(token, {
      backTopBackground,
      backTopColor,
      backTopHoverBackground,

      // FIX ME
      durationSlow: 3,
    });
    return [genSharedBackTopStyle(backTopToken), genMediaBackTopStyle(backTopToken)];
  },
);
