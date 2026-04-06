import React from 'react'
import { useState } from "react";
import { Chat, ChatMobile } from "od-support-chat";

const meetingLinkKey = 'your_meeting_link_key';
const customerSupportKey = 'your_customer_support_key';

const Home: React.FunctionComponent = () => {

    const [isMobile] = useState(window.innerWidth < window.innerHeight && window.innerWidth <= 900);

    return (
        <div className="mx-auto">
            {!isMobile && (
                <Chat  meetingLinkKey={meetingLinkKey}
                       customerSupportKey={customerSupportKey}
                       title='OD Customer Support'
                       welcomeMessage='Welsome to OD, how can we help you today?'
                       supportEmail='support@origindetector.com'    />
            )}

            {isMobile && (
                <ChatMobile  meetingLinkKey={meetingLinkKey}
                             customerSupportKey={customerSupportKey}
                             title='OD Customer Support'
                             welcomeMessage='Welsome to OD, how can we help you today?'
                             supportEmail='support@origindetector.com'/>
            )}
        </div>
    )
}

export default Home
