import { Interpolation, SerializedStyles } from '@emotion/react'
import QIXColor from 'color'
import CSS from 'csstype'
import React from 'react'

declare global {
    namespace System {
        interface Palette<Color> {
            [key: string]: Color
        }
        interface Overrides {
        }
    }
}

export type EmotionStyles = Interpolation<SerializedStyles>
export type Breakpointify<T> = T[] | T

declare namespace SystemTypes {

    type Size = 'xs' | 's' | 'm' | 'l' | 'xl'
    /**
     * @display SystemTypes.Color
     * @link /props#color
     */
    type ColorProp =
        ((colors: Theme['color']) => QIXColor | string)
        | keyof Omit<Theme['color'], 'palette'>
        | keyof Theme['color']['palette']
        | QIXColor
        | (string & { T?: string })

    type Styles<StyleDefinitions> = {
        [StyleName in keyof StyleDefinitions]: StyleDefinitions[StyleName] extends Object
        ? ((variant: Variant<StyleDefinitions[StyleName]>) => EmotionStyles)
        : EmotionStyles
    }

    type ComponentStyles<StyleDefinitions> = {
        [StyleName in keyof StyleDefinitions]: StyleDefinitions[StyleName] extends Object
        ? (state: StyleDefinitions[StyleName]) => SerializedStyles
        : SerializedStyles
    }

    type Variant<StyleDefinitions> = (variants: Partial<{
        [StyleName in keyof StyleDefinitions]: Partial<
            Record<Extract<StyleDefinitions[StyleName], string>, EmotionStyles>
        >
    }>) => EmotionStyles

    type CreateStyles<Overrides, Props = {}, Params = {}> = (
        props: Props,
        theme: Theme,
        params?: Params
    ) => Styles<Overrides>

    interface Theme extends ThemeVariables {
        assets: ThemeAssets
        overrides?: Partial<{ [Component in keyof System.Overrides]: Styles<System.Overrides[Component]> }>
        replace: (theme: ReplaceTheme) => Theme
    }

    interface SourceTheme {
        main: Omit<ThemeVariables<[number, number, number, number?]>, 'breakpoints' | 'color'> & {
            color: Omit<ThemeVariables<[number, number, number, number?]>['color'], 'palette'> & {
                palette?: System.Palette<[number, number, number, number?]>
            }
            breakpoints?: string[]
        }
        assets: (main: ThemeVariables) => ThemeAssets
        overrides?: (main: ThemeVariables, assets: ThemeAssets) =>
            Partial<{ [Component in keyof System.Overrides]: Styles<System.Overrides[Component]> }>
    }

    interface ReplaceTheme {
        main: DeepPartial<ThemeVariables<[number, number, number, number?]>>
        assets?: (main: ThemeVariables) => DeepPartial<ThemeAssets>
        overrides?: (main: ThemeVariables, assets: ThemeAssets) =>
            Partial<{ [Component in keyof System.Overrides]: Styles<System.Overrides[Component]> }>
    }

    interface ThemeVariables<Color = QIXColor<[number, number, number, number?]>> {
        name: string
        color: {
            background: Color
            backgroundVariant: Color
            surface: Color
            surfaceVariant: Color
            primary: Color
            secondary: Color

            onBackground: Color
            onSurface: Color
            onPrimary: Color
            onSecondary: Color

            lightest: Color
            light: Color
            hard: Color
            hardest: Color

            error: Color
            warning: Color
            success: Color
            info: Color

            palette: System.Palette<Color>
        }
        breakpoints: string[],
        radius: Record<Size, string>
        spacing: Record<Size, string>
    }

    interface ThemeAssets {
        global?: EmotionStyles
        border: {
            width: string
            style: string
            color: string
        }
        shadow: {
            default: string
            short: string
            long: string
        }
        focus: EmotionStyles
        field: Record<Size, {
            minHeight: string
            padding: string
        }>
        typography: {
            header: Record<Size, {
                fontSize: string
                lineHeight: string | number
            }>
            text: Record<Size, {
                fontSize: string
                lineHeight: string | number
            }>
            paragraph: Record<Size, {
                fontSize: string
                lineHeight: string | number
            }>
        }
    }

    /**
     * All typical component props
     * @name All
     */
    interface AllProps<Container, Styles> extends
        AttributeProps,
        AllEventProps<Container>,
        CoreProps<Styles>,
        ColorProps,
        BorderProps,
        PaddingProps,
        LayoutProps,
        MarginProps,
        FlexProps,
        GridProps { }

    /**
     * DOM events
     * @name Event
     */
    interface AllEventProps<T> extends
        FormEventProps<T>,
        FocusEventProps<T>,
        ImageEventProps<T>,
        MediaEventProps<T>,
        MouseEventProps<T>,
        TouchEventProps<T>,
        WheelEventProps<T>,
        PointerEventProps<T>,
        KeyboardEventProps<T>,
        SelectionEventProps<T>,
        AnimationEventProps<T>,
        ClipboardEventProps<T>,
        TransitionEventProps<T>,
        CompositionEventProps<T>,
        ScrollEventProps<T> { }

