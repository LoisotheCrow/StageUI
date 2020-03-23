import FieldTypes from '../../misc/hocs/Field/types'
import WhaleTypes from '@flow-ui/whale/types'

declare namespace SelectTypes {
    interface Option {
        text: string
        value: any
    }

    interface Props extends Omit<FieldTypes.Props<Styles>, 'onChange'> {
        placeholder?: string
        options: Option[]
        /**
         * Allow selecting multiple values
         */
        multiselect?: boolean
        /**
         * Allow search values
         */
        searchable?: boolean
        /**
         * Select will not close after
         * option clicked
         */
        keepOpen?: boolean
        values?: Option[]
        defaultValues?: Option[]
        /**
         * Max size of scroll area
         * at select drop view
         */
        maxScrollHeight?: string
        onChange?: (values: Option[], changedValue?: Option) => void
    }

    type State = {
        selectedOptions: Option[] 
        open: boolean
        searchValue: string
        empty: boolean
        cursor: number
    }

    interface OptionsProps extends SearchProps {
        selected: SelectTypes.Option[]
        onClose: (option) => void
        searchable?: boolean
        size: WhaleTypes.Size
    }

    interface SearchProps {
        searchValue: string
        onSearch: (searchValue: string) => void
        styles: WhaleTypes.ComponentStyles<Styles>
        placeholder?: string
        defaultValue?: string
        disabled?: boolean
    }

    interface StyleState extends StyleParams{
        shape: Props['shape']
        size: Props['size'] 
        decoration: Props['decoration']
    }

    interface StyleParams {
        isOpen: boolean
    }
    interface Styles extends FieldTypes.Styles<{
        container: StyleState
    }> {
        selectedContainer: void
        selectedInput: {
            searchMode: boolean
            multiselect: boolean
        }
        tag: StyleState
        tagRemove: StyleState

        drop: StyleState
        dropItem: StyleState
    }
}

export default SelectTypes