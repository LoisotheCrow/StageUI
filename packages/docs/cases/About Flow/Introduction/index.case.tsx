import React from 'react';
import { Block, H1, T1, useFlow, H2, Divider, A } from "@flow-ui/core";
import Syntax from './Syntax';
import ViewportCode from './viewport.raw';
import BlockCode from './block.raw';
import RemCode from './rem.raw';
import ColorCode from './color.raw';
import IconCode from './icon.raw';
import FlowCode from './flow.raw';
import EmotionCode from './emotion.raw';

export const title = ' '
export const sticky = true;

export default () => (
    <Block>
        <H1 pb="1rem">Getting started</H1>

        <H2 p="1rem 0">Rule 1</H2>
        <T1>The main rule is you should wrap entire application with <b>Viewport</b>.</T1>
        <T1>Viewport provides theme in all components, use <b>prop</b> theme to change it</T1>
        <Syntax code={ViewportCode} />
        
        
        <H2 p="1rem 0">Rule 2</H2>
        <T1>Use <b>Block</b> instead of div elements</T1>
        <T1>I'ts has much more power then regular divs</T1>
        <Syntax code={BlockCode} />

        <H2 p="1rem 0">Rule 3</H2>
        <T1>User rem instead of px</T1>
        <T1>Thats makes you App scaleable :)</T1>
        <Syntax code={RemCode} />

        <T1 p="2rem 0">Thats is all rules we have :)</T1>

        <H1 p="1rem 0">Functional props</H1>
        <T1>Some components have functional props</T1>
        <T1>Let's see couple examples below</T1>

        <H2 p="1rem 0">Color</H2>
        <T1>For example let's see Button component</T1>
        <T1>Button have prop color you can just give it a string like "#000000" which apparently makes it black</T1>
        <T1>But more usefull will be give it a function which will provide typed color object for you</T1>
        <T1>We using theme color object as first argument of function then each color are instance of Chroma.js</T1>
        <Syntax code={ColorCode} />
        <T1 pb="1rem">For more information you may also check <noindex><A href="https://vis4.net/chromajs/" target="_blank">https://vis4.net/chromajs/</A></noindex></T1>

        <H2 p="1rem 0">Icon</H2>
        <T1>Icon also support functional props</T1>
        <T1>See example, we able to select icon type with intellisense of our IDE</T1>
        <Syntax code={IconCode} />

        <H1 p="1rem 0">Short props</H1>
        <T1>All flow components have a short props</T1>
        <T1>Let's see couple examples below</T1>

        <H2 p="1rem 0">Self flow</H2>
        <T1>Flow components have margin / padding and width / height aliases</T1>
        <T1>margins: m mr ml mt mb mh mv</T1>
        <T1>paddings: p pr pl pt pb ph pv</T1>
        <T1>height: h</T1>
        <T1>width: w</T1>
        <Syntax code={FlowCode} />

        <T1 p="2rem 0">Thats is all rules we have :)</T1>

        <H1 p="1rem 0">CSS</H1>
        <T1>We also using Emotion.js to make css works great</T1>
        <T1>It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities.</T1>
        
        <H2 p="1rem 0">Emotion</H2>
        <Syntax code={EmotionCode} />
        <T1 pb="1rem">For more information you may also check <noindex><A href="https://emotion.sh" target="_blank">https://emotion.sh</A></noindex></T1>

    </Block>
)