/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="Icon/Fill/flip"><path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M14.293 7.207C13.902 6.816 13.902 6.184 14.293 5.793L17.293 2.793C17.684 2.402 18.316 2.402 18.707 2.793L21.707 5.793C21.902 5.988 22 6.244 22 6.5C22 6.756 21.902 7.012 21.707 7.207C21.316 7.598 20.684 7.598 20.293 7.207L19 5.914V17.91C19 19.89 17.417 21.5 15.471 21.5H13C12.447 21.5 12 21.053 12 20.5C12 19.947 12.447 19.5 13 19.5H15.471C16.314 19.5 17 18.787 17 17.91V5.914L15.707 7.207C15.316 7.598 14.684 7.598 14.293 7.207ZM5.00001 18.0858V6.0898C5.00001 4.1108 6.58301 2.4998 8.52901 2.4998H11C11.553 2.4998 12 2.9468 12 3.4998C12 4.0528 11.553 4.4998 11 4.4998H8.52901C7.68701 4.4998 7.00001 5.2128 7.00001 6.0898V18.0858L8.29301 16.7928C8.68401 16.4028 9.31601 16.4028 9.70701 16.7928C9.90201 16.9878 10 17.2438 10 17.4998C10 17.7558 9.90201 18.0118 9.70701 18.2068L6.70701 21.2068C6.31601 21.5978 5.68401 21.5978 5.29301 21.2068L2.29301 18.2068C1.90201 17.8168 1.90201 17.1838 2.29301 16.7928C2.68401 16.4028 3.31601 16.4028 3.70701 16.7928L5.00001 18.0858Z"/><mask id="mask3265" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="2" width="21" height="20"><path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M14.293 7.207C13.902 6.816 13.902 6.184 14.293 5.793L17.293 2.793C17.684 2.402 18.316 2.402 18.707 2.793L21.707 5.793C21.902 5.988 22 6.244 22 6.5C22 6.756 21.902 7.012 21.707 7.207C21.316 7.598 20.684 7.598 20.293 7.207L19 5.914V17.91C19 19.89 17.417 21.5 15.471 21.5H13C12.447 21.5 12 21.053 12 20.5C12 19.947 12.447 19.5 13 19.5H15.471C16.314 19.5 17 18.787 17 17.91V5.914L15.707 7.207C15.316 7.598 14.684 7.598 14.293 7.207ZM5.00001 18.0858V6.0898C5.00001 4.1108 6.58301 2.4998 8.52901 2.4998H11C11.553 2.4998 12 2.9468 12 3.4998C12 4.0528 11.553 4.4998 11 4.4998H8.52901C7.68701 4.4998 7.00001 5.2128 7.00001 6.0898V18.0858L8.29301 16.7928C8.68401 16.4028 9.31601 16.4028 9.70701 16.7928C9.90201 16.9878 10 17.2438 10 17.4998C10 17.7558 9.90201 18.0118 9.70701 18.2068L6.70701 21.2068C6.31601 21.5978 5.68401 21.5978 5.29301 21.2068L2.29301 18.2068C1.90201 17.8168 1.90201 17.1838 2.29301 16.7928C2.68401 16.4028 3.31601 16.4028 3.70701 16.7928L5.00001 18.0858Z"/></mask><g mask="url(#mask3265)"><g id="&#240;&#159;&#142;&#168; Color"><rect id="Base" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Icon/Outline/flip"><path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M14.293 7.207C13.902 6.816 13.902 6.184 14.293 5.793L17.293 2.793C17.684 2.402 18.316 2.402 18.707 2.793L21.707 5.793C21.902 5.988 22 6.244 22 6.5C22 6.756 21.902 7.012 21.707 7.207C21.316 7.598 20.684 7.598 20.293 7.207L19 5.914V17.91C19 19.89 17.417 21.5 15.471 21.5H13C12.447 21.5 12 21.053 12 20.5C12 19.947 12.447 19.5 13 19.5H15.471C16.314 19.5 17 18.787 17 17.91V5.914L15.707 7.207C15.316 7.598 14.684 7.598 14.293 7.207ZM5 18.0858V6.0898C5 4.1108 6.583 2.4998 8.529 2.4998H11C11.553 2.4998 12 2.9468 12 3.4998C12 4.0528 11.553 4.4998 11 4.4998H8.529C7.687 4.4998 7 5.2128 7 6.0898V18.0858L8.293 16.7928C8.684 16.4028 9.316 16.4028 9.707 16.7928C9.902 16.9878 10 17.2438 10 17.4998C10 17.7558 9.902 18.0118 9.707 18.2068L6.707 21.2068C6.316 21.5978 5.684 21.5978 5.293 21.2068L2.293 18.2068C1.902 17.8168 1.902 17.1838 2.293 16.7928C2.684 16.4028 3.316 16.4028 3.707 16.7928L5 18.0858Z"/><mask id="mask7037" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="2" width="21" height="20"><path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M14.293 7.207C13.902 6.816 13.902 6.184 14.293 5.793L17.293 2.793C17.684 2.402 18.316 2.402 18.707 2.793L21.707 5.793C21.902 5.988 22 6.244 22 6.5C22 6.756 21.902 7.012 21.707 7.207C21.316 7.598 20.684 7.598 20.293 7.207L19 5.914V17.91C19 19.89 17.417 21.5 15.471 21.5H13C12.447 21.5 12 21.053 12 20.5C12 19.947 12.447 19.5 13 19.5H15.471C16.314 19.5 17 18.787 17 17.91V5.914L15.707 7.207C15.316 7.598 14.684 7.598 14.293 7.207ZM5 18.0858V6.0898C5 4.1108 6.583 2.4998 8.529 2.4998H11C11.553 2.4998 12 2.9468 12 3.4998C12 4.0528 11.553 4.4998 11 4.4998H8.529C7.687 4.4998 7 5.2128 7 6.0898V18.0858L8.293 16.7928C8.684 16.4028 9.316 16.4028 9.707 16.7928C9.902 16.9878 10 17.2438 10 17.4998C10 17.7558 9.902 18.0118 9.707 18.2068L6.707 21.2068C6.316 21.5978 5.684 21.5978 5.293 21.2068L2.293 18.2068C1.902 17.8168 1.902 17.1838 2.293 16.7928C2.684 16.4028 3.316 16.4028 3.707 16.7928L5 18.0858Z"/></mask><g mask="url(#mask7037)"><g id="&#240;&#159;&#142;&#168; Color"><rect id="Base" width="24" height="24"/></g></g></g></g>,
    })
))