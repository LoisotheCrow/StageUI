/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="Icon/Fill/globe-2"><path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M4.96188 15.7999C5.59788 15.9609 6.28688 16.0729 6.98788 16.0729C8.06788 16.0729 9.17088 15.8099 10.1249 15.0629C11.8409 13.7209 11.8409 12.0039 11.8409 10.6239C11.8409 9.73289 11.8409 8.96289 12.2129 8.27989C12.4129 7.91389 12.8389 7.65989 13.3319 7.36489C13.6339 7.18489 13.9459 6.99789 14.2469 6.76289C14.8899 6.25989 15.3679 5.61189 15.6639 4.89689C17.0639 5.62089 18.2239 6.74389 18.9889 8.11889C17.5619 8.31789 15.5339 8.78489 15.1259 10.6529C15.0179 11.1469 15.0009 11.6119 14.9869 12.0229C14.9669 12.6059 14.9499 13.0669 14.6999 13.4879L14.6009 13.6559C13.9539 14.7389 13.2219 15.9679 14.2089 17.6849C14.3279 17.8929 14.4609 18.0929 14.5919 18.2909C14.9359 18.8079 15.1049 19.0929 15.1059 19.3719C14.1499 19.7769 13.1009 19.9999 11.9999 19.9999C8.96288 19.9999 6.31588 18.2989 4.96188 15.7999ZM11.9999 1.99989C6.48588 1.99989 1.99988 6.48689 1.99988 11.9999C1.99988 17.5139 6.48588 21.9999 11.9999 21.9999C17.5139 21.9999 21.9999 17.5139 21.9999 11.9999C21.9999 6.48689 17.5139 1.99989 11.9999 1.99989Z"/><mask id="mask4125" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="21" height="21"><path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M4.96188 15.7999C5.59788 15.9609 6.28688 16.0729 6.98788 16.0729C8.06788 16.0729 9.17088 15.8099 10.1249 15.0629C11.8409 13.7209 11.8409 12.0039 11.8409 10.6239C11.8409 9.73289 11.8409 8.96289 12.2129 8.27989C12.4129 7.91389 12.8389 7.65989 13.3319 7.36489C13.6339 7.18489 13.9459 6.99789 14.2469 6.76289C14.8899 6.25989 15.3679 5.61189 15.6639 4.89689C17.0639 5.62089 18.2239 6.74389 18.9889 8.11889C17.5619 8.31789 15.5339 8.78489 15.1259 10.6529C15.0179 11.1469 15.0009 11.6119 14.9869 12.0229C14.9669 12.6059 14.9499 13.0669 14.6999 13.4879L14.6009 13.6559C13.9539 14.7389 13.2219 15.9679 14.2089 17.6849C14.3279 17.8929 14.4609 18.0929 14.5919 18.2909C14.9359 18.8079 15.1049 19.0929 15.1059 19.3719C14.1499 19.7769 13.1009 19.9999 11.9999 19.9999C8.96288 19.9999 6.31588 18.2989 4.96188 15.7999ZM11.9999 1.99989C6.48588 1.99989 1.99988 6.48689 1.99988 11.9999C1.99988 17.5139 6.48588 21.9999 11.9999 21.9999C17.5139 21.9999 21.9999 17.5139 21.9999 11.9999C21.9999 6.48689 17.5139 1.99989 11.9999 1.99989Z"/></mask><g mask="url(#mask4125)"><g id="&#240;&#159;&#142;&#168; Color"><rect id="Base" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Icon/Fill/globe-2"><path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M4.96188 15.7999C5.59788 15.9609 6.28688 16.0729 6.98788 16.0729C8.06788 16.0729 9.17088 15.8099 10.1249 15.0629C11.8409 13.7209 11.8409 12.0039 11.8409 10.6239C11.8409 9.73289 11.8409 8.96289 12.2129 8.27989C12.4129 7.91389 12.8389 7.65989 13.3319 7.36489C13.6339 7.18489 13.9459 6.99789 14.2469 6.76289C14.8899 6.25989 15.3679 5.61189 15.6639 4.89689C17.0639 5.62089 18.2239 6.74389 18.9889 8.11889C17.5619 8.31789 15.5339 8.78489 15.1259 10.6529C15.0179 11.1469 15.0009 11.6119 14.9869 12.0229C14.9669 12.6059 14.9499 13.0669 14.6999 13.4879L14.6009 13.6559C13.9539 14.7389 13.2219 15.9679 14.2089 17.6849C14.3279 17.8929 14.4609 18.0929 14.5919 18.2909C14.9359 18.8079 15.1049 19.0929 15.1059 19.3719C14.1499 19.7769 13.1009 19.9999 11.9999 19.9999C8.96288 19.9999 6.31588 18.2989 4.96188 15.7999ZM11.9999 1.99989C6.48588 1.99989 1.99988 6.48689 1.99988 11.9999C1.99988 17.5139 6.48588 21.9999 11.9999 21.9999C17.5139 21.9999 21.9999 17.5139 21.9999 11.9999C21.9999 6.48689 17.5139 1.99989 11.9999 1.99989Z"/><mask id="mask4125" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="21" height="21"><path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M4.96188 15.7999C5.59788 15.9609 6.28688 16.0729 6.98788 16.0729C8.06788 16.0729 9.17088 15.8099 10.1249 15.0629C11.8409 13.7209 11.8409 12.0039 11.8409 10.6239C11.8409 9.73289 11.8409 8.96289 12.2129 8.27989C12.4129 7.91389 12.8389 7.65989 13.3319 7.36489C13.6339 7.18489 13.9459 6.99789 14.2469 6.76289C14.8899 6.25989 15.3679 5.61189 15.6639 4.89689C17.0639 5.62089 18.2239 6.74389 18.9889 8.11889C17.5619 8.31789 15.5339 8.78489 15.1259 10.6529C15.0179 11.1469 15.0009 11.6119 14.9869 12.0229C14.9669 12.6059 14.9499 13.0669 14.6999 13.4879L14.6009 13.6559C13.9539 14.7389 13.2219 15.9679 14.2089 17.6849C14.3279 17.8929 14.4609 18.0929 14.5919 18.2909C14.9359 18.8079 15.1049 19.0929 15.1059 19.3719C14.1499 19.7769 13.1009 19.9999 11.9999 19.9999C8.96288 19.9999 6.31588 18.2989 4.96188 15.7999ZM11.9999 1.99989C6.48588 1.99989 1.99988 6.48689 1.99988 11.9999C1.99988 17.5139 6.48588 21.9999 11.9999 21.9999C17.5139 21.9999 21.9999 17.5139 21.9999 11.9999C21.9999 6.48689 17.5139 1.99989 11.9999 1.99989Z"/></mask><g mask="url(#mask4125)"><g id="&#240;&#159;&#142;&#168; Color"><rect id="Base" width="24" height="24"/></g></g></g></g>,
    })
))