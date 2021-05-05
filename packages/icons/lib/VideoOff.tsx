/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="Icon/Fill/video-off"><path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M15 13.5859L17 15.5859L20.707 19.2929C21.098 19.6839 21.098 20.3159 20.707 20.7069C20.512 20.9019 20.256 20.9999 20 20.9999C19.744 20.9999 19.488 20.9019 19.293 20.7069L16.386 17.7999L14.931 16.3449L5.58597 6.9999L3.82597 5.2399L3.29297 4.7069C2.90197 4.3159 2.90197 3.6839 3.29297 3.2929C3.68397 2.9019 4.31597 2.9019 4.70697 3.2929L6.41397 4.9999L8.41397 6.9999L15 13.5859ZM21.0117 7.1454C20.3857 6.8734 19.6597 6.9914 19.1607 7.4514L16.9997 9.4514V7.9994C16.9997 6.3454 15.6547 4.9994 13.9997 4.9994H7.82767L9.12067 6.2924L15.7067 12.8784L17.7067 14.8784L19.7177 16.8894C19.9097 16.9614 20.1137 16.9994 20.3197 16.9994C20.5527 16.9994 20.7877 16.9524 21.0117 16.8544C21.6207 16.5884 21.9997 16.0194 21.9997 15.3704V8.6294C21.9997 7.9804 21.6207 7.4114 21.0117 7.1454ZM14.2236 17.0517L4.87857 7.7067L3.11957 5.9477L2.97357 5.8017C2.37857 6.3507 1.99957 7.1287 1.99957 7.9997V15.9997C1.99957 17.6547 3.34557 18.9997 4.99957 18.9997H13.9996C14.6166 18.9997 15.1886 18.8127 15.6646 18.4927L14.2236 17.0517Z"/><mask id="mask1373" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="2" width="21" height="19"><path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M15 13.5859L17 15.5859L20.707 19.2929C21.098 19.6839 21.098 20.3159 20.707 20.7069C20.512 20.9019 20.256 20.9999 20 20.9999C19.744 20.9999 19.488 20.9019 19.293 20.7069L16.386 17.7999L14.931 16.3449L5.58597 6.9999L3.82597 5.2399L3.29297 4.7069C2.90197 4.3159 2.90197 3.6839 3.29297 3.2929C3.68397 2.9019 4.31597 2.9019 4.70697 3.2929L6.41397 4.9999L8.41397 6.9999L15 13.5859ZM21.0117 7.1454C20.3857 6.8734 19.6597 6.9914 19.1607 7.4514L16.9997 9.4514V7.9994C16.9997 6.3454 15.6547 4.9994 13.9997 4.9994H7.82767L9.12067 6.2924L15.7067 12.8784L17.7067 14.8784L19.7177 16.8894C19.9097 16.9614 20.1137 16.9994 20.3197 16.9994C20.5527 16.9994 20.7877 16.9524 21.0117 16.8544C21.6207 16.5884 21.9997 16.0194 21.9997 15.3704V8.6294C21.9997 7.9804 21.6207 7.4114 21.0117 7.1454ZM14.2236 17.0517L4.87857 7.7067L3.11957 5.9477L2.97357 5.8017C2.37857 6.3507 1.99957 7.1287 1.99957 7.9997V15.9997C1.99957 17.6547 3.34557 18.9997 4.99957 18.9997H13.9996C14.6166 18.9997 15.1886 18.8127 15.6646 18.4927L14.2236 17.0517Z"/></mask><g mask="url(#mask1373)"><g id="&#240;&#159;&#142;&#168; Color"><rect id="Base" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Icon/Outline/video-off"><path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M17 15.5859L15 13.5859L8.414 6.9999L6.414 4.9999L4.707 3.2929C4.316 2.9019 3.684 2.9019 3.293 3.2929C2.902 3.6839 2.902 4.3159 3.293 4.7069L3.826 5.2399L5.586 6.9999L14.931 16.3449L16.386 17.7999L19.293 20.7069C19.488 20.9019 19.744 20.9999 20 20.9999C20.256 20.9999 20.512 20.9019 20.707 20.7069C21.098 20.3159 21.098 19.6839 20.707 19.2929L17 15.5859ZM20 14.5996L17.191 11.9996L20 9.4006V14.5996ZM21.012 7.1456C20.386 6.8726 19.66 6.9916 19.161 7.4516L17 9.4516V7.9996C17 6.3456 15.654 4.9996 14 4.9996H7.828L9.828 6.9996H14C14.552 6.9996 15 7.4486 15 7.9996V12.1716L19.718 16.8896C19.91 16.9616 20.113 16.9996 20.319 16.9996C20.553 16.9996 20.788 16.9526 21.012 16.8546C21.621 16.5886 22 16.0196 22 15.3706V8.6296C22 7.9806 21.621 7.4116 21.012 7.1456ZM5 17H14C14.0313 17 14.0595 16.9921 14.088 16.9842C14.106 16.9791 14.124 16.9741 14.143 16.971L15.665 18.493C15.188 18.812 14.616 19 14 19H5C3.346 19 2 17.654 2 16V8C2 7.129 2.379 6.351 2.974 5.802L4.396 7.224C4.161 7.407 4 7.68 4 8V16C4 16.552 4.448 17 5 17Z"/><mask id="mask177" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="19"><path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M17 15.5859L15 13.5859L8.414 6.9999L6.414 4.9999L4.707 3.2929C4.316 2.9019 3.684 2.9019 3.293 3.2929C2.902 3.6839 2.902 4.3159 3.293 4.7069L3.826 5.2399L5.586 6.9999L14.931 16.3449L16.386 17.7999L19.293 20.7069C19.488 20.9019 19.744 20.9999 20 20.9999C20.256 20.9999 20.512 20.9019 20.707 20.7069C21.098 20.3159 21.098 19.6839 20.707 19.2929L17 15.5859ZM20 14.5996L17.191 11.9996L20 9.4006V14.5996ZM21.012 7.1456C20.386 6.8726 19.66 6.9916 19.161 7.4516L17 9.4516V7.9996C17 6.3456 15.654 4.9996 14 4.9996H7.828L9.828 6.9996H14C14.552 6.9996 15 7.4486 15 7.9996V12.1716L19.718 16.8896C19.91 16.9616 20.113 16.9996 20.319 16.9996C20.553 16.9996 20.788 16.9526 21.012 16.8546C21.621 16.5886 22 16.0196 22 15.3706V8.6296C22 7.9806 21.621 7.4116 21.012 7.1456ZM5 17H14C14.0313 17 14.0595 16.9921 14.088 16.9842C14.106 16.9791 14.124 16.9741 14.143 16.971L15.665 18.493C15.188 18.812 14.616 19 14 19H5C3.346 19 2 17.654 2 16V8C2 7.129 2.379 6.351 2.974 5.802L4.396 7.224C4.161 7.407 4 7.68 4 8V16C4 16.552 4.448 17 5 17Z"/></mask><g mask="url(#mask177)"><g id="&#240;&#159;&#142;&#168; Color"><rect id="Base" width="24" height="24"/></g></g></g></g>,
    })
))