    /**
     * Component core props
     * @name Core
     */
    interface CoreProps<S = {}> {
        /**
         * Override any component style
         * @display SystemTypes.Styles
         * @link /props#styles
         */
        styles?: Partial<Styles<S>>
    }

    /**
     * Component attribute props
     * @name Attributes
     */
    interface AttributeProps extends React.AriaAttributes {
        /**
         * Set class atrribute on component's container 
         */
        className?: string
        /**
         * Set id atrribute on component's container 
         */
        id?: string
        /**
         * Set style atrribute on component's container
         */
        style?: React.CSSProperties
        /**
         * Set tab-index atrribute on component's container 
         */
        tabIndex?: number
        /**
         * Set role atrribute on component's container 
         */
        role?: string
        /**
         * Set draggable atrribute on component's container 
         */
        draggable?: boolean
        /**
         * Set any atrributes on component's container 
         */
        attrs?: Object
    }
    /**
     * Component color styles props
     * @name Color
     */
    interface ColorProps {
        /**
         * Set color style
         * @display SystemTypes.Color
         * @link /props#color
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/color
         */
        textColor?: Breakpointify<ColorProp>
        /**
         * Set background-color style
         * @display SystemTypes.Color
         * @link /props#color
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/background-color
         */
        backgroundColor?: Breakpointify<ColorProp>
    }

    /**
     * Component border styles props
     * @name Border
     */
    interface BorderProps {
        /**
         * Set border-width style
         * @display number | string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/border-width
         */
        borderWidth?: Breakpointify<CSS.Properties['borderWidth']>
        /**
         * Set border-style style
         * @breakpointify
         * @display dashed | dotted | double | groove | hidden | inset | none | outset | ridge | solid
         * @see https://developer.mozilla.org/docs/Web/CSS/border-style
         */
        borderStyle?: Breakpointify<CSS.Properties['borderStyle']>
        /**
         * Set border-color style
         * @display SystemTypes.Color
         * @link /props#color
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/border-color
         */
        borderColor?: Breakpointify<ColorProp>
        /**
         * Set border-radius style  
         * @display number | string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
         */
        borderRadius?: Breakpointify<CSS.Properties['borderRadius']>
    }

    /**
     * Component layout styles props
     * @name Layout
     */
    interface LayoutProps {
        /**
         * Set width style
         * @display number | string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/width
         */
        w?: Breakpointify<CSS.Properties['width']>
        /**
         * Set height style
         * @display number | string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/visibility
         */
        h?: Breakpointify<CSS.Properties['height']>
        /**
         * Specifies the type of positioning method used for an element 
         * (static, relative, fixed, absolute or sticky).
         * @display static | relative | fixed | absolute | sticky
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/position
         */
        position?: Breakpointify<CSS.Properties['position']>
        /**
         * Shows or hides an element without changing the layout 
         * of a document.
         * @display visible | hidden | collapse
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/visibility
         */
        visibility?: Breakpointify<CSS.Properties['visibility']>
        /**
         * Sets whether an element is treated as a block or 
         * inline element and the layout used for its children, 
         * such as flow layout, grid or flex.
         * @display block | inline | inline-block | inline-table | list-item | none | run-in | table | table-caption | table-cell | table-column-group | table-column | table-footer-group | table-header-group | table-row | table-row-group | flex | grid
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/display
         */
        display?: Breakpointify<CSS.Properties['display']>
        /**
         * Set font-size style
         * @display number | string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/font-size
         */
        fontSize?: Breakpointify<CSS.Properties['fontSize']>
        /**
         * Set line-height style
         * @display number | string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/line-height
         */
        lineHeight?: Breakpointify<CSS.Properties['lineHeight']>
        /**
         * Set letter-spacing style
         * @display number | string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
         */
        letterSpacing?: Breakpointify<CSS.Properties['letterSpacing']>
        /**
         * Set text-align style
         * @display number | string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/text-align
         */
        textAlign?: Breakpointify<CSS.Properties['textAlign']>
    }

