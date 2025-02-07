
/// <reference path="../../../../global.d.ts" />
import { Block, Header, Link, Paragraph as P } from '@stage-ui/core'
import React from 'react'
import styleProp from './styleProp.raw'
import colorProps from './colorProps.raw'
import spacingProps from './spacingProps.raw'
import flexGridProps from './flexGridProps.raw'
import layoutProps from './layoutProps.raw'
import borderProps from './borderProps.raw'

import Syntax from '../../../../components/Page/Content/Syntax'
import List from '../../../../components/Page/Content/List'

export const title = 'Props'
export const sticky = true

export default () => (
    <Block>
        <P>StageUI comonents have special props to customize thier styles</P>
        <Header pt="4rem" id="styles">Styles</Header>
        <P>Like style tag in HTML or CSS prop in emotion with
            styles prop you can provide custom styles to any component.</P>
        <P>Component may render in DOM many different HTML elements which have unique classNames.
        So in style object you can provide CSS for each of them.
        If it's a typescript project you instantly have a tip what classes exist in this component.
        If it's not you may have find this information on comonent documentation page.
        Also here you access component internal state for attach some styles in these cases.
            More about it written in <Link href="/overrides">Overrides</Link> section.</P>
        <Syntax code={styleProp} />
        <Header pt="4rem" id="color">Color</Header>
        <P>All colors described in Theme StageUI turn into Objects with useful
        methods that give you the opportunity to to adjust the color depending on the situation.
        To access theme colors provide function in these props.
        They recive theme colors and return one to component.
        Also you may put here ordinary color string or variable directly from Theme.
        </P>
        <Syntax code={colorProps} />
        <Header pt="4rem" id="margin-padding">Margin and Padding</Header>
        <P>Shorthand for margin and padding styles with size alias from theme spacing</P>
        <Syntax code={spacingProps} />
        <List
            data={[
                'm: margin',
                'mt: margin-top',
                'mr: margin-right',
                'mb: margin-bottom',
                'ml: margin-left',
                'mx: margin-left and margin-right',
                'my: margin-top and margin-bottom',
                'p : padding',
                'pt: padding-top',
                'pr: padding-right',
                'pb: padding-bottom',
                'pl: padding-left',
                'px: padding-left and padding-right',
                'py: padding-top and padding-bottom'
            ]}
            higlightBefore=":"
        />
        <Header pt="4rem" id="flex-grid">Flexbox and grid</Header>
        <P>Shorthand for flexbox and grid children styles</P>
        <Syntax code={flexGridProps} />
        <List
            data={[
                'flex: flex',
                'flexBasis: flex-basis',
                'flexGrow: flex-grow',
                'flexShrink: flex-shrink',
                'alignSelf: align-self',
                'justifySelf: justify-self',
                'gridColumn: grid-column',
                'gridRow: grid-row',
                'gridArea: grid-area',
                'gridColumnStart: grid-column-start',
                'gridColumnEnd: grid-column-end',
                'gridRowStart: grid-row-start',
                'gridRowEnd: grid-row-end',
                'placeSelf: place-self'
            ]}
            higlightBefore=":"
        />
        <Header pt="4rem" id="layout">Layout</Header>
        <P>Shorthand for layout styles</P>
        <Syntax code={layoutProps} />
        <List
            data={[
                'w: width',
                'h: height',
                'visibility: visibility',
                'display: display'
            ]}
            higlightBefore=":"
        />
        <Header pt="4rem" id="border">Border</Header>
        <P>Shorthand for border styles</P>
        <Syntax code={borderProps} />
        <List
            data={[
                'borderWidth: border-width',
                'borderStyle: border-style',
                'borderColor: border-color',
                'borderRadius: border-radius'
            ]}
            higlightBefore=":"
        />
    </Block>
)