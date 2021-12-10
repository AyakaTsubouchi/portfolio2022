import React from 'react'
import { FormattedMessage } from "react-intl";


export default function LeftContent() {
    return (
        <>
        <p className="text-2xl font-hand-writing mt-4">
        <FormattedMessage id={"home_greeting"}/>
       </p>
       <p className="text-2xl font-hand-writing mt-4">
       <FormattedMessage id={"home_self_one"}/>{" "}
         <span className="text-3xl text-red-300">
         <FormattedMessage id={"home_self_one_strong"}/>
         </span>
       </p>
       <p className="text-2xl font-hand-writing mt-4">
       <FormattedMessage id={"home_self_two"}/>
       </p>
       <p className="text-2xl font-hand-writing mt-4"> <FormattedMessage id={"home_self_three"}/></p>
       <div className="mt-10 text-right author-info">
         <p className="text-2xl font-hand-writing">
         <FormattedMessage id={"name"}/>
         </p>
         <p className="text-2xl font-hand-writing">
         <FormattedMessage id={"address"}/>
         </p>
       </div>
       </>
    )
}
