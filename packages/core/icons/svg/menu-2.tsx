/**
The MIT License (MIT)

Copyright (c) 2018 Akveo.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import { Props, createIcon } from '@stage-ui/core/misc/hocs/Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g data-name="Layer 2"><g data-name="menu-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><circle cx="4" cy="12" r="1"/><rect x="7" y="11" width="14" height="2" rx=".94" ry=".94"/><rect x="3" y="16" width="18" height="2" rx=".94" ry=".94"/><rect x="3" y="6" width="18" height="2" rx=".94" ry=".94"/></g></g>,
        outline: <g data-name="Layer 2"><g data-name="menu-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><circle cx="4" cy="12" r="1"/><rect x="7" y="11" width="14" height="2" rx=".94" ry=".94"/><rect x="3" y="16" width="18" height="2" rx=".94" ry=".94"/><rect x="3" y="6" width="18" height="2" rx=".94" ry=".94"/></g></g>,
    })
))