    /**
     * Component padding styles props
     * @name Padding
     */
    interface PaddingProps {
        /**
         * Set padding style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        p?: Breakpointify<Size | (string & { T?: string }) | number>
        /**
         * Set horizontal padding style 
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        px?: Breakpointify<Size | (string & { T?: string }) | number>
        /**
         * Set vertical padding style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        py?: Breakpointify<Size | (string & { T?: string }) | number>
        /**
         * Set right padding style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        pr?: Breakpointify<Size | (string & { T?: string }) | number>
        /**
         * Set left padding style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        pl?: Breakpointify<Size | (string & { T?: string }) | number>
        /**
         * Set top padding style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        pt?: Breakpointify<Size | (string & { T?: string }) | number>
        /**
         * Set bottom padding style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        pb?: Breakpointify<Size | (string & { T?: string }) | number>
    }

    /**
     * Component margin styles props
     * @name Margin
     */
    interface MarginProps {
        /**
         * Set margin style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        m?: Breakpointify<Size | (string & { T?: string }) | number>
        /**
         * Set horizontal margin style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        mx?: Breakpointify<Size | (string & { T?: string }) | number>
        /**
         * Set vertical margin style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        my?: Breakpointify<Size | (string & { T?: string }) | number>
        /**
         * Set right margin style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        mr?: Breakpointify<Size | (string & { T?: string }) | number>
        /**
         * Set left margin style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        ml?: Breakpointify<Size | (string & { T?: string }) | number>
        /**
         * Set top margin style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        mt?: Breakpointify<Size | (string & { T?: string }) | number>
        /**
         * Set bottom margin style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        mb?: Breakpointify<Size | (string & { T?: string }) | number>
    }

    /**
     * Used for flex attributes
     * CSS props have string witch kills helps at ide
     */
    type FlexSpace = 'space-around' | 'space-between' | 'space-evenly'
    type FlexSelf = 'inherit' | 'auto' | 'baseline' | 'center' | 'flex-start' | 'flex-end' | 'stretch'
    type FlexDirection = 'inherit' | 'initial' | 'revert' | 'unset' | 'column' | 'column-reverse' | 'row' | 'row-reverse'
    type FlexWrap = 'inherit' | 'initial' | 'revert' | 'unset' | 'nowrap' | 'wrap' | 'wrap-reverse'
    /**
     * Used for grid attributes
     * CSS props have string witch kills helps at ide
     */
    type GridSpace = 'space-around' | 'space-between' | 'space-evenly'
    type GridSelf = 'inherit' | 'auto' | 'baseline' | 'center' | 'start' | 'end' | 'stretch'

    /**
     * Component flexbox children styles props
     * @name Flex
     */
    interface FlexProps {
        /**
         * Sets how a flex item will grow or shrink to fit the 
         * space available in its flex container.
         * @display number
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/flex
         */
        flex?: Breakpointify<CSS.Properties['flex']>
        /**
         * Sets the initial main size of a flex item. It sets the 
         * size of the content box unless otherwise set with box-sizing.
         * @display number | string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
         */
        flexBasis?: Breakpointify<CSS.Properties['flexBasis']>
        /**
         * Sets the flex grow factor of a flex item main size. 
         * It specifies how much of the remaining space in the 
         * flex container should be assigned to the item 
         * (the flex grow factor).
         * @display number
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
         */
        flexGrow?: Breakpointify<CSS.Properties['flexGrow']>
        /**
         * Sets the flex shrink factor of a flex item. 
         * If the size of all flex items is lr than 
         * the flex container, items shrink to fit 
         * according to flex-shrink.
         * @display number
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
         */
        flexShrink?: Breakpointify<CSS.Properties['flexShrink']>
        /**
         * Property overrides a grid or flex item's 
         * align-items value. In Grid, it aligns the 
         * item inside the grid area. In Flexbox, 
         * it aligns the item on the cross axis.
         * @display inherit | auto | baseline | center | flex-start | flex-end | stretch
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/align-self
         */
        alignSelf?: Breakpointify<FlexSelf>
        /**
         * Sets the way a box is justified inside its 
         * alignment container along the appropriate axis.
         * @display inherit | auto | baseline | center | flex-start | flex-end | stretch
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/justify-self
         */
        justifySelf?: Breakpointify<FlexSelf>
    }

    interface GridContainerProps {
        /**
         * @display string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
         */
        templateColumns?: Breakpointify<CSS.Properties['gridTemplateColumns']>
        /**
         * @display string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
         */
        templateRows?: Breakpointify<CSS.Properties['gridTemplateRows']>
        /**
         * @display string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
         */
        templateAreas?: Breakpointify<CSS.Properties['gridTemplateAreas']>
        /**
         * @display string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-gap
         */
        columnGap?: Breakpointify<CSS.Properties['gridColumnGap']>
        /**
         * @display string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-gap
         */
        rowGap?: Breakpointify<CSS.Properties['gridRowGap']>
        /**
         * @display string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/grid-gap
         */
        gap?: Breakpointify<CSS.Properties['gridGap']>
        /**
         * @display string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
         */
        autoColumns?: Breakpointify<CSS.Properties['gridAutoColumns']>
        /**
         * @display string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
         */
        autoRows?: Breakpointify<CSS.Properties['gridAutoRows']>
        /**
         * @display string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
         */
        autoFlow?: Breakpointify<CSS.Properties['gridAutoFlow']>
        /**
         * @display string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/align-items
         */
        alignItems?: Breakpointify<GridSelf>
        /**
         * @display inherit|auto|baseline|center|start|end|stretch|space-around|space-between|space-evenly
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/align-content
         */
        alignContent?: Breakpointify<GridSpace | GridSelf>
        /**
         * @display inherit|auto|baseline|center|start|end|stretch|space-around|space-between|space-evenly
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
         */
        justifyContent?: Breakpointify<GridSpace | GridSelf>
        /**
         * @display inherit|auto|baseline|center|start|end|stretch|space-around|space-between|space-evenly
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
         */
        justifyItems?: Breakpointify<GridSpace | GridSelf>
        inline?: Breakpointify<boolean>
    }

