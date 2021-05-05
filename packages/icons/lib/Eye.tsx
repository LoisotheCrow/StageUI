/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="Icon/Fill/eye"><path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M12 10.5C11.173 10.5 10.5 11.173 10.5 12C10.5 12.827 11.173 13.5 12 13.5C12.827 13.5 13.5 12.827 13.5 12C13.5 11.173 12.827 10.5 12 10.5ZM12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 10.07 10.07 8.50001 12 8.50001C13.93 8.50001 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5ZM21.868 11.502C21.229 10.39 17.706 4.81601 11.729 5.00301C6.202 5.14401 2.986 10.014 2.132 11.502C1.956 11.811 1.956 12.189 2.132 12.498C2.762 13.595 6.162 19 12.025 19C12.106 19 12.188 18.999 12.271 18.997C17.798 18.856 21.014 13.986 21.868 12.498C22.044 12.189 22.044 11.811 21.868 11.502Z"/><mask id="mask6909" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="4" width="20" height="15"><path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M12 10.5C11.173 10.5 10.5 11.173 10.5 12C10.5 12.827 11.173 13.5 12 13.5C12.827 13.5 13.5 12.827 13.5 12C13.5 11.173 12.827 10.5 12 10.5ZM12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 10.07 10.07 8.50001 12 8.50001C13.93 8.50001 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5ZM21.868 11.502C21.229 10.39 17.706 4.81601 11.729 5.00301C6.202 5.14401 2.986 10.014 2.132 11.502C1.956 11.811 1.956 12.189 2.132 12.498C2.762 13.595 6.162 19 12.025 19C12.106 19 12.188 18.999 12.271 18.997C17.798 18.856 21.014 13.986 21.868 12.498C22.044 12.189 22.044 11.811 21.868 11.502Z"/></mask><g mask="url(#mask6909)"><g id="&#240;&#159;&#142;&#168; Color"><rect id="Base" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Icon/Outline/eye"><path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M12 13.5C11.173 13.5 10.5 12.827 10.5 12C10.5 11.173 11.173 10.5 12 10.5C12.827 10.5 13.5 11.173 13.5 12C13.5 12.827 12.827 13.5 12 13.5ZM12 8.50002C10.07 8.50002 8.49999 10.07 8.49999 12C8.49999 13.93 10.07 15.5 12 15.5C13.93 15.5 15.5 13.93 15.5 12C15.5 10.07 13.93 8.50002 12 8.50002ZM12.2197 16.9976C7.91369 17.0976 5.10469 13.4146 4.17269 11.9956C5.19869 10.3906 7.78269 7.10462 11.7807 7.00262C16.0697 6.89362 18.8947 10.5856 19.8267 12.0046C18.8017 13.6096 16.2167 16.8956 12.2197 16.9976ZM21.8677 11.5026C21.2297 10.3906 17.7057 4.81662 11.7297 5.00362C6.20169 5.14362 2.98669 10.0136 2.13269 11.5026C1.95569 11.8106 1.95569 12.1896 2.13269 12.4976C2.76169 13.5946 6.16169 18.9996 12.0247 18.9996C12.1067 18.9996 12.1887 18.9986 12.2707 18.9966C17.7977 18.8556 21.0137 13.9866 21.8677 12.4976C22.0437 12.1896 22.0437 11.8106 21.8677 11.5026Z"/><mask id="mask9947" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="4" width="20" height="15"><path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M12 13.5C11.173 13.5 10.5 12.827 10.5 12C10.5 11.173 11.173 10.5 12 10.5C12.827 10.5 13.5 11.173 13.5 12C13.5 12.827 12.827 13.5 12 13.5ZM12 8.50002C10.07 8.50002 8.49999 10.07 8.49999 12C8.49999 13.93 10.07 15.5 12 15.5C13.93 15.5 15.5 13.93 15.5 12C15.5 10.07 13.93 8.50002 12 8.50002ZM12.2197 16.9976C7.91369 17.0976 5.10469 13.4146 4.17269 11.9956C5.19869 10.3906 7.78269 7.10462 11.7807 7.00262C16.0697 6.89362 18.8947 10.5856 19.8267 12.0046C18.8017 13.6096 16.2167 16.8956 12.2197 16.9976ZM21.8677 11.5026C21.2297 10.3906 17.7057 4.81662 11.7297 5.00362C6.20169 5.14362 2.98669 10.0136 2.13269 11.5026C1.95569 11.8106 1.95569 12.1896 2.13269 12.4976C2.76169 13.5946 6.16169 18.9996 12.0247 18.9996C12.1067 18.9996 12.1887 18.9986 12.2707 18.9966C17.7977 18.8556 21.0137 13.9866 21.8677 12.4976C22.0437 12.1896 22.0437 11.8106 21.8677 11.5026Z"/></mask><g mask="url(#mask9947)"><g id="&#240;&#159;&#142;&#168; Color"><rect id="Base" width="24" height="24"/></g></g></g></g>,
    })
))