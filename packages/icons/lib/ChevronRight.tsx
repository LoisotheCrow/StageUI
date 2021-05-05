/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="Icon/Fill/chevron-right"><path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M10.956 18.0028C10.649 18.0028 10.339 17.9368 10.05 17.8008C9.402 17.4948 9 16.8878 9 16.2148V7.78878C9 7.11578 9.402 6.50878 10.05 6.20278C10.782 5.85778 11.65 5.95878 12.259 6.46178L17.358 10.6758C17.767 11.0118 18 11.4958 18 12.0018C18 12.5078 17.767 12.9918 17.358 13.3278L12.259 17.5408C11.891 17.8458 11.427 18.0028 10.956 18.0028Z"/><mask id="mask5842" mask-type="alpha" maskUnits="userSpaceOnUse" x="9" y="6" width="9" height="13"><path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M10.956 18.0028C10.649 18.0028 10.339 17.9368 10.05 17.8008C9.402 17.4948 9 16.8878 9 16.2148V7.78878C9 7.11578 9.402 6.50878 10.05 6.20278C10.782 5.85778 11.65 5.95878 12.259 6.46178L17.358 10.6758C17.767 11.0118 18 11.4958 18 12.0018C18 12.5078 17.767 12.9918 17.358 13.3278L12.259 17.5408C11.891 17.8458 11.427 18.0028 10.956 18.0028Z"/></mask><g mask="url(#mask5842)"><g id="&#240;&#159;&#142;&#168; Color"><rect id="Base" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Icon/Outline/chevron-right"><path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M10.5 17C10.244 17 9.988 16.902 9.793 16.707C9.402 16.316 9.402 15.684 9.793 15.293L13.098 11.988L9.918 8.695C9.535 8.297 9.546 7.664 9.943 7.281C10.341 6.898 10.974 6.909 11.357 7.305L15.219 11.305C15.598 11.698 15.593 12.321 15.207 12.707L11.207 16.707C11.012 16.902 10.756 17 10.5 17Z"/><mask id="mask357" mask-type="alpha" maskUnits="userSpaceOnUse" x="9" y="7" width="7" height="10"><path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M10.5 17C10.244 17 9.988 16.902 9.793 16.707C9.402 16.316 9.402 15.684 9.793 15.293L13.098 11.988L9.918 8.695C9.535 8.297 9.546 7.664 9.943 7.281C10.341 6.898 10.974 6.909 11.357 7.305L15.219 11.305C15.598 11.698 15.593 12.321 15.207 12.707L11.207 16.707C11.012 16.902 10.756 17 10.5 17Z"/></mask><g mask="url(#mask357)"><g id="&#240;&#159;&#142;&#168; Color"><rect id="Base" width="24" height="24"/></g></g></g></g>,
    })
))