    interface FlexboxContainerProps {
        /**
         * Sets the align-self value on all direct children as a group. 
         * In Flexbox, it controls the alignment of items on the Cross Axis
         * @breakpointify
         * @display inherit|auto|baseline|center|flex-start|flex-end|stretch
         * @see https://developer.mozilla.org/docs/Web/CSS/align-items
         */
        alignItems?: Breakpointify<FlexSelf>
        /**
         * Sets the distribution of space between and around content 
         * items along a flexbox's cross-axis or a grid's block axis
         * @breakpointify
         * @display inherit|auto|baseline|center|flex-start|flex-end|stretch|space-around|space-between|space-evenly
         * @see https://developer.mozilla.org/docs/Web/CSS/align-content
         */
        alignContent?: Breakpointify<FlexSelf | FlexSpace>
        /**
         * The place-content CSS property is a shorthand for 
         * align-content and justify-content
         * @breakpointify
         * @display inherit|auto|baseline|center|flex-start|flex-end|stretch|space-around|space-between|space-evenly
         * @see https://developer.mozilla.org/docs/Web/CSS/place-content
         */
        placeContent?: Breakpointify<FlexSelf | FlexSpace>
        /**
         * Defines how the browser distributes space between and around 
         * content items along the main-axis of a flex container, and 
         * the inline axis of a grid container.
         * @breakpointify
         * @display inherit|auto|baseline|center|flex-start|flex-end|stretch|space-around|space-between|space-evenly
         * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
         */
        justifyContent?: Breakpointify<FlexSelf | FlexSpace>
        /**
         * Defines the default justify-self for all items of the box, giving them all 
         * a default way of justifying each box along the appropriate axis
         * @breakpointify
         * @display inherit|auto|baseline|center|flex-start|flex-end|stretch|space-around|space-between|space-evenly
         * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
         */
        justifyItems?: Breakpointify<FlexSelf | FlexSpace>
        /**
         * Sets how flex items are placed in the flex container defining the 
         * main axis and the direction (normal or reversed)
         * @breakpointify
         * @display inherit | initial | revert | unset | column | column-reverse | row | row-reverse
         * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
         */
        direction?: Breakpointify<FlexDirection>
        /**
         * Sets flex-direction style to column
         * @display boolean
         * @breakpointify
         */
        column?: Breakpointify<boolean>
        /**
         * Sets display style to inline-flex
         * @display boolean
         * @breakpointify
         */
        inline?: Breakpointify<boolean>
        /**
         * Sets whether flex items are forced onto one line or can wrap onto multiple lines
         * @display inherit | initial | revert | unset | nowrap | wrap | wrap-reverse
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
         */
        wrap?: Breakpointify<FlexWrap>
        /**
         * Shorthand property for flex-direction and flex-wrap styles
         * @display column | column-reverse | nowrap | row | row-reverse | wrap | wrap-reverse
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/flex-flow
         */
        flow?: Breakpointify<CSS.Properties['flexFlow']>
    }

