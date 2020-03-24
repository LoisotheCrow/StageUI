import WhaleTypes from '@flow-ui/whale/types'

declare namespace SubmenuTypes {
    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Styles>, 'onChange'> {
        /**
         * Title for menu item
         */
        title?: React.ReactNode
        /**
         * Turn submenu off
         * @default false
         */
        disabled?: boolean
        /**
         * Indent at left size
         */
        indent?: string
        /**
         * Open state, for controlled component
         */
        open?: boolean
        /**
         * Default open state
         */
        defaultOpen?: boolean
        /**
         * Submenu items
         */
        children?: React.ReactNode
        /**
         * Left child at submenu view
         */
        leftChild?: React.ReactNode
        /**
         * Left child at submenu view
         */
        rightChild?: React.ReactNode
    }

    interface Styles {
        /**
         * Root view
         */
        container: void
    }
}

export default SubmenuTypes