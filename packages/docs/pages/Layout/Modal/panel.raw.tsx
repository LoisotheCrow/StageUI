import { Button, Modal } from '@flow-ui/core'
import React, { Fragment, useRef } from 'react'
import ModalTypes from '@flow-ui/core/layout/Modal/types'

export default () => {
    const modal = useRef<ModalTypes.Ref>(null)
    return (
        <Fragment>
            <Modal
                decoration="panel"
                title="Hello"
                subtitle="I'm modal panel, please do not close me 🙄"
                ref={modal}
            />
            <Button
                onClick={() => modal.current?.open()}
                children="Open up panel"
            />
        </Fragment>
    )
}