    /**
     * Component grid children styles props
     * @name Grid
     */
    interface GridProps {
        /**
         * Specifies a grid item’s start position within 
         * the grid column by contributing a line, a span, 
         * or nothing (automatic) to its grid placement. 
         * This start position defines the block-start edge 
         * of the grid area.
         * @display string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-start
         */
        gridColumnStart?: Breakpointify<CSS.Properties['gridColumnStart']>
        /**
         * Specifies a grid item’s end position within the 
         * grid column by contributing a line, a span, or 
         * nothing (automatic) to its grid placement, thereby 
         * specifying the block-end edge of its grid area.
         * @display string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-end
         */
        gridColumnEnd?: Breakpointify<CSS.Properties['gridColumnEnd']>
        /**
         * Specifies a grid item’s start position within the 
         * grid row by contributing a line, a span, or nothing 
         * (automatic) to its grid placement, thereby specifying 
         * the inline-start edge of its grid area.
         * @display string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-start
         */
        gridRowStart?: Breakpointify<CSS.Properties['gridRowStart']>
        /**
         * Specifies a grid item’s end position within the grid 
         * row by contributing a line, a span, or nothing 
         * (automatic) to its grid placement, thereby 
         * specifying the inline-end edge of its grid area.
         * @display string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-end
         */
        gridRowEnd?: Breakpointify<CSS.Properties['gridRowEnd']>
        /**
         * Shorthand property for grid-column-start and 
         * grid-column-end specifying a grid item's size 
         * and location within the grid column by contributing 
         * a line, a span, or nothing (automatic) to its grid 
         * placement, thereby specifying the inline-start and 
         * inline-end edge of its grid area.
         * @display string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/grid-column
         */
        gridColumn?: Breakpointify<CSS.Properties['gridColumn']>
        /**
         * Shorthand property for grid-row-start and grid-row-end 
         * specifying a grid item’s size and location within the 
         * grid row by contributing a line, a span, or nothing 
         * (automatic) to its grid placement, thereby specifying 
         * the inline-start and inline-end edge of its grid area.
         * @display string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/grid-row
         */
        gridRow?: Breakpointify<CSS.Properties['gridRow']>
        /**
         * Shorthand property for grid-row-start, grid-column-start, 
         * grid-row-end and grid-column-end, specifying a grid item’s 
         * size and location within the grid by contributing a line, a 
         * span, or nothing (automatic) to its grid placement, thereby 
         * specifying the edges of its grid area.
         * @display string
         * @breakpointify
         * @see https://developer.mozilla.org/docs/Web/CSS/grid-area
         */
        gridArea?: Breakpointify<CSS.Properties['gridArea']>
        /**
         * Shorthand property sets both the align-self and justify-self 
         * properties. The first value is the align-self property value, 
         * the second the justify-self one. If the second value is not 
         * present, the first value is also used for it.
         * @display inherit | stretch | center | flex-end | flex-start | baseline | auto
         * @breakpointify
         */
        placeSelf?: Breakpointify<FlexSelf>
    }

    /**
     * Clipboard Events
     * @name ClipboardEvents
     */
    interface ClipboardEventProps<T> {
        /**
         * @display function
         */
        onCopy?: React.ClipboardEventHandler<T>
        /**
         * @display function
         */
        onCopyCapture?: React.ClipboardEventHandler<T>
        /**
         * @display function
         */
        onCut?: React.ClipboardEventHandler<T>
        /**
         * @display function
         */
        onCutCapture?: React.ClipboardEventHandler<T>
        /**
         * @display function
         */
        onPaste?: React.ClipboardEventHandler<T>
        /**
         * @display function
         */
        onPasteCapture?: React.ClipboardEventHandler<T>
    }

    /**
     * Composition events
     * @name CompositionEvents
     */
    interface CompositionEventProps<T> {
        /**
         * @display function
         */
        onCompositionEnd?: React.CompositionEventHandler<T>
        /**
         * @display function
         */
        onCompositionEndCapture?: React.CompositionEventHandler<T>
        /**
         * @display function
         */
        onCompositionStart?: React.CompositionEventHandler<T>
        /**
         * @display function
         */
        onCompositionStartCapture?: React.CompositionEventHandler<T>
        /**
         * @display function
         */
        onCompositionUpdate?: React.CompositionEventHandler<T>
        /**
         * @display function
         */
        onCompositionUpdateCapture?: React.CompositionEventHandler<T>
    }

    /**
     * Focus events
     * @name FocusEvents
     */
    interface FocusEventProps<T> {
        /**
         * @display function
         */
        onFocus?: React.FocusEventHandler<T>
        /**
         * @display function
         */
        onFocusCapture?: React.FocusEventHandler<T>
        /**
         * @display function
         */
        onBlur?: React.FocusEventHandler<T>
        /**
         * @display function
         */
        onBlurCapture?: React.FocusEventHandler<T>
    }

    /**
     * Form events
     * @name FormEvents
     */
    interface FormEventProps<T> {
        /**
         * @display function
         */
        onChange?: React.FormEventHandler<T>
        /**
         * @display function
         */
        onChangeCapture?: React.FormEventHandler<T>
        /**
         * @display function
         */
        onBeforeInput?: React.FormEventHandler<T>
        /**
         * @display function
         */
        onBeforeInputCapture?: React.FormEventHandler<T>
        /**
         * @display function
         */
        onInput?: React.FormEventHandler<T>
        /**
         * @display function
         */
        onInputCapture?: React.FormEventHandler<T>
        /**
         * @display function
         */
        onReset?: React.FormEventHandler<T>
        /**
         * @display function
         */
        onResetCapture?: React.FormEventHandler<T>
        /**
         * @display function
         */
        onSubmit?: React.FormEventHandler<T>
        /**
         * @display function
         */
        onSubmitCapture?: React.FormEventHandler<T>
        /**
         * @display function
         */
        onInvalid?: React.FormEventHandler<T>
        /**
         * @display function
         */
        onInvalidCapture?: React.FormEventHandler<T>
    }

