import { css } from '@emotion/core'
import WhaleTypes, { EmotionStyles } from '../types'
import attributeProps from '../utils/attributeProps'
import getStyleProps, { InjectedStyles } from '../utils/styleProps'
import useTheme from './useTheme'

interface Options<S> {
    props,
    styles: WhaleTypes.Styles<S> | WhaleTypes.CreateStyles<S>,
    styleProps?: { [K in keyof S]?: (keyof InjectedStyles)[] }
    mouseFocus?: boolean,
    focusDecoration?: boolean,
    theme?: WhaleTypes.Theme
}

const useComponent = <S, P>(overrideName: string, options: Options<S>, params = {}) => {
    const { props, mouseFocus, focusDecoration, styleProps } = options

    const theme = options.theme || useTheme()
    theme.breakpoints = theme.breakpoints || ['576px','768px','992px','1200px']
    const queries = theme.breakpoints.map(bp => `@media (min-width: ${bp})`)

    const { attributes, events, focus } = attributeProps(props, theme, mouseFocus, focusDecoration)

    /**
     * Memo not working here properly
     * Field hoc not updating when using memo here
     */
    const cs: WhaleTypes.ComponentStyles<S> = {} as WhaleTypes.ComponentStyles<S>

    const styles = typeof options.styles === 'function'
        ? options.styles(props, theme, params)
        : options.styles

    const themeOverrides = overrideName && theme.overrides?.[overrideName]

    Object.keys(styles).map(styleName => {
        if (typeof styles[styleName] === 'function') {
            cs[styleName] = (state) => {

                const variant = (varaints) => {
                    let variantStyles: EmotionStyles = []

                    for (const variantName of Object.keys(varaints)) {
                        const variantValue = state[variantName]

                        if (typeof variantValue === 'string') {
                            variantStyles.push(varaints[variantName][variantValue])
                        }

                        if (typeof variantValue === 'boolean' && variantValue === true) {
                            variantStyles.push(varaints[variantName])
                        }

                        if (!Object.keys(state).includes(variantName)) {
                            console.warn(
                                `Can't find value of "${variantName}" variant in "${styleName}" style. 
                                    Function has been called with:`,
                                state
                            )
                        }
                    }
                    return variantStyles
                }

                return css(
                    styles[styleName](variant),
                    themeOverrides?.[styleName]?.(variant),
                    props.styles?.[styleName]?.(variant),
                    getStyleProps(props, theme, queries, styleProps?.[styleName])
                )
            }
        } else {
            cs[styleName] = css(
                styles[styleName],
                themeOverrides?.[styleName],
                props.styles?.[styleName],
                getStyleProps(props, theme, queries, styleProps?.[styleName])
            )
        }
    })

    return { cs, attributes, events, focus }
}

export default useComponent