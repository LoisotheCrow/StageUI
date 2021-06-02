/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="Attach2Icon/Fill/attach-2"><path id="Attach2Mask" fillRule="evenodd" clipRule="evenodd" d="M9.29354 21C7.63754 21 6.06354 20.334 4.86154 19.125C2.47354 16.722 2.37554 12.912 4.64254 10.631L12.0285 3.201C12.7975 2.427 13.8355 2 14.9505 2C16.1435 2 17.2775 2.479 18.1425 3.349C19.8635 5.08 19.9295 7.831 18.2885 9.481L10.8935 16.91C10.4145 17.393 9.76954 17.658 9.07754 17.658C8.34654 17.658 7.65354 17.366 7.12754 16.837C6.07454 15.776 6.04154 14.085 7.05454 13.065L13.8795 6.21C14.2695 5.818 14.9015 5.816 15.2935 6.206C15.6845 6.596 15.6865 7.229 15.2965 7.62L8.47254 14.476C8.23254 14.718 8.26554 15.145 8.54654 15.427C8.69254 15.574 8.88654 15.658 9.07754 15.658C9.18754 15.658 9.34554 15.631 9.47554 15.5L16.8705 8.071C17.7375 7.198 17.6725 5.713 16.7245 4.759C15.8175 3.847 14.2785 3.775 13.4465 4.611L6.06054 12.041C4.56654 13.544 4.66454 16.09 6.28054 17.715C7.10354 18.544 8.17354 19 9.29354 19C10.2945 19 11.2225 18.622 11.9045 17.936L19.2915 10.506C19.6805 10.115 20.3135 10.112 20.7055 10.502C21.0965 10.892 21.0985 11.524 20.7095 11.916L13.3225 19.346C12.2625 20.412 10.8315 21 9.29354 21Z"/><mask id="Attach2mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="2" width="18" height="19"><path id="Attach2Mask_2" fillRule="evenodd" clipRule="evenodd" d="M9.29354 21C7.63754 21 6.06354 20.334 4.86154 19.125C2.47354 16.722 2.37554 12.912 4.64254 10.631L12.0285 3.201C12.7975 2.427 13.8355 2 14.9505 2C16.1435 2 17.2775 2.479 18.1425 3.349C19.8635 5.08 19.9295 7.831 18.2885 9.481L10.8935 16.91C10.4145 17.393 9.76954 17.658 9.07754 17.658C8.34654 17.658 7.65354 17.366 7.12754 16.837C6.07454 15.776 6.04154 14.085 7.05454 13.065L13.8795 6.21C14.2695 5.818 14.9015 5.816 15.2935 6.206C15.6845 6.596 15.6865 7.229 15.2965 7.62L8.47254 14.476C8.23254 14.718 8.26554 15.145 8.54654 15.427C8.69254 15.574 8.88654 15.658 9.07754 15.658C9.18754 15.658 9.34554 15.631 9.47554 15.5L16.8705 8.071C17.7375 7.198 17.6725 5.713 16.7245 4.759C15.8175 3.847 14.2785 3.775 13.4465 4.611L6.06054 12.041C4.56654 13.544 4.66454 16.09 6.28054 17.715C7.10354 18.544 8.17354 19 9.29354 19C10.2945 19 11.2225 18.622 11.9045 17.936L19.2915 10.506C19.6805 10.115 20.3135 10.112 20.7055 10.502C21.0965 10.892 21.0985 11.524 20.7095 11.916L13.3225 19.346C12.2625 20.412 10.8315 21 9.29354 21Z"/></mask><g mask="url(#Attach2mask0)"><g id="Attach2&#Attach2240;&#Attach2159;&#Attach2142;&#Attach2168; Color"><rect id="Attach2Base" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Attach2-oIcon/Outline/attach-2"><path id="Attach2-oMask" fillRule="evenodd" clipRule="evenodd" d="M9.29351 21C7.63751 21 6.06351 20.334 4.86151 19.125C2.47351 16.722 2.37551 12.912 4.64251 10.631L12.0285 3.201C12.7975 2.427 13.8355 2 14.9505 2C16.1435 2 17.2775 2.479 18.1425 3.349C19.8635 5.08 19.9295 7.831 18.2885 9.481L10.8935 16.91C10.4145 17.393 9.76951 17.658 9.07751 17.658C8.34651 17.658 7.65351 17.366 7.12751 16.837C6.07451 15.776 6.04151 14.085 7.05451 13.065L13.8795 6.21C14.2695 5.818 14.9015 5.816 15.2935 6.206C15.6845 6.596 15.6865 7.229 15.2965 7.62L8.47251 14.476C8.23251 14.718 8.26551 15.145 8.54651 15.427C8.69251 15.574 8.88651 15.658 9.07751 15.658C9.18751 15.658 9.34551 15.631 9.47551 15.5L16.8705 8.071C17.7375 7.198 17.6725 5.713 16.7245 4.759C15.8175 3.847 14.2785 3.775 13.4465 4.611L6.06051 12.041C4.56651 13.544 4.66451 16.09 6.28051 17.715C7.10351 18.544 8.17351 19 9.29351 19C10.2945 19 11.2225 18.622 11.9045 17.936L19.2915 10.506C19.6805 10.115 20.3135 10.112 20.7055 10.502C21.0965 10.892 21.0985 11.524 20.7095 11.916L13.3225 19.346C12.2625 20.412 10.8315 21 9.29351 21Z"/><mask id="Attach2-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="2" width="18" height="19"><path id="Attach2-oMask_2" fillRule="evenodd" clipRule="evenodd" d="M9.29351 21C7.63751 21 6.06351 20.334 4.86151 19.125C2.47351 16.722 2.37551 12.912 4.64251 10.631L12.0285 3.201C12.7975 2.427 13.8355 2 14.9505 2C16.1435 2 17.2775 2.479 18.1425 3.349C19.8635 5.08 19.9295 7.831 18.2885 9.481L10.8935 16.91C10.4145 17.393 9.76951 17.658 9.07751 17.658C8.34651 17.658 7.65351 17.366 7.12751 16.837C6.07451 15.776 6.04151 14.085 7.05451 13.065L13.8795 6.21C14.2695 5.818 14.9015 5.816 15.2935 6.206C15.6845 6.596 15.6865 7.229 15.2965 7.62L8.47251 14.476C8.23251 14.718 8.26551 15.145 8.54651 15.427C8.69251 15.574 8.88651 15.658 9.07751 15.658C9.18751 15.658 9.34551 15.631 9.47551 15.5L16.8705 8.071C17.7375 7.198 17.6725 5.713 16.7245 4.759C15.8175 3.847 14.2785 3.775 13.4465 4.611L6.06051 12.041C4.56651 13.544 4.66451 16.09 6.28051 17.715C7.10351 18.544 8.17351 19 9.29351 19C10.2945 19 11.2225 18.622 11.9045 17.936L19.2915 10.506C19.6805 10.115 20.3135 10.112 20.7055 10.502C21.0965 10.892 21.0985 11.524 20.7095 11.916L13.3225 19.346C12.2625 20.412 10.8315 21 9.29351 21Z"/></mask><g mask="url(#Attach2-omask0)"><g id="Attach2-o&#Attach2-o240;&#Attach2-o159;&#Attach2-o142;&#Attach2-o168; Color"><rect id="Attach2-oBase" width="24" height="24"/></g></g></g></g>,
    })
))