    /**
     * Image events
     * @name ImageEvents
     */
    interface ImageEventProps<T> {
        /**
         * @display function
         */
        onLoad?: React.ReactEventHandler<T>
        /**
         * @display function
         */
        onLoadCapture?: React.ReactEventHandler<T>
        /**
         * @display function
         */
        onError?: React.ReactEventHandler<T>
        /**
         * @display function
         */
        onErrorCapture?: React.ReactEventHandler<T>
    }

    /**
     * Keyboard events
     * @name KeyboardEvents
     */
    interface KeyboardEventProps<T> {
        /**
         * @display function
         */
        onKeyDown?: React.KeyboardEventHandler<T>
        /**
         * @display function
         */
        onKeyDownCapture?: React.KeyboardEventHandler<T>
        /**
         * @display function
         */
        onKeyPress?: React.KeyboardEventHandler<T>
        /**
         * @display function
         */
        onKeyPressCapture?: React.KeyboardEventHandler<T>
        /**
         * @display function
         */
        onKeyUp?: React.KeyboardEventHandler<T>
        /**
         * @display function
         */
        onKeyUpCapture?: React.KeyboardEventHandler<T>
        /**
         * @display function
         */
        onEnter?: React.KeyboardEventHandler<T>
        /**
         * @display function
         */
        onEsc?: React.KeyboardEventHandler<T>
    }

    /**
     * Media events
     * @name MediaEvents
     */
    interface MediaEventProps<T> {
        /**
         * @display function
         */
        onAbort?: React.ReactEventHandler<T>
        /**
         * @display function
         */
        onAbortCapture?: React.ReactEventHandler<T>
        /**
         * @display function
         */
        onCanPlay?: React.ReactEventHandler<T>
        /**
         * @display function
         */
        onCanPlayCapture?: React.ReactEventHandler<T>
        /**
         * @display function
         */
        onCanPlayThrough?: React.ReactEventHandler<T>
        /**
         * @display function
         */
        onCanPlayThroughCapture?: React.ReactEventHandler<T>
        /**
         * @display function
         */
        onDurationChange?: React.ReactEventHandler<T>
        /**
         * @display function
         */
        onDurationChangeCapture?: React.ReactEventHandler<T>
        /**
         * @display function
         */
        onEmptied?: React.ReactEventHandler<T>
        /**
         * @display function
         */
        onEmptiedCapture?: React.ReactEventHandler<T>
        /**
         * @display function
         */
        onEncrypted?: React.ReactEventHandler<T>
        /**
         * @display function
         */
        onEncryptedCapture?: React.ReactEventHandler<T>
        /**
         * @display function
         */
        onEnded?: React.ReactEventHandler<T>
        /**
         * @display function
         */
        onEndedCapture?: React.ReactEventHandler<T>
        /**
         * @display function
         */
        onLoadedData?: React.ReactEventHandler<T>
        /**
         * @display function
         */
        onLoadedDataCapture?: React.ReactEventHandler<T>
        /**
         * @display function
         */
        onLoadedMetadata?: React.ReactEventHandler<T>
        /**
         * @display function
         */
        onLoadedMetadataCapture?: React.ReactEventHandler<T>
        /**
         * @display function
         */
        onLoadStart?: React.ReactEventHandler<T>
        /**
         * @display function
         */
        onLoadStartCapture?: React.ReactEventHandler<T>
        /**
         * @display function
         */
        onPause?: React.ReactEventHandler<T>
        /**
         * @display function
         */
         onPauseCapture?: React.ReactEventHandler<T>
        /**
         * @display function
         */
         onPlay?: React.ReactEventHandler<T>
        /**
         * @display function
         */
         onPlayCapture?: React.ReactEventHandler<T>
        /**
         * @display function
         */
         onPlaying?: React.ReactEventHandler<T>
        /**
         * @display function
         */
         onPlayingCapture?: React.ReactEventHandler<T>
        /**
         * @display function
         */
         onProgress?: React.ReactEventHandler<T>
        /**
         * @display function
         */
         onProgressCapture?: React.ReactEventHandler<T>
        /**
         * @display function
         */
         onRateChange?: React.ReactEventHandler<T>
        /**
         * @display function
         */
         onRateChangeCapture?: React.ReactEventHandler<T>
        /**
         * @display function
         */
         onSeeked?: React.ReactEventHandler<T>
        /**
         * @display function
         */
         onSeekedCapture?: React.ReactEventHandler<T>
        /**
         * @display function
         */
         onSeeking?: React.ReactEventHandler<T>
        /**
         * @display function
         */
         onSeekingCapture?: React.ReactEventHandler<T>
        /**
         * @display function
         */
         onStalled?: React.ReactEventHandler<T>
        /**
         * @display function
         */
         onStalledCapture?: React.ReactEventHandler<T>
        /**
         * @display function
         */
         onSuspend?: React.ReactEventHandler<T>
        /**
         * @display function
         */
         onSuspendCapture?: React.ReactEventHandler<T>
        /**
         * @display function
         */
         onTimeUpdate?: React.ReactEventHandler<T>
        /**
         * @display function
         */
         onTimeUpdateCapture?: React.ReactEventHandler<T>
        /**
         * @display function
         */
         onVolumeChange?: React.ReactEventHandler<T>
        /**
         * @display function
         */
         onVolumeChangeCapture?: React.ReactEventHandler<T>
        /**
         * @display function
         */
         onWaiting?: React.ReactEventHandler<T>
        /**
         * @display function
         */
         onWaitingCapture?: React.ReactEventHandler<T>
    }

