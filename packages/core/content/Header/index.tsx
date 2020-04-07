import React, { forwardRef, RefForwardingComponent } from 'react'
import Typography from '@stage-ui/core/misc/hocs/Typography'
import Types from './types'

const Header: RefForwardingComponent<HTMLSpanElement, Types.Props> = (props, ref) =>
    <Typography
        tag={
            {
                'xl': 'h1',
                'l': 'h2',
                'm': 'h3',
                's': 'h4',
                'xs': 'h5',
            }[props.size || 'm']
        }
        sizesOf="header"
        overrides="Header"
        specificStyles={{
            fontWeight: 700,
            display: 'block'
        }}
        ref={ref}
        size="m"
        {...props}
    />

export default forwardRef(Header)