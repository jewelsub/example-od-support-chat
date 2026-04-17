# OD Support Chat
This is an example project to show how OD customer support works, Please update your keys before testing.

od-support-chat is a lightweight, embeddable customer support chat tool built for the Origin Detector (OD) platform. It allows companies to enable real-time communication between customers and support teams, helping improve trust, product verification, and issue resolution.

## Key Points
### Purpose:
This widget will allow live chat between your customers and your support teams directly within your website or platform.

### Core Value:
* Improves customer trust
* Helps with product authenticity verification
* Speeds up issue resolution

### Target Users:
Manufacturing companies and businesses using the Origin Detector (OD) platform

### Pricing Model:
* Free (no separate license fee)
* Only available to users with a paid OD platform subscription
* Considered a complimentary add-on, not a standalone product

### Positioning:
* Not sold independently, it is a complimentary chat widget with Origin Detector that our customer can use for their website.
* Acts as an extra support feature within the OD ecosystem

[![Watch the video](https://origindetector.com/awareness/customer-support-free-tool.webp)](https://www.youtube.com/watch?v=izE81ShGlLI)

## Development

- Install:
```bash
npm install
```

- Build the project:
```bash
npm run build
```

- Starting the sample web application:
```bash
npm run dev
```

- Updating OD Support Chat widget to latest version:
```bash
npm i od-support-chat
```

## How to create chat widget for your website

Login to https://origindetector.com

<img src="https://origindetector.com/user-guide/origindetector_com.webp" width="500">

Please get the **meetingLinkKey** and **customerSupportKey** form the Origin Detector website by opening the user profile. 
To obtain the meetingLinkKey and customerSupportKey from the Origin Detector website, follow these steps:

1. Open your user profile on the Origin Detector (OD) website. You can access this if you have created a company in OD.
2. Click on the "OptimizeTalk Support" menu item. This will direct you to your meeting room.
3. If this is your first time accessing this menu, you will be prompted to create a meeting room. During this process, you will need to set a password for the customer support team.

Once you've completed these steps, you will have access to the keys you need.


![Alt text](https://origindetector.com/user-guide/CustomerSupportMeetingMenu.webp?raw=true "Optional Title")

If you already created meeting room it will forward you to that meeting room in OptimizeTalk. You have to login using your meeting room
password.

<img src="https://origindetector.com/user-guide/LoginToYourMeeting.webp" width="500">

After you login there is top control bar where you can create shared link and support key.

![Alt text](https://origindetector.com/user-guide/ShareMeeting.webp?raw=true "Optional Title")

You will need __meetingLinkKey__ and __customerSupportKey__ to use in your website to add chat option. To set up the __meetingLinkKey__ 
and __customerSupportKey__, you can choose to allow a maximum of one guest for customer support 
purposes. This will prevent multiple guests from entering the room, which may not be ideal for support scenarios.

However, if you have a situation where you need to assist a group of guests at the same time and they should all see the 
same message, you can increase the maximum number of guests allowed.



![Alt text](https://origindetector.com/user-guide/CreateCustomerSupportChatKeys.webp?raw=true "Optional Title")

After you click on create link button, it will show the meeting link key which is the **meetingLinkKey** and the password
you provide will become **customerSupportKey** . Use these values for your chat widget parameters.

Finally you can use the Chat client for Origin Detector (OD) customer support tools for your website. Just import and use it with keys


```typescript
  import { Chat, ChatMobile } from "od-support-chat";
```


```typescript
  <Chat  meetingLinkKey={meetingLinkKey} 
         customerSupportKey={customerSupportKey}
         title='OD Customer Support'
         welcomeMessage='Welcome to OD, how can we help you today?'
         supportEmail='support@origindetector.com'    />
```

## Chat window for your customer on your website

<img src="https://origindetector.com/user-guide/customer-support-chat.webp" width="300">

## Cusotmer Support team view

<img src="https://origindetector.com/user-guide/customer-support.webp" height="500">

## If you are a manufacturer, please follow this manufacturer's onboarding guide to get used to with the Origin Detector (OD) platform.
### https://origindetector.com/user-guide/Manufacturer-Onboarding-Guide.pdf

### Alternative Mentioned:

Alternatively, you can use the OptimizeTalk.com meeting tool independently and at no cost, regardless of whether you use the od-support-chat.