    /**
     * Mouse event
     * @name MouseEvents
     */
    interface MouseEventProps<T> {
        /**
         * @display function
         */
        onAuxClick?: React.MouseEventHandler<T>
        /**
         * @display function
         */
         onAuxClickCapture?: React.MouseEventHandler<T>
        /**
         * @display function
         */
         onClick?: React.MouseEventHandler<T>
        /**
         * @display function
         */
         onClickCapture?: React.MouseEventHandler<T>
        /**
         * @display function
         */
         onContextMenu?: React.MouseEventHandler<T>
        /**
         * @display function
         */
         onContextMenuCapture?: React.MouseEventHandler<T>
        /**
         * @display function
         */
         onDoubleClick?: React.MouseEventHandler<T>
        /**
         * @display function
         */
         onDoubleClickCapture?: React.MouseEventHandler<T>
        /**
         * @display function
         */
         onDrag?: React.DragEventHandler<T>
        /**
         * @display function
         */
         onDragCapture?: React.DragEventHandler<T>
        /**
         * @display function
         */
         onDragEnd?: React.DragEventHandler<T>
        /**
         * @display function
         */
         onDragEndCapture?: React.DragEventHandler<T>
        /**
         * @display function
         */
         onDragEnter?: React.DragEventHandler<T>
        /**
         * @display function
         */
         onDragEnterCapture?: React.DragEventHandler<T>
        /**
         * @display function
         */
         onDragExit?: React.DragEventHandler<T>
        /**
         * @display function
         */
         onDragExitCapture?: React.DragEventHandler<T>
        /**
         * @display function
         */
         onDragLeave?: React.DragEventHandler<T>
        /**
         * @display function
         */
         onDragLeaveCapture?: React.DragEventHandler<T>
        /**
         * @display function
         */
         onDragOver?: React.DragEventHandler<T>
        /**
         * @display function
         */
         onDragOverCapture?: React.DragEventHandler<T>
        /**
         * @display function
         */
         onDragStart?: React.DragEventHandler<T>
        /**
         * @display function
         */
         onDragStartCapture?: React.DragEventHandler<T>
        /**
         * @display function
         */
         onDrop?: React.DragEventHandler<T>
        /**
         * @display function
         */
         onDropCapture?: React.DragEventHandler<T>
        /**
         * @display function
         */
         onMouseDown?: React.MouseEventHandler<T>
        /**
         * @display function
         */
         onMouseDownCapture?: React.MouseEventHandler<T>
        /**
         * @display function
         */
         onMouseEnter?: React.MouseEventHandler<T>
        /**
         * @display function
         */
         onMouseLeave?: React.MouseEventHandler<T>
        /**
         * @display function
         */
         onMouseMove?: React.MouseEventHandler<T>
        /**
         * @display function
         */
         onMouseMoveCapture?: React.MouseEventHandler<T>
        /**
         * @display function
         */
         onMouseOut?: React.MouseEventHandler<T>
        /**
         * @display function
         */
         onMouseOutCapture?: React.MouseEventHandler<T>
        /**
         * @display function
         */
         onMouseOver?: React.MouseEventHandler<T>
        /**
         * @display function
         */
         onMouseOverCapture?: React.MouseEventHandler<T>
        /**
         * @display function
         */
         onMouseUp?: React.MouseEventHandler<T>
        /**
         * @display function
         */
         onMouseUpCapture?: React.MouseEventHandler<T>
    }

    /**
     * Selection events
     * @name SelectionEvents
     */
    interface SelectionEventProps<T> {
        /**
         * @display function
         */
        onSelect?: React.ReactEventHandler<T>
        /**
         * @display function
         */
         onSelectCapture?: React.ReactEventHandler<T>
    }

