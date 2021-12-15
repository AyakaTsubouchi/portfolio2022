import React from 'react'
import { FormattedMessage } from "react-intl";


export default function LeftContent() {
    return (
        <>
        <p className="tablet:text-2xl font-hand-writing mt-4">
        <FormattedMessage id={"contact_greeting"}/>
       </p>
       <p className="tablet:text-2xl font-hand-writing mt-4">
       <FormattedMessage id={"contact_closing_one"}/>
       </p>
       <p className="tablet:text-2xl font-hand-writing mt-4">
       <FormattedMessage id={"contact_closing_two"}/>
       </p>
       <div className="mt-10 text-right author-info">
         <p className="tablet:text-2xl font-hand-writing">
         <FormattedMessage id={"name"}/>
         </p>
         <p className="tablet:text-2xl font-hand-writing">
         <FormattedMessage id={"address"}/>
         </p>
       </div>
       </>
    )
}
