/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="RefreshIcon/Fill/refresh"><path id="RefreshMask" fillRule="evenodd" clipRule="evenodd" d="M20.3032 13.4258C19.7772 13.2588 19.2152 13.5498 19.0472 14.0758C18.1102 17.0218 15.3522 18.9998 12.1842 18.9998C8.22224 18.9998 5.00024 15.8598 5.00024 11.9998C5.00024 8.14079 8.22224 4.99979 12.1842 4.99979C13.9122 4.99979 15.5422 5.60179 16.8292 6.66979L14.6632 6.31279C14.1132 6.21279 13.6032 6.59179 13.5132 7.13579C13.4232 7.68079 13.7922 8.19579 14.3372 8.28479L18.5832 8.98679C18.6382 8.99579 18.6942 8.99979 18.7472 8.99979C18.8662 8.99979 18.9822 8.97879 19.0902 8.93879C19.1272 8.92479 19.1572 8.89879 19.1932 8.87979C19.2592 8.84579 19.3282 8.81579 19.3852 8.76779C19.4212 8.73879 19.4442 8.69679 19.4752 8.66279C19.5222 8.61379 19.5722 8.56679 19.6072 8.50679C19.6322 8.46379 19.6422 8.41279 19.6612 8.36479C19.6852 8.30579 19.7172 8.25079 19.7292 8.18579L20.4832 4.18579C20.5852 3.64279 20.2282 3.11879 19.6852 3.01779C19.1442 2.91979 18.6192 3.27279 18.5172 3.81479L18.2452 5.25579C16.5812 3.81479 14.4482 2.99979 12.1842 2.99979C7.12024 2.99979 3.00024 7.03679 3.00024 11.9998C3.00024 16.9628 7.12024 20.9998 12.1842 20.9998C16.2262 20.9998 19.7502 18.4608 20.9532 14.6818C21.1202 14.1558 20.8292 13.5938 20.3032 13.4258Z"/><mask id="Refreshmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="2" width="19" height="19"><path id="RefreshMask_2" fillRule="evenodd" clipRule="evenodd" d="M20.3032 13.4258C19.7772 13.2588 19.2152 13.5498 19.0472 14.0758C18.1102 17.0218 15.3522 18.9998 12.1842 18.9998C8.22224 18.9998 5.00024 15.8598 5.00024 11.9998C5.00024 8.14079 8.22224 4.99979 12.1842 4.99979C13.9122 4.99979 15.5422 5.60179 16.8292 6.66979L14.6632 6.31279C14.1132 6.21279 13.6032 6.59179 13.5132 7.13579C13.4232 7.68079 13.7922 8.19579 14.3372 8.28479L18.5832 8.98679C18.6382 8.99579 18.6942 8.99979 18.7472 8.99979C18.8662 8.99979 18.9822 8.97879 19.0902 8.93879C19.1272 8.92479 19.1572 8.89879 19.1932 8.87979C19.2592 8.84579 19.3282 8.81579 19.3852 8.76779C19.4212 8.73879 19.4442 8.69679 19.4752 8.66279C19.5222 8.61379 19.5722 8.56679 19.6072 8.50679C19.6322 8.46379 19.6422 8.41279 19.6612 8.36479C19.6852 8.30579 19.7172 8.25079 19.7292 8.18579L20.4832 4.18579C20.5852 3.64279 20.2282 3.11879 19.6852 3.01779C19.1442 2.91979 18.6192 3.27279 18.5172 3.81479L18.2452 5.25579C16.5812 3.81479 14.4482 2.99979 12.1842 2.99979C7.12024 2.99979 3.00024 7.03679 3.00024 11.9998C3.00024 16.9628 7.12024 20.9998 12.1842 20.9998C16.2262 20.9998 19.7502 18.4608 20.9532 14.6818C21.1202 14.1558 20.8292 13.5938 20.3032 13.4258Z"/></mask><g mask="url(#Refreshmask0)"><g id="Refresh&#Refresh240;&#Refresh159;&#Refresh142;&#Refresh168; Color"><rect id="RefreshBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Refresh-oIcon/Outline/refresh"><path id="Refresh-oMask" fillRule="evenodd" clipRule="evenodd" d="M20.3032 13.4258C19.7772 13.2588 19.2152 13.5498 19.0472 14.0758C18.1102 17.0218 15.3522 18.9998 12.1842 18.9998C8.22221 18.9998 5.00021 15.8598 5.00021 11.9998C5.00021 8.14079 8.22221 4.99979 12.1842 4.99979C13.9122 4.99979 15.5422 5.60179 16.8292 6.66979L14.6632 6.31279C14.1132 6.21279 13.6032 6.59179 13.5132 7.13579C13.4232 7.68079 13.7922 8.19579 14.3372 8.28479L18.5832 8.98679C18.6382 8.99579 18.6942 8.99979 18.7472 8.99979C18.8662 8.99979 18.9822 8.97879 19.0902 8.93879C19.1272 8.92479 19.1572 8.89879 19.1932 8.87979C19.2592 8.84579 19.3282 8.81579 19.3852 8.76779C19.4212 8.73879 19.4442 8.69679 19.4752 8.66279C19.5222 8.61379 19.5722 8.56679 19.6072 8.50679C19.6322 8.46379 19.6422 8.41279 19.6612 8.36479C19.6852 8.30579 19.7172 8.25079 19.7292 8.18579L20.4832 4.18579C20.5852 3.64279 20.2282 3.11879 19.6852 3.01779C19.1442 2.91979 18.6192 3.27279 18.5172 3.81479L18.2452 5.25579C16.5812 3.81479 14.4482 2.99979 12.1842 2.99979C7.12021 2.99979 3.00021 7.03679 3.00021 11.9998C3.00021 16.9628 7.12021 20.9998 12.1842 20.9998C16.2262 20.9998 19.7502 18.4608 20.9532 14.6818C21.1202 14.1558 20.8292 13.5938 20.3032 13.4258Z"/><mask id="Refresh-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="2" width="19" height="19"><path id="Refresh-oMask_2" fillRule="evenodd" clipRule="evenodd" d="M20.3032 13.4258C19.7772 13.2588 19.2152 13.5498 19.0472 14.0758C18.1102 17.0218 15.3522 18.9998 12.1842 18.9998C8.22221 18.9998 5.00021 15.8598 5.00021 11.9998C5.00021 8.14079 8.22221 4.99979 12.1842 4.99979C13.9122 4.99979 15.5422 5.60179 16.8292 6.66979L14.6632 6.31279C14.1132 6.21279 13.6032 6.59179 13.5132 7.13579C13.4232 7.68079 13.7922 8.19579 14.3372 8.28479L18.5832 8.98679C18.6382 8.99579 18.6942 8.99979 18.7472 8.99979C18.8662 8.99979 18.9822 8.97879 19.0902 8.93879C19.1272 8.92479 19.1572 8.89879 19.1932 8.87979C19.2592 8.84579 19.3282 8.81579 19.3852 8.76779C19.4212 8.73879 19.4442 8.69679 19.4752 8.66279C19.5222 8.61379 19.5722 8.56679 19.6072 8.50679C19.6322 8.46379 19.6422 8.41279 19.6612 8.36479C19.6852 8.30579 19.7172 8.25079 19.7292 8.18579L20.4832 4.18579C20.5852 3.64279 20.2282 3.11879 19.6852 3.01779C19.1442 2.91979 18.6192 3.27279 18.5172 3.81479L18.2452 5.25579C16.5812 3.81479 14.4482 2.99979 12.1842 2.99979C7.12021 2.99979 3.00021 7.03679 3.00021 11.9998C3.00021 16.9628 7.12021 20.9998 12.1842 20.9998C16.2262 20.9998 19.7502 18.4608 20.9532 14.6818C21.1202 14.1558 20.8292 13.5938 20.3032 13.4258Z"/></mask><g mask="url(#Refresh-omask0)"><g id="Refresh-o&#Refresh-o240;&#Refresh-o159;&#Refresh-o142;&#Refresh-o168; Color"><rect id="Refresh-oBase" width="24" height="24"/></g></g></g></g>,
    })
))