    /**
     * Touch events
     * @name TouchEvents
     */
    interface TouchEventProps<T> {
        /**
         * @display function
         */
        onTouchCancel?: React.TouchEventHandler<T>
        /**
         * @display function
         */
         onTouchCancelCapture?: React.TouchEventHandler<T>
        /**
         * @display function
         */
         onTouchEnd?: React.TouchEventHandler<T>
        /**
         * @display function
         */
         onTouchEndCapture?: React.TouchEventHandler<T>
        /**
         * @display function
         */
         onTouchMove?: React.TouchEventHandler<T>
        /**
         * @display function
         */
         onTouchMoveCapture?: React.TouchEventHandler<T>
        /**
         * @display function
         */
         onTouchStart?: React.TouchEventHandler<T>
        /**
         * @display function
         */
         onTouchStartCapture?: React.TouchEventHandler<T>
    }

    /**
     * Pointer events
     * @name PointerEvents
     */
    interface PointerEventProps<T> {
        /**
         * @display function
         */
        onPointerDown?: React.PointerEventHandler<T>
        /**
         * @display function
         */
         onPointerDownCapture?: React.PointerEventHandler<T>
        /**
         * @display function
         */
         onPointerMove?: React.PointerEventHandler<T>
        /**
         * @display function
         */
         onPointerMoveCapture?: React.PointerEventHandler<T>
        /**
         * @display function
         */
         onPointerUp?: React.PointerEventHandler<T>
        /**
         * @display function
         */
         onPointerUpCapture?: React.PointerEventHandler<T>
        /**
         * @display function
         */
         onPointerCancel?: React.PointerEventHandler<T>
        /**
         * @display function
         */
         onPointerCancelCapture?: React.PointerEventHandler<T>
        /**
         * @display function
         */
         onPointerEnter?: React.PointerEventHandler<T>
        // onPointerEnterCapture?: React.PointerEventHandler<T>
        /**
         * @display function
         */
         onPointerLeave?: React.PointerEventHandler<T>
        // onPointerLeaveCapture?: React.PointerEventHandler<T>
        /**
         * @display function
         */
         onPointerOver?: React.PointerEventHandler<T>
        /**
         * @display function
         */
         onPointerOverCapture?: React.PointerEventHandler<T>
        /**
         * @display function
         */
         onPointerOut?: React.PointerEventHandler<T>
        /**
         * @display function
         */
         onPointerOutCapture?: React.PointerEventHandler<T>
        /**
         * @display function
         */
         onGotPointerCapture?: React.PointerEventHandler<T>
        /**
         * @display function
         */
         onGotPointerCaptureCapture?: React.PointerEventHandler<T>
        /**
         * @display function
         */
         onLostPointerCapture?: React.PointerEventHandler<T>
        /**
         * @display function
         */
         onLostPointerCaptureCapture?: React.PointerEventHandler<T>
    }

    /**
     * Scroll events
     * @name ScrollEvents
     */
    interface ScrollEventProps<T> {
        /**
         * @display function
         */
        onScroll?: React.UIEventHandler<T>
        /**
         * @display function
         */
         onScrollCapture?: React.UIEventHandler<T>
    }

    /**
     * Wheel events
     * @name WheelEvents
     */
    interface WheelEventProps<T> {
        /**
         * @display function
         */
        onWheel?: React.WheelEventHandler<T>
        /**
         * @display function
         */
         onWheelCapture?: React.WheelEventHandler<T>
    }

    /**
     * Animation events
     * @name AnimationEvents
     */
    interface AnimationEventProps<T> {
        /**
         * @display function
         */
        onAnimationStart?: React.AnimationEventHandler<T>
        /**
         * @display function
         */
         onAnimationStartCapture?: React.AnimationEventHandler<T>
        /**
         * @display function
         */
         onAnimationEnd?: React.AnimationEventHandler<T>
        /**
         * @display function
         */
         onAnimationEndCapture?: React.AnimationEventHandler<T>
        /**
         * @display function
         */
         onAnimationIteration?: React.AnimationEventHandler<T>
        /**
         * @display function
         */
         onAnimationIterationCapture?: React.AnimationEventHandler<T>
    }

    /**
     * Transition events
     * @name TransitionEvents
     */
    interface TransitionEventProps<T> {
        /**
         * @display function
         */
        onTransitionEnd?: React.TransitionEventHandler<T>
        /**
         * @display function
         */
         onTransitionEndCapture?: React.TransitionEventHandler<T>
    }
}

declare module 'csstype' {
    interface Properties {
        display?: 'block' | 'inline' | 'inline-block' | 'inline-table' | 'list-item' | 'none' | 'run-in' | 'table' | 'table-caption' | 'table-cell' | 'table-column-group' | 'table-column' | 'table-footer-group' | 'table-header-group' | 'table-row' | 'table-row-group' | 'flex' | 'grid'
        overflow?: 'auto' | 'hidden' | 'scroll' | 'visible' | 'inherit',
    }
}

export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>
}

export default SystemTypes