import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      header: {
        "connect_wallet": "Connect Wallet",
        "support": "Support",
        "legal": "Legal",
        "contact_us": "Contact us",
        "about": "About",
        "how_it_works": "How It Works",
        "terms_of_service": "Terms of Service",
        "privacy_policy": "Privacy Policy",
        "aml_kyc": "AML/KYC",
        "contact_us_description": "Get in touch with our support team",
        "about_description": "Learn more about our platform and mission",
        "how_it_works_description": "Learn how to use our platform",
        "terms_of_service_description": "Read our terms and conditions",
        "privacy_policy_description": "Learn how we handle your data",
        "aml_kyc_description": "Anti-Money Laundering (AML) and Know Your Customer (KYC) Requirements",
        Русский: "Russian",
        cryptoExchange: "Crypto Exchange",
      },

      about: {
        hero: {
          title: "About cryptoExchange",
          description: "Welcome to our platform, where we specialize exclusively in crypto-to-crypto swaps. Our mission is to continually expand our offerings, adding new coins and tokens every day. In the future, as we broaden our services, we will ensure they are delivered utilizing cutting-edge technologies such as blockchain and Web 3.0.",
        },
        features: {
          secureTitle: "Secure Platform",
          secureDesc: "Our platform operates without custodial wallets, ensuring the utmost safety and security for all transactions.",
          fastTitle: "Fast Exchanges",
          fastDesc: "Experience lightning-fast crypto swaps with most transactions completing within 30 minutes.",
          multipleTitle: "Multiple Currencies",
          multipleDesc: "Support for a wide range of cryptocurrencies including Bitcoin, Ethereum, USDT, and many more.",
        },
        payment: {
          title: "Supported Payment Options",
          description: "Explore our diverse payment options and choose the one that best suits your needs.",
        },
        cta: {
          title: "Ready to Start Trading?",
          description: "Join thousands of satisfied users who trust cryptoExchange for their crypto exchanges.",
          button: "Start Exchange",
        },
      },
      contact: {
        heroTitle: "Our team can help you",
        bullet1: "Create a tailored solution for payments and financial automation",
        bullet2: "Speed up progress with dedicated implementation support",
        bullet3: "Get personalized pricing with volume discounts",
        form: {
          name: "Name *",
          email: "Email address *",
          message: "Message *",
          namePlaceholder: "Your name",
          emailPlaceholder: "you@company.com",
          messagePlaceholder: "Tell us about your needs...",
          send: "Send Message",
        },
        helpTitle: "Need further assistance? We're happy to help.",
        helpDescription:
            "We offer various ways to get in touch. Choose the option that best suits your needs.",
        emailSupportTitle: "Email Support",
        emailSupportText: "Send us your questions anytime.",
        scheduleCallTitle: "Schedule a Call",
        scheduleCallText: "Book a time with our experts.",
      },"how": {
        "nav": {
          "convert": "Convert"
        },
        "steps": {
          "1": {
            "title": "Currency Selection: Sending and Receiving",
            "description": "Select your sending and receiving currencies."
          },
          "2": {
            "title": "Destination Currency Address Input",
            "description": "Input the receiving currency's address."
          },
          "3": {
            "title": "Transaction Completion: Sending Crypto",
            "description": "Complete the steps and send crypto to the provided address."
          },
          "4": {
            "title": "Confirmation Notification: Coin Receipt within 12 Minutes",
            "description": "Receive a notification within 12 minutes of coin receipt."
          }
        },
        "note": {
          "title": "Note",
          "text": "This process is fully automated."
        },
        "cta": "Try it now",
        "offer": {
          "title": "Exchange Ethereum or Solana Now",
          "subtitle": "Get 3% More USDT on your exchange",
          "description": "Take advantage of our limited-time offer! Exchange your Ethereum or Solana now for USDT and receive a 3% bonus on your transaction."
        },
        "features": {
          "bestRate": {
            "title": "Best exchange rates",
            "description": "Experience the best rates guaranteed for our clients."
          },
          "fast": {
            "title": "Quick transactions",
            "description": "Experience quick exchanges, with an average processing time of just 5 minutes."
          },
          "care": {
            "title": "Caring service",
            "description": "We value your privacy and ensure that your funds remain under your control."
          }
        }
      },
      info_banner: {
        title: "Transfer and exchange\ncrypto with ease",
        exchangeTitle: "Best Exchange Rates",
        exchangeDescription: "Get the most competitive rates for your trades",
        supportTitle: "24/7 Support",
        supportDescription: "Our support team is always ready to help!",
        securityTitle: "Secure Transactions",
        securityDescription: "Your funds are protected by advanced security",
      },
      top_pairs: {
        title: "Top Pairs on CryptoExchange",
        subtitle: "Other options to swap Crypto-to-Crypto",
        convertTab: "Convert",
      },
      convertor: {
        "youPay": "You Pay",
        "receive": "You Receive",
        "amount": "Amount",
        "address": "Receiving Address",
        "walletDetails": " Wallet Details",
        "back": " Back",
        "next": " Next",
        "currency": "Currency",
        title: "Convert Cryptocurrency",
        youReceive: "You Receive",
        proceed: "Proceed",
      },
      AML:{
        amlKyc:"AML Procedure cryptoExchange is dedicated to providing a safe and secure platform for all users. Our comprehensive Anti-Money Laundering (AML) Procedure forms the cornerstone of this commitment, ensuring the integrity of our financial services and safeguarding against illicit financial activities. A. Stringent User Verification: - Robust Registration: To access the Exchange Service, users undergo a streamlined yet rigorous registration process. This initial gateway involves providing essential information crucial for verifying your identity. This adheres to AML regulations and mitigates potential misuse of the platform. - Enhanced Verification Measures: In special cases, exceptional verification measures may be implemented. This might involve additional documentation or video conferencing, particularly when the source of funds is unclear or a personal relationship with a suspected sender exists. B. Proactive Transaction Monitoring: - Advanced Algorithms: Our system employs sophisticated algorithms to continuously monitor transactions for suspicious activity. This proactive approach helps identify transactions potentially associated with money laundering or other criminal endeavors. - Investigation Holds: If a transaction raises any type of concern, the Order may be temporarily on hold. This precautionary measure allows cryptoExchange to investigate the origin of the funds thoroughly. C. Transparency and Cooperation: - Your Commitment: By accepting our Terms and engaging in transactions, you acknowledge and agree to cooperate fully with our security measures. This includes providing complete and accurate details about the origin of your funds, especially during Order suspension or information requests. - Honesty and Accuracy: It is crucial to furnish true, up-to-date, and comprehensive information. You bear full responsibility for the accuracy and reliability of the details provided. Remember, honesty and transparency are fundamental to a secure financial ecosystem. D. Consequence of Non-Compliance: - Information Requests and Fund Freezing: Failure to provide information or supply false details can have serious consequences. If the provided information indicates potential criminal activity, cryptoExchange may freeze the funds temporarily. - Collaboration with Authorities: In such cases, we may collaborate with law enforcement agencies to return the frozen funds to their rightful victims. This underlines our commitment to combating financial crime. - Fee Deduction for Illicit Funds: If funds are associated with sanctions or financial crimes, a 20% fee will be deducted to facilitate their eventual withdrawal, and for exchange Gambling - High Risk a 10% Fee will be deducted to facilitate their eventual withdrawal. This arrangement ensures a smooth process and discourages future illicit activity. - cryptoExchange has the right to hold the amount of investigation for as long as the investigation requires, as long as this amount poses a risk to the platform. F. Exceptional Circumstances and Enhanced Scrutiny: In rare instances, where the source of funds remains unclear or a personal relationship with a suspected sender exists, cryptoExchange may request additional identity verification measures to appose to a chain analysis, These enhanced measures serve as an added layer of protection against potential misuse of the platform. G. Our Commitment to a Secure Financial Ecosystem: At cryptoExchange, we believe in fostering transparency, accountability, and strict adherence to AML regulations. Your understanding, cooperation, and commitment to these principles are essential in protecting our users and the broader financial community from the threats of money laundering and illicit financial activities. We are confident that, together, we can build a safe and secure platform for everyone."

      },
      Privacy:{
        "Title":"Privacy Policy",
        "PrivacyPolicy":"Privacy Policy Last updated 21 July 2024 This privacy notice for cryptoExchange (\"Company,\" \"we,\" \"us,\" or \"our\"), describes how and why we might collect, store, use, and/or share (\"process\") your information when you use our services (\"Services\"), such as when you: Visit our Platform at https://cryptoExchange.io/, or any Platform of ours that links to this privacy notice Engage with us in other related ways, including any sales, marketing, or events Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at support@cryptoExchange.io. SUMMARY OF KEY POINTS This summary provides key points from our privacy notice, but you can find out more details about any of these topics below. What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with cryptoExchange and the Services, the choices you make, and the products and features you use. Do we process any sensitive personal information? We do not process sensitive personal information. Do we receive any information from third parties? We do not receive any information from third parties. How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with the law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. In what situations and with which parties do we share personal information? We may share information in specific situations and with specific third parties. How do we keep your information safe? We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. How do you exercise your rights? The easiest way to exercise your rights is by filling out our data subject request form available here, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws. Want to learn more about what cryptoExchange does with any information we collect? please read below. WHAT INFORMATION DO WE COLLECT? Personal information you disclose to us In Short: We collect personal information that you provide to us. We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and services, when you participate in activities on the Services, or otherwise when you contact us. Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following: Names Phone numbers Email Addresses Usernames Passwords Billing Addresses Debit/Credit Card Numbers Sensitive Information. We do not process sensitive information. All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information. HOW DO WE PROCESS YOUR INFORMATION? In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with the law. We may also process your information for other purposes with your consent. We process your personal information for a variety of reasons, depending on how you interact with our Services, including To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION? In Short: We may share information in specific situations described in this section and/or with the following third parties. We may need to share your personal information in the following situations: Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company. HOW LONG DO WE KEEP YOUR INFORMATION? In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law. We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us to keep your personal information for longer than the period of time in which users have an account with us. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible. HOW DO WE KEEP YOUR INFORMATION SAFE? In Short: We aim to protect your personal information through a system of organizational and technical security measures. We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, the transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment. DO WE COLLECT INFORMATION FROM MINORS? In Short: We do not knowingly collect data from or market to children under 18 years of age. We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age of 18, please contact us at support@cryptoExchange.io. WHAT ARE YOUR PRIVACY RIGHTS? In Short: You may review, change, or terminate your account at any time. If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here:https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm. If you are located in Switzerland, the contact details for the data protection authorities are available here:https://www.edoeb.admin.ch/edoeb/en/home.html. Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us using the contact details provided in the section \"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?\" below. However, please note that this will not affect the lawfulness of the processing before its withdrawal, nor when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent. Opting out of marketing and promotional communications: You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section \"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?\" below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes. Account Information If you would at any time like to review or change the information in your account or terminate your account, you can: Log in to your account settings and update your user account. Log in to your account settings and update your user account. Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms, and/or comply with applicable legal requirements. If you have questions or comments about your privacy rights, you may email us at support@cryptoExchange.io. CONTROLS FOR DO-NOT-TRACK FEATURES Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (\"DNT\") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS? In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information. California Civil Code Section 1798.83, also known as the \"Shine The Light\" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below. If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request the removal of unwanted data that you publicly post on the Services. To request the removal of such data, please contact us using the contact information provided below. Include the email address associated with your account and a statement that you reside in California. We will ensure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.). DO WE MAKE UPDATES TO THIS NOTICE? In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws. We may update this privacy notice from time to time. The updated version will be indicated by an updated \"Revised\" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU? Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please submit a request form by clicking here.\n" +
            "HOW CAN YOU CONTACT US ABOUT THIS NOTICE? If you have questions or comments about this notice, Contact us at: Email: support@cryptoExchange.io Address: London, United Kingdom."
      },
      "thankYou": {
        "orderId": "Order ID:",
        "copyOrderId": "Copy",
        "youNeedToSend": "You need to send:",
        "currency": "Currency",
        "youWillReceive": "You will receive:",
        "sendFundsToAddress": "Send funds to the following address:",
        "amount": "Amount",
        "toThisAddress": "To this address",
        "yourWalletAddress": "Your wallet address",
        "copyAddress": "Copy",
        "steps": {
          "awaitingDeposit": "Awaiting deposit",
          "awaitingConfirmations": "Awaiting confirmations",
          "exchanging": "Exchanging",
          "sendingToYou": "Sending to you",
          "done": "Done"
        }
      },
      currency_menu: {
        selectCurrency: "Select Currency",
        search: "Search currencies",
      },

  "specialOffer": {
  "title": "Special Offer: Get +3% extra USDT when exchanging ETH! Limited time offer.",
      "buttonText": "Exchange Now"
},
  "banner": {
  "heading": "Exchange Crypto With Confidence",
      "subHeading": "Fast, secure, and reliable cryptocurrency exchange platform with the best rates in the market."
},
  "features": {
  "marketRates": {
    "title": "Market-Leading Rates",
        "description": "Get the most competitive exchange rates with our advanced pricing algorithm"
  },
  "instantExchange": {
    "title": "Instant Exchange",
        "description": "Lightning-fast transactions with 24/7 support to assist you anytime"
  },
  "securePayments": {
    "title": "Secure Payments",
        "description": "Multiple payment options with bank-grade security for your peace of mind"
  }
},
  "footer": {
  "stayUpdated": "Stay Updated",
      "subscribe": "Subscribe to our newsletter for the latest crypto news and updates.",
      "enterEmail": "Enter your email",
      "companyInfo": {
    "title": "cryptoExchange",
        "email": "support@cryptoExchange.io",
        "phone": "+1 (555) 123-4567",
        "address": "New York, NY 10001"
  },
  "popularPairs": "Popular Pairs",
      "quickLinks": "Quick Links",
      "legal": "Legal",
      "quickLinksItems": {
    "aboutUs": "About Us",
        "howItWorks": "How It Works",
        "contactSupport": "Contact Support"
  },
  "legalItems": {
    "privacyPolicy": "Privacy Policy",
        "termsOfService": "Terms of Service",
        "amlPolicy": "AML Policy"
  },
  "stayWithUs": "Stay with us",
      "copyright": "© 2025 cryptoExchange. All rights reserved."
},
"contactUs": {
  "title": "Contact us",
      "description": "Get in touch with our team for personalized support and solutions.",
      "buttonText": "Let's get you started!"
},
  "howItWorks": {
  "title": "How does it work!",
      "description": "Learn how our process works, step by step.",
      "steps": {
    "consultation": {
      "title": "Initial Consultation",
          "description": "Schedule a call with our experts"
    },
    "solution": {
      "title": "Get Your Solution",
          "description": "Receive a tailored plan for your needs"
    }
  },
  "seeMore": "See more"
},
      TermsService:{
        "Tile": "Terms of Service",
        "TermsService": "Terms & Conditions Last updated 10 October 2024 1. AGREEMENT TO TERMS These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”), and cryptoExchange LTD, doing business as cryptoExchange LTD (\"cryptoExchange,\" cryptoExchange LTD,“we,\" “us,\" or “our”), concerning your access to and use of the https://cryptoExchange.io/ web platform as well as any other media form, media channel, mobile web platform or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). We are registered in the United Kingdom and have our registered office in London. You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE Platform AND YOU MUST DISCONTINUE USE IMMEDIATELY. Supplemental terms and conditions or documents that may be posted on the Platform from time to time are hereby expressly incorporated herein by reference. In our sole discretion, we reserve the right to make changes or modifications to these Terms of Use from time to time. We will alert you about any changes by updating the “Last Updated” date of these Terms of Use, and you waive any right to receive specific notice of each such change. Please ensure that you check the applicable Terms every time you use our Platforms so that you understand which terms apply. You will be subject to and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Platform after the date such revised Terms of Use are posted. The information provided on the Platform is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation, or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Platform from other locations do so on their initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable. The Platform is not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use this site. You may not use the Platform in a way that would violate the Gramm-Leach-Bliley Act (GLBA). The Platform is intended for users who are at least 13 years of age. All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Site. If you are a minor, you must have your parent or guardian read and agree to these Terms of Use before using the site.\n" +
            "2. INTELLECTUAL PROPERTY RIGHTS Unless otherwise indicated, the Platform is our proprietary property, and all source code, databases, functionality, software, platform designs, audio, video, text, photographs, and graphics on the Platform(collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United Kingdom, international copyright laws, and international conventions. The Content and the Marks are provided on the Platform “AS IS” for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Platform and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission. Provided that you are eligible to use the Site, you are granted a limited license to access and use the Platform and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content, and the Marks.\n" +
            "3. USER REPRESENTATIONS By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity, and you agree to comply with these Terms of Use; (4) you are not under the age of 13; (5) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Site; (6) you will not access the Platform through automated or non-human means, whether, through a bot, script, or otherwise; (7) you will not use the Platform for any illegal or unauthorized purpose; and (8) your use of the Platform will not violate any applicable law or regulation. If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any current or future use of the Platform(or any portion thereof).\n" +
            "4. USER REGISTRATION You are required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.\n" +
            "5. PROHIBITED ACTIVITIES You may not access or use the Platform for any purpose other than that for which we make the Platform available. The Platform may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. As a user of the Site, you agree not to: Systematically retrieve data or other content from the Platform to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us. Tricking, defrauding, or misleading us and other users, especially in any attempt to learn sensitive account information such as user passwords. Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Platform and/or the Content contained therein. Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site. Use any information obtained from the Platform to harass, abuse, or harm another person. Make improper use of our support services or submit false reports of abuse or misconduct. Use the Platform in a manner inconsistent with any applicable laws or regStaticContentListations. Engage in unauthorized framing of or linking to the Site. Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Platform or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site. Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools. Delete the copyright or other proprietary rights notice from any Content. Attempt to impersonate another user or person or use the username of another user. Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (“GIFs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “PCM”). Interfere with, disrupt, or create an undue burden on the Platform or the networks or services connected to the Site. Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Platform to you. Attempt to bypass any measures of the Platform designed to prevent or restrict access to the Site, or any portion of the site. Copy or adapt the Site’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code. Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site. Except as may be the result of a standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software. Use a buying agent or purchasing agent to make purchases on the Site. Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means to send unsolicited emails, or create user accounts by automated means or under false pretenses. Use the Platform as part of any effort to compete with us or otherwise use the Platform and/or the Content for any revenue-generating endeavor or commercial enterprise. cryptoExchange does not allow any third-party transfers; therefore, to complete an order, you must give and receive money in your name from an account that belongs to you. If we receive money from an account or name that is not registered with cryptoExchange, your order will be canceled. cryptoExchange regularly changes its addresses in all payment methods, users must always double-check the address provided in the order and not from their history. cryptoExchange is not liable for any errors that may occur. Users should double-check their submissions of their TRC20 addresses and the Names and Numbers of their payment methods. cryptoExchange is not responsible for any transfers that go to the wrong locations; we only use the information you give us to complete transactions.\n" +
            "Users should take caution while selecting their platforms since we do not take responsibility for any fraudulent platforms that users choose to use as their wallets as stated we only complete transactions with what the clients provide us as their information.\n" +
            "6. USER-GENERATED CONTRIBUTIONS The Platform does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, \"Contributions\"). Contributions may be viewable by other users of the Platform and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the PlatformPrivacy Policy. When you create or make available any Contributions, you thereby represent and warrant that: The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party. You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Platform to use your Contributions in any manner contemplated by the Platform and these Terms of Use. You have the written consent, release, and/or permission of each identifiable person in your Contributions to use the name or likeness of each such identifiable person to enable inclusion and use of your Contributions in any manner contemplated by the Platform and these Terms of Use. Your Contributions are not false, inaccurate, or misleading. Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation. Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us). Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone. Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person or to promote violence against a specific person or class of people. Your Contributions do not violate any applicable law, regulation, or rule. Your Contributions do not violate the privacy or publicity rights of any third party. Your Contributions do not violate any applicable law concerning child pornography or otherwise intended to protect the health or well-being of minors. Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap. Your Contributions do not otherwise violate or link to material that violates, any provision of these Terms of Use, or any applicable law or regulation.\n" +
            "Any use of the Platform in violation of the foregoing violates these Terms of Use and may result in, among other things, termination or suspension of your rights to use the Site.\n" +
            "7. USER-GENERATED CONTRIBUTIONS You and the Platform agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings). By submitting suggestions or other feedback regarding the Site, you agree that we can use and share such feedback for any purpose without compensation to you. We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Site. You are solely responsible for your Contributions to the Platform and you expressly agree to exonerate us from any responsibility and to refrain from any legal action against us regarding your Contributions.\n" +
            "8. GUIDELINES FOR REVIEWS We may provide you with areas on the Platform to leave reviews or ratings. When posting a review, you must comply with the following criteria: (1) you should have firsthand experience with the person/entity being reviewed; (2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hate language; (3) your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability; (4) your reviews should not contain references to illegal activity; (5) you should not be affiliated with competitors if posting negative reviews; (6) you should not make any conclusions as to the legality of conduct; (7) you may not post any false or misleading statements; and (8) you may not organize a campaign encouraging others to post reviews, whether positive or negative. We may accept, reject, or remove reviews at our sole discretion. We have absolutely no obligation to screen reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not endorsed by us and do not necessarily represent our opinions or the views of any of our affiliates or partners. We do not assume liability for any review or any claims, liabilities, or losses resulting from any review. By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully-paid, assignable, and sublicensable right and license to reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content relating to reviews.\n" +
            "9. GUIDELINES FOR REVIEWS We may provide you with areas on the Platform to leave reviews or ratings. When posting a review, you must comply with the following criteria: (1) you should have firsthand experience with the person/entity being reviewed; (2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hate language; (3) your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability; (4) your reviews should not contain references to illegal activity; (5) you should not be affiliated with competitors if posting negative reviews; (6) you should not make any conclusions as to the legality of conduct; (7) you may not post any false or misleading statements; and (8) you may not organize a campaign encouraging others to post reviews, whether positive or negative. We may accept, reject, or remove reviews at our sole discretion. We have absolutely no obligation to screen reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not endorsed by us and do not necessarily represent our opinions or the views of any of our affiliates or partners. We do not assume liability for any review or any claims, liabilities, or losses resulting from any review. By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully-paid, assignable, and sublicensable right and license to reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content relating to reviews.\n" +
            "10. SUBMISSIONS You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Platform(\"Submissions\") provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.\n" +
            "11. Platform MANAGEMENT We reserve the right, but not the obligation, to (1) monitor the Platform for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Platform or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Platform in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.\n" +
            "12. PRIVACY POLICY We care about data privacy and security. By using the Site, you agree to be bound by our Privacy Policy posted on the Site, which is incorporated into these Terms of Use. Please be advised the Platform is hosted in the United Kingdom. If you access the Platform from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United Kingdom, then through your continued use of the Site, you are transferring your data to the United Kingdom, and you agree to have your data transferred to and processed in the United Kingdom. Further, we do not knowingly accept, request, or solicit information from children or knowingly market to children. Therefore, in accordance with the U.K Children’s Online Privacy Protection Act, if we receive actual knowledge that anyone under the age of 13 has provided personal information to us without the requiPlatformand verifiable parental consent, we will delete that information from the Platforms quickly as is reasonably practical.\n" +
            "13. TERM AND TERMINATION These Terms of Use shall remain in full force and effect while you use the Site. Without limiting any other provision of these terms of use, we reserve the right to, in our sole discretion and without notice or liability, deny access to and use of the Platform(including blocking certain IP addresses), to any person for any reason or no reason, including without limitation for breach of any representation, warranty, or covenant contained in these terms of use or of any applicable law or regulation. we may terminate your use or participation in the Platform and delete your account and any content or information that you posted at any time, without warning, at our sole discretion. If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress. NOTE: cryptoExchange has the right to return the amount paid to the source of funds if it differs from the order amount.\n" +
            "14. MODIFICATIONS AND INTERRUPTIONS We reserve the right to change, modify, or remove the contents of the Platform at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Platform without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site. We cannot guarantee the Platform will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Platform at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Platform during any downtime or discontinuance of the Site. Nothing in these Terms of Use will be construed to obligate us to maintain and support the Platformor to supply any corrections, updates, or releases in connection therewith;Additionally, If you send less than the order amount, you will be refunded after deducting the fees from the amount.\n" +
            "15. GOVERNING LAW These conditions are governed by and interpreted following the laws of Germany, and the use of the United Nations Convention of Contracts for the International Sale of Goods is expressly excluded. If your habitual residence is in the EU, and you are a consumer, you additionally possess the protection provided to you by obligatory provisions of the law of your country of residence. cryptoExchange and yourself both agree to submit to the non-exclusive jurisdiction of the courts of London, which means that you may make a claim to defend your consumer protection rights in regard to these Conditions of Use in Germany, or in the EU country in which you reside.\n" +
            "16. DISPUTE RESOLUTION Binding Arbitration Any dispute arising out of or in connection with this contract, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by the International Commercial Arbitration Court under the European Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146) according to the Rules of this ICAC, which, as a result of referring to it, is considered as the part of this clause. The number of arbitrators shall be three (3). The seat, or legal place, of arbitration, shall be London, United Kingdom The language of the proceedings shall be English. The governing law of the contract shall be the substantive law of the United Kingdom Restrictions The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class-action procedures, and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons. Exceptions to Arbitration The Parties agree that the following Disputes are not subject to the above provisions concerning binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable, and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.\n" +
            "17. CORRECTIONS There may be information on the Platform that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Platform at any time, without prior notice.\n" +
            "18. DISCLAIMER The Platform is provided on an as-is and as-available basis. you agree that your use of the Platform and our services will be at your sole risk. to the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the Platform and your use thereof, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. we make no warranties or representations about the accuracy or completeness of the site’s content or the content of any websites linked to the Platform and we will assume no liability or responsibility for any (1) errors, mistakes, or inaccuracies of content and materials, (2) personal injury or property damage, of any nature whatsoever, resulting from your access to and use of the site, (3) any unauthorized access to or use of our secure servers and/or any and all personal information and/or financial information stored therein, (4) any interruption or cessation of transmission to or from the site, (5) any bugs, viruses, trojan horses, or the like which may be transmitted to or through the Platform by any third party, and/or (6) any errors or omissions in any content and materials or for any loss or damage of any kind incurred as a result of the use of any content posted, transmitted, or otherwise made available via the site. we do not warrant, endorse, guarantee, or assume responsibility for any product or service advertised or offered by a third party through the site, any hyperlinked website, or any web platform or mobile application featured in any banner or other advertising, and we will not be a party to or in any way be responsible for monitoring any transaction between you and any third-party providers of products or services. as with the purchase of a product or service through any medium or in any environment, you should use your best judgment and exercise caution where appropriate.\n" +
            "cryptoExchange prohibits all forms of scamming, including but not limited to:\n" +
            "Attempting to defraud or deceive other users, Using false or misleading information to obtain goods or services, Creating fake accounts or impersonating other users which also refers to not accepting third-party payments, Engaging in any other behavior that is fraudulent or deceptive.\n" +
            "If cryptoExchange suspects that a user is engaging in scamming, we may immediately freeze the user's funds or order amount sent and suspend the user's account.\n" +
            "cryptoExchange also reserves the right to bring legal action against any user who engages in scamming. By using cryptoExchange, you agree to these terms and conditions and agree that cryptoExchange has the right to take these actions.\n" +
            "19. LIMITATIONS OF LIABILITY In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages. notwithstanding anything to the contrary contained herein, our liability to you for any cause whatsoever and regardless of the form of the action, will at all times be limited to the amount paid, if any, by you to us during the three (3) month period before any cause of action arising. certain state laws and international laws do not allow limitations on implied warranties or the exclusion or limitation of certain damages. if these laws apply to you, some or all of the above disclaimers or limitations may not apply to you, and you may have additional rights.\n" +
            "20. INDEMNIFICATION You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) use of the Site; (2) breach of these Terms of Use; (3) any breach of your representations and warranties outlined in these Terms of Use; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Platform with whom you connected via the Site. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.\n" +
            "21. USER DATA We will maintain certain data that you transmit to the Platform to manage it’s performance, as well as data relating to your use of the Site. Although we perform routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.\n" +
            "22. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email, and on the Site, satisfy any legal requirement that such communication is in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.\n" +
            "CAUTION:\n" +
            "If there is an error in the order receiving details provided by the user for any transaction, we do not bear responsibility for the funds or where they went, nor are we responsible for depositing, refunding, or returning any funds to the user; thus, the user is solely responsible for the information provided in the order; we only send to the information provided in the order.\n" +
            "CAUTION: In the event of any issues, occasions, or funds lost, incorrect receiving details, information, or holds from online wallets or AML funds, or any other type of issue that may arise, We will request the user's KYC, bank statement, photos, videos, and any type of proof of funding depending on the payment method (online wallet, bank account, cryptocurrency wallet, etc..) In some situations, an online meeting will be required, and all communication regarding any type of incident or problem-solving will be through emails alone. support@cryptoExchange.io CAUTION: Any refund request made after the order has been processed may incur a deduction of 2% to 4%.\n" +
            "23. CALIFORNIA USERS AND RESIDENTS If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.\n" +
            "24.﻿Private Label General Terms By starting to choose your private-label plan, you confirm that you are in agreement with cryptoExchange and bound by the terms of services contained in the Terms Of Use outlined below. These Terms apply to the entire platform and any email or other type of communication between you and cryptoExchange. Under no circumstances cryptoExchange is responsible for any direct, Indirect, special, incidental, or consequential damages, including improper or false use of the private label plan, fraudulent use, incorrect transfers, or misleading orders. You are solely responsible for the results of any transactions done at your platform after generating your private label platform plan as you see fit.\n" +
            "25. AML Procedure\n" +
            "To conduct an Exchange in the Service, User registration and login are mandatory requirements, along with the provision of personal data. When registering, users are required to provide the necessary information to verify their identity and comply with Anti-Money Laundering (AML) regulations. However, in cases where the User sends funds that are clearly associated with criminal activity, the User's Order may be temporarily suspended. This suspension is in place to allow cryptoExchange to request additional details regarding the origin of the funds until the requested information is provided. cryptoExchange reserves the right to determine a direct link to criminal activity based on information from business partners, public sources, victim complaints against cryptoExchange, and law enforcement requests. By accepting these Terms, you acknowledge and agree that the transaction you send can be subject to verification using the Service's security system. Additionally, by accepting these Terms, you acknowledge and agree to provide full details of the origin of the funds you send. You further confirm the honesty and legality of the receipt of these funds upon the suspension of the Order and the corresponding request by cryptoExchange. By accepting these Terms, you also agree and warrant that you will provide true, accurate, current, and complete information regarding the origin of the funds sent. You assume full responsibility for the accuracy, completeness, and reliability of the information provided. The data regarding the origin of funds must be provided directly by the sender of funds during the Order process. If you refuse to provide data about the origin of the funds sent or provide false information, and if the data you provide confirms your connection to criminal activity, cryptoExchange reserves the right to freeze the funds for subsequent return to the victims with the assistance of law enforcement agencies. In exceptional cases where the User cannot provide sufficient evidence of the source of the funds received, or in situations where the sender of the funds is personally acquainted with the alleged criminal who sent the funds, the User may be requested to undergo identity verification as an exception.\n" +
            "cryptoExchange reserve the right to change prices and revise or terminate the plan in any moment of violation of the platform’s terms of use or misuse.\n" +
            "Payment & Agreement If any of our plans or add-ons are choosen, user agrees to pay all the fees and amounts prior to generating the private-label, in accordance to the billing terms and requirements Depending on the agreement, The Agreement constitutes the entirety between The business and cryptoExchange. You may be subject to additional terms and conditions that apply when you purchase a plan or other services from us, which we will provide to you at the time of it.\n" +
            "CONTACT US Please contact us at: Email: support@cryptoExchange.io Address: London, United Kingdom.\n"
      },
"reviews": {
  "title": "Our clients reviews",
      "testimonials": [
    {
      "name": "Michael Johnson",
      "role": "Client",
      "content": "Fast and reliable service! Exchanged crypto without any issues."
    },
    {
      "name": "Emma Williams",
      "role": "Client",
      "content": "Great rates and instant transactions. Highly recommend!"
    },
    {
      "name": "Daniel Brown",
      "role": "Client",
      "content": "Tried different exchangers, but this one is the best. Transparent and secure."
    },
    {
      "name": "Sophia Davis",
      "role": "Client",
      "content": "Excellent support team! Helped me resolve an issue quickly."
    },
    {
      "name": "James Wilson",
      "role": "Client",
      "content": "Smooth experience from start to finish. Will use again."
    },
    {
      "name": "Olivia Martinez",
      "role": "Client",
      "content": "I was skeptical at first, but everything went perfectly. Safe and fast!"
    },
    {
      "name": "William Anderson",
      "role": "Client",
      "content": "Great customer service! Quick replies and professional approach."
    },
    {
      "name": "Isabella Thomas",
      "role": "Client",
      "content": "Easy-to-use platform and fair exchange rates. Will definitely return!"
    },
    {
      "name": "Ethan White",
      "role": "Client",
      "content": "Best exchanger I've used so far. No hidden fees, just smooth transactions!"
    },
    {
      "name": "Charlotte Harris",
      "role": "Client",
      "content": "Super fast transaction and excellent service. 10/10!"
    }
  ]
},
},
  },
  ru: {
    translation: {
      header: {
        "connect_wallet": "Подключить кошелек",
        "support": "Поддержка",
        "legal": "Юридическая информация",
        "contact_us": "Свяжитесь с нами",
        "about": "О нас",
        "how_it_works": "Как это работает",
        "terms_of_service": "Условия использования",
        "privacy_policy": "Политика конфиденциальности",
        "aml_kyc": "AML/KYC",
        "contact_us_description": "Свяжитесь с нашей командой поддержки",
        "about_description": "Узнайте больше о нашей платформе и миссии",
        "how_it_works_description": "Узнайте, как использовать нашу платформу",
        "terms_of_service_description": "Прочитайте наши условия и положения",
        "privacy_policy_description": "Узнайте, как мы обрабатываем ваши данные",
        "aml_kyc_description": "Требования по борьбе с отмыванием денег (AML) и соблюдению требований KYC",
        Русский: "Русский",
        cryptoExchange: "Криптовалютная биржа",
      },
      about: {
        hero: {
          title: "О cryptoExchange",
          description: "Добро пожаловать на нашу платформу, специализирующуюся исключительно на обмене криптовалют. Наша цель — постоянно расширять список доступных монет и токенов. В будущем мы будем использовать передовые технологии, такие как блокчейн и Web 3.0, чтобы улучшить наши услуги.",
        },
        features: {
          secureTitle: "Безопасная платформа",
          secureDesc: "Мы не используем кастодиальные кошельки, что обеспечивает максимальную безопасность всех транзакций.",
          fastTitle: "Быстрые обмены",
          fastDesc: "Молниеносные криптообмены — большинство сделок завершается в течение 30 минут.",
          multipleTitle: "Много валют",
          multipleDesc: "Поддержка множества криптовалют, включая Bitcoin, Ethereum, USDT и многие другие.",
        },
        payment: {
          title: "Поддерживаемые способы оплаты",
          description: "Изучите различные способы оплаты и выберите наиболее подходящий для вас.",
        },
        cta: {
          title: "Готовы начать торговлю?",
          description: "Присоединяйтесь к тысячам довольных пользователей, которые доверяют cryptoExchange.",
          button: "Начать обмен",
        },
      },
      Privacy:{
        "Title": "Политика конфиденциальности",
        "PrivacyPolicy": "Политика конфиденциальности, последнее обновление от 21 июля 2024 г. Это уведомление о конфиденциальности для cryptoExchange (\"Компания\", \"мы\", \"нас\" или \"наш\") описывает, как и почему мы можем собирать, хранить, использовать и/или передавать (\"обрабатывать\") вашу информацию, когда вы пользуетесь нашими услугами (\"Услуги\"), например, когда вы: Посещаете нашу платформу по адресу https://cryptoExchange.io/ или любую нашу платформу, которая ссылается на данное уведомление о конфиденциальности, взаимодействуете с нами другими связанными способами, включая любые вопросы или озабоченности по продажам, маркетингу или мероприятиям? Ознакомление с настоящим уведомлением о конфиденциальности поможет вам понять ваши права на неприкосновенность частной жизни и варианты выбора. Если вы не согласны с нашей политикой и практикой, пожалуйста, не пользуйтесь нашими услугами. Если у вас все еще есть какие-либо вопросы или сомнения, пожалуйста, свяжитесь с нами по адресу support@cryptoExchange.io. КРАТКОЕ ИЗЛОЖЕНИЕ КЛЮЧЕВЫХ МОМЕНТОВ В этом кратком изложении приведены ключевые моменты из нашего уведомления о конфиденциальности, но вы можете ознакомиться с более подробной информацией по любому из этих разделов ниже. Какую личную информацию мы обрабатываем? Когда вы посещаете, используете или перемещаетесь по нашим Сервисам, мы можем обрабатывать личную информацию в зависимости от того, как вы взаимодействуете с cryptoExchange и Сервисами, какой выбор вы делаете, а также какие продукты и функции вы используете. Обрабатываем ли мы какую-либо конфиденциальную личную информацию? Мы не обрабатываем конфиденциальную личную информацию. Получаем ли мы какую-либо информацию от третьих лиц? Мы не получаем никакой информации от третьих лиц. Как мы обрабатываем вашу информацию? Мы обрабатываем вашу информацию для предоставления, улучшения и администрирования наших Услуг, связи с вами, обеспечения безопасности и предотвращения мошенничества, а также для соблюдения законодательства. Мы также можем обрабатывать вашу информацию для других целей с вашего согласия. Мы обрабатываем вашу информацию только тогда, когда у нас есть веские юридические основания для этого. В каких ситуациях и с какими сторонами мы делимся личной информацией? Мы можем делиться информацией в определенных ситуациях и с конкретными третьими лицами. Как мы обеспечиваем безопасность вашей информации? У нас есть организационные и технические процессы и процедуры для защиты вашей личной информации. Однако ни одна электронная передача через Интернет или технология хранения информации не могут гарантировать 100%-ную безопасность, поэтому мы не можем обещать или гарантировать, что хакеры, киберпреступники или другие неавторизованные третьи лица не смогут нарушить нашу систему безопасности и ненадлежащим образом собрать, получить доступ, украсть или изменить вашу информацию. Каковы ваши права? В зависимости от того, где вы находитесь географически, применимое законодательство о конфиденциальности может означать, что у вас есть определенные права в отношении вашей личной информации. Каковы ваши права? В зависимости от того, где вы находитесь географически, применимое законодательство о конфиденциальности может означать, что у вас есть определенные права в отношении вашей личной информации. Как вы пользуетесь своими правами? Самый простой способ воспользоваться своими правами - заполнить форму запроса субъекта данных, доступную здесь, или связаться с нами. Мы рассмотрим любой запрос и примем меры в соответствии с применимыми законами о защите данных. Хотите узнать больше о том, что cryptoExchange делает с любой собираемой нами информацией? пожалуйста, прочтите ниже. КАКУЮ ИНФОРМАЦИЮ МЫ СОБИРАЕМ? Личная информация, которую вы нам раскрываете Вкратце: Мы собираем личную информацию, которую вы нам предоставляете. Мы собираем личную информацию, которую вы добровольно предоставляете нам, когда регистрируетесь на Сервисах, выражаете заинтересованность в получении информации о нас или наших продуктах и услугах, когда участвуете в мероприятиях на Сервисах или иным образом связываетесь с нами. Личная информация, предоставленная Вами. Личная информация, которую мы собираем, зависит от контекста вашего взаимодействия с нами и Услугами, выбора, который вы делаете, а также продуктов и функций, которые вы используете. Личная информация, которую мы собираем, может включать следующее: Имена, номера телефонов, Адреса электронной почты, Имена пользователей, пароли, платежные адреса, Номера дебетовых/кредитных карт, Конфиденциальная информация. Мы не обрабатываем конфиденциальную информацию. Вся личная информация, которую вы нам предоставляете, должна быть достоверной, полной и точной, и вы должны уведомлять нас о любых изменениях в такой личной информации. КАК МЫ ОБРАБАТЫВАЕМ ВАШУ ИНФОРМАЦИЮ? Вкратце: Мы обрабатываем вашу информацию для предоставления, улучшения и администрирования наших услуг, связи с вами, обеспечения безопасности и предотвращения мошенничества, а также для соблюдения требований закона. Мы также можем обрабатывать вашу информацию для других целей с вашего согласия. Мы обрабатываем вашу личную информацию по целому ряду причин, в зависимости от того, как вы взаимодействуете с нашими Сервисами, в том числе для облегчения создания учетной записи и аутентификации, а также для управления учетными записями пользователей иным образом. Мы можем обрабатывать вашу информацию, чтобы вы могли создать свою учетную запись и войти в нее, а также поддерживать ее в рабочем состоянии. КОГДА И С КЕМ МЫ ДЕЛИМСЯ ВАШЕЙ ЛИЧНОЙ ИНФОРМАЦИЕЙ? Вкратце: Мы можем делиться информацией в конкретных ситуациях, описанных в этом разделе, и/или со следующими третьими лицами. Нам может потребоваться предоставить вашу личную информацию в следующих ситуациях: Передача бизнеса. Мы можем предоставлять или передавать вашу информацию в связи с любым слиянием, продажей активов компании, финансированием или приобретением всего или части нашего бизнеса другой компанией или в ходе переговоров о нем. КАК ДОЛГО МЫ ХРАНИМ ВАШУ ИНФОРМАЦИЮ? Вкратце: Мы храним вашу информацию столько, сколько необходимо для достижения целей, изложенных в настоящем уведомлении о конфиденциальности, если иное не требуется законом. Мы будем хранить вашу личную информацию только до тех пор, пока это необходимо для целей, изложенных в настоящем уведомлении о конфиденциальности, за исключением случаев, когда более длительный срок хранения требуется или разрешен законом (например, по налоговым, бухгалтерским или другим юридическим требованиям). Ни одна из целей настоящего уведомления не требует от нас хранить вашу личную информацию дольше, чем тот период времени, в течение которого пользователи имеют у нас учетную запись. Когда у нас не будет постоянной законной коммерческой необходимости обрабатывать вашу личную информацию, мы либо удалим, либо обезличим такую информацию, либо, если это невозможно (например, из-за того, что ваша личная информация была сохранена в резервных архивах), мы надежно сохраним вашу личную информацию и изолируем ее от любой дальнейшей обработки до тех пор, пока удаление не станет возможным. КАК МЫ ОБЕСПЕЧИВАЕМ БЕЗОПАСНОСТЬ ВАШЕЙ ИНФОРМАЦИИ? Вкратце: мы стремимся защитить вашу личную информацию с помощью системы организационных и технических мер безопасности. Мы внедрили соответствующие и разумные технические и организационные меры безопасности, направленные на защиту безопасности любой личной информации, которую мы обрабатываем. Однако, несмотря на наши меры предосторожности и усилия по защите вашей информации, никакая электронная передача через Интернет или технология хранения информации не могут гарантировать 100%-ную безопасность, поэтому мы не можем обещать или гарантировать, что хакеры, киберпреступники или другие неавторизованные третьи лица не смогут обойти нашу систему безопасности и ненадлежащим образом получить доступ к вашей информации., украсть или изменить вашу информацию. Несмотря на то, что мы сделаем все возможное для защиты вашей личной информации, вы передаете личную информацию в наши Службы и из них на свой страх и риск. Вы должны получать доступ к Сервисам только в безопасной среде. СОБИРАЕМ ЛИ МЫ ИНФОРМАЦИЮ ОТ НЕСОВЕРШЕННОЛЕТНИХ? Вкратце: мы сознательно не собираем данные о детях младше 18 лет и не продаем их им. Мы сознательно не запрашиваем данные о детях младше 18 лет и не продаем их им. Используя Услуги, вы подтверждаете, что вам исполнилось не менее 18 лет или что вы являетесь родителем или опекуном такого несовершеннолетнего лица, и даете согласие на использование Услуг таким несовершеннолетним иждивенцем. Если мы узнаем, что была собрана личная информация от пользователей младше 18 лет, мы деактивируем учетную запись и примем разумные меры для оперативного удаления таких данных из наших записей. Если вам станет известно о каких-либо данных, которые мы, возможно, собрали от детей младше 18 лет, пожалуйста, свяжитесь с нами по адресу support@cryptoExchange.io. КАКОВЫ ВАШИ ПРАВА НА КОНФИДЕНЦИАЛЬНОСТЬ? Вкратце: вы можете пересмотреть, изменить или закрыть свою учетную запись в любое время. Если вы находитесь в Европейской экономической зоне или Великобритании и считаете, что мы незаконно обрабатываем вашу личную информацию, у вас также есть право подать жалобу в местный орган по надзору за защитой данных. Вы можете найти их контактные данные here:https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm. Если вы находитесь в Швейцарии, вы можете получить контактную информацию органов по защите данных here:https://www.edoeb.admin.ch/edoeb/en/home.html. Отзыв вашего согласия: Если мы полагаемся на ваше согласие на обработку вашей личной информации, которое может быть явным и/или подразумеваемым согласием в зависимости от применимого законодательства, вы имеете право отозвать свое согласие в любое время. Вы можете отозвать свое согласие в любое время, связавшись с нами, используя контактные данные, указанные в разделе \"КАК ВЫ МОЖЕТЕ СВЯЗАТЬСЯ С НАМИ ПО ПОВОДУ ДАННОГО УВЕДОМЛЕНИЯ?\" ниже. Однако, пожалуйста, обратите внимание, что это не повлияет на законность обработки до ее отзыва, а также, когда это позволяет применимое законодательство, не повлияет на обработку вашей личной информации, проводимую на законных основаниях, отличных от согласия. Отказ от маркетинговых и рекламных сообщений.: Вы можете отказаться от подписки на наши маркетинговые и рекламные рассылки в любое время, нажав на ссылку для отказа от подписки в электронных письмах, которые мы отправляем, или связавшись с нами, используя данные, указанные в разделе \"КАК ВЫ МОЖЕТЕ СВЯЗАТЬСЯ С НАМИ ПО ПОВОДУ ЭТОГО УВЕДОМЛЕНИЯ?\" ниже. После этого вы будете удалены из списков рассылки. Однако мы по—прежнему можем поддерживать с вами связь - например, отправлять вам сообщения, связанные с обслуживанием, которые необходимы для администрирования и использования вашей учетной записи, отвечать на запросы об обслуживании или в других целях, не связанных с маркетингом. Информация об учетной записи Если вы в любой момент захотите просмотреть или изменить информацию в своей учетной записи или закрыть свою учетную запись, вы можете: Войти в настройки своей учетной записи и обновить свою учетную запись пользователя. Войдите в настройки своей учетной записи и обновите свою учетную запись пользователя. По вашему запросу о закрытии вашей учетной записи мы деактивируем или удалим вашу учетную запись и информацию из наших активных баз данных. "
      },
  "footer": {
  "stayUpdated": "Оставайтесь в курсе",
      "subscribe": "Подпишитесь на нашу рассылку, чтобы получать последние новости о криптовалюте.",
      "enterEmail": "Введите ваш email",
      "companyInfo": {
    "title": "cryptoExchange",
        "email": "support@cryptoExchange.io",
        "phone": "+1 (555) 123-4567",
        "address": "Нью-Йорк, NY 10001"
  },
  "popularPairs": "Популярные пары",
      "quickLinks": "Быстрые ссылки",
      "legal": "Юридические документы",
      "quickLinksItems": {
    "aboutUs": "О нас",
        "howItWorks": "Как это работает",
        "contactSupport": "Поддержка"
  },
  "legalItems": {
    "privacyPolicy": "Политика конфиденциальности",
        "termsOfService": "Условия использования",
        "amlPolicy": "Политика по противодействию отмыванию денег"
  },
  "stayWithUs": "Оставайтесь с нами",
      "copyright": "© 2025 cryptoExchange. Все права защищены."
},
"contactUs": {
  "title": "Свяжитесь с нами",
      "description": "Свяжитесь с нашей командой для персонализированной поддержки и решений.",
      "buttonText": "Давайте начнем!"
},
  "howItWorks": {
  "title": "Как это работает!",
      "description": "Узнайте, как работает наш процесс, шаг за шагом.",
      "steps": {
    "consultation": {
      "title": "Начальная консультация",
          "description": "Запланируйте звонок с нашими экспертами"
    },
    "solution": {
      "title": "Получите решение",
          "description": "Получите индивидуальный план, соответствующий вашим потребностям"
    }
  },
  "seeMore": "Узнать больше"
},
"specialOffer": {
  "title": "Специальное предложение: получите +3% бонуса в USDT при обмене ETH! Предложение ограничено по времени.",
      "buttonText": "Обменять сейчас"
},
  "banner": {
  "heading": "Обменивайте криптовалюту с уверенностью",
      "subHeading": "Быстрая, безопасная и надежная платформа для обмена криптовалюты с лучшими курсами на рынке."
},
  "features": {
  "marketRates": {
    "title": "Лидирующие рыночные курсы",
        "description": "Получите самые конкурентоспособные курсы обмена с нашим продвинутым алгоритмом цен"
  },
  "instantExchange": {
    "title": "Мгновенный обмен",
        "description": "Молниеносные транзакции с круглосуточной поддержкой для вашего удобства"
  },
  "securePayments": {
    "title": "Безопасные платежи",
        "description": "Несколько вариантов оплаты с банковским уровнем безопасности для вашего спокойствия"
  }
},
"reviews": {
  "title": "Отзывы наших клиентов",
      "testimonials": [
    {
      "name": "Michael Johnson",
      "role": "Клиент",
      "content": "Быстро и надежно! Обменивал криптовалюту без проблем."
    },
    {
      "name": "Emma Williams",
      "role": "Клиент",
      "content": "Отличные курсы и мгновенные транзакции. Рекомендую!"
    },
    {
      "name": "Daniel Brown",
      "role": "Клиент",
      "content": "Пробовал разные обменники, но этот лучший. Прозрачность и безопасность."
    },
    {
      "name": "Sophia Davis",
      "role": "Клиент",
      "content": "Отличная служба поддержки! Быстро помогли решить проблему."
    },
    {
      "name": "James Wilson",
      "role": "Клиент",
      "content": "Плавный процесс с начала до конца. Обязательно воспользуюсь снова."
    },
    {
      "name": "Olivia Martinez",
      "role": "Клиент",
      "content": "Сначала сомневался, но все прошло отлично. Безопасно и быстро!"
    },
    {
      "name": "William Anderson",
      "role": "Клиент",
      "content": "Отличное обслуживание клиентов! Быстрые ответы и профессиональный подход."
    },
    {
      "name": "Isabella Thomas",
      "role": "Клиент",
      "content": "Удобная платформа и справедливые курсы обмена. Обязательно вернусь!"
    },
    {
      "name": "Ethan White",
      "role": "Клиент",
      "content": "Лучший обменник, который я использовал. Без скрытых комиссий, только быстрые транзакции!"
    },
    {
      "name": "Charlotte Harris",
      "role": "Клиент",
      "content": "Супербыстрая транзакция и отличное обслуживание. 10/10!"
    }
  ]
},
"thankYou": {
    "orderId": "Номер заказа:",
        "copyOrderId": "Копировать",
        "youNeedToSend": "Вы должны отправить:",
        "currency": "Валюта",
        "youWillReceive": "Вы получите:",
        "sendFundsToAddress": "Отправьте средства на следующий адрес:",
        "amount": "Сумма",
        "toThisAddress": "На этот адрес",
        "yourWalletAddress": "Адрес вашего кошелька",
        "copyAddress": "Копировать",
        "steps": {
      "awaitingDeposit": "Ожидание депозита",
          "awaitingConfirmations": "Ожидание подтверждений",
          "exchanging": "Обмен",
          "sendingToYou": "Отправка вам",
          "done": "Завершено"
    }
  },
      AML:{
        amlKyc: "cryptoExchange стремится обеспечить безопасную платформу для всех пользователей. Наша комплексная процедура борьбы с отмыванием денег (AML) является краеугольным камнем этого обязательства, обеспечивая целостность наших финансовых услуг и защищая от незаконной финансовой деятельности. A. Строгая проверка пользователей: - Надежная регистрация: Чтобы получить доступ к обменному сервису, пользователи проходят упрощенный, но строгий процесс регистрации. Этот начальный шлюз включает в себя предоставление важной информации, имеющей решающее значение для подтверждения вашей личности. Это соответствует правилам борьбы с отмыванием денег и снижает вероятность неправомерного использования платформы. - Расширенные меры проверки: В особых случаях могут применяться исключительные меры проверки. Это может потребовать дополнительной документации или проведения видеоконференций, особенно если источник средств неясен или существуют личные отношения с предполагаемым отправителем. B. Упреждающий мониторинг транзакций: - Усовершенствованные алгоритмы: Наша система использует сложные алгоритмы для постоянного мониторинга транзакций на предмет подозрительной активности. Такой упреждающий подход помогает выявлять транзакции, потенциально связанные с отмыванием денег или другими преступными деяниями. - Расследование продолжается: Если транзакция вызывает какие-либо опасения, исполнение приказа может быть временно приостановлено. Эта мера предосторожности позволяет cryptoExchange тщательно расследовать происхождение средств. C. Прозрачность и сотрудничество: - Ваши обязательства: Принимая наши условия и участвуя в транзакциях, вы подтверждаете и соглашаетесь в полной мере соблюдать наши меры безопасности. Это включает в себя предоставление полной и достоверной информации о происхождении ваших средств, особенно во время приостановки заказа или запроса информации. - Честность и точность: Крайне важно предоставлять правдивую, актуальную и исчерпывающую информацию. Вы несете полную ответственность за точность и достоверность предоставленных данных. Помните, что честность и прозрачность являются основополагающими для безопасной финансовой экосистемы. D. Последствия несоблюдения требований: - Запросы на предоставление информации и замораживание средств: Непредоставление информации или предоставление ложных данных может иметь серьезные последствия. Если предоставленная информация указывает на потенциальную преступную деятельность, cryptoExchange может временно заморозить средства. - Сотрудничество с властями: В таких случаях мы можем сотрудничать с правоохранительными органами, чтобы вернуть замороженные средства законным жертвам. Это подчеркивает нашу приверженность борьбе с финансовыми преступлениями. - Удержание комиссии за незаконные денежные средства: Если денежные средства связаны с санкциями или финансовыми преступлениями, будет удержана комиссия в размере 20% для облегчения их вывода в конечном итоге, а в случае азартных игр с высоким риском обмена будет удержана комиссия в размере 10% для облегчения их вывода в конечном итоге. Такая схема обеспечивает бесперебойный процесс и препятствует незаконной деятельности в будущем. - cryptoExchange имеет право удерживать сумму, необходимую для расследования, до тех пор, пока эта сумма представляет риск для платформы. F. Исключительные обстоятельства и усиленный контроль: В редких случаях, когда источник средств остается неясным или существуют личные отношения с предполагаемым отправителем, cryptoExchange может запросить дополнительные меры по проверке личности в дополнение к анализу цепочки, эти усиленные меры служат дополнительным уровнем защиты от потенциального неправомерного использования платформы. Приверженность безопасной финансовой экосистеме: В cryptoExchange мы верим в обеспечение прозрачности, подотчетности и строгого соблюдения правил борьбы с отмыванием денег. Ваше понимание, сотрудничество и приверженность этим принципам необходимы для защиты наших пользователей и финансового сообщества в целом от угроз отмывания денег и незаконной финансовой деятельности. Мы уверены, что вместе мы сможем создать надежную платформу для всех."
      },
      TermsService:{
        "Tile": "Правила и условия",
        "TermsService": "Правила и условия в последний раз обновлялись 10 октября 2024 г. 1. СОГЛАСИЕ С УСЛОВИЯМИ Настоящие Условия использования представляют собой юридически обязательное соглашение, заключенное между вами лично или от имени юридического лица (“вы”) и cryptoExchange LTD, осуществляющей свою деятельность как cryptoExchange LTD (\"Криптобиржа\", “cryptoExchange LTD\", “мы\", “нас” или \"наш\")., касающиеся вашего доступа к веб-платформе https://cryptoExchange.io/ и ее использования, а также к любым другим средствам массовой информации, медиа-каналам, мобильным веб-платформам или мобильным приложениям, имеющим к ним отношение, ссылки на них или иным образом связанным с ними (совместно именуемым “Сайт”). Мы зарегистрированы в Великобритании, и наш юридический офис находится в Лондоне. Вы соглашаетесь с тем, что, заходя на Сайт, вы прочитали, поняли и согласились соблюдать все настоящие Условия использования. ЕСЛИ ВЫ НЕ СОГЛАСНЫ СО ВСЕМИ ЭТИМИ УСЛОВИЯМИ ИСПОЛЬЗОВАНИЯ, ВАМ КАТЕГОРИЧЕСКИ ЗАПРЕЩАЕТСЯ ИСПОЛЬЗОВАТЬ Платформу, И ВЫ ДОЛЖНЫ НЕМЕДЛЕННО ПРЕКРАТИТЬ ЕЕ ИСПОЛЬЗОВАНИЕ. Дополнительные положения и условия или документы, которые могут время от времени размещаться на Платформе, включаются в настоящий Документ в виде ссылки. По нашему собственному усмотрению мы оставляем за собой право время от времени вносить изменения в настоящие Условия использования. Мы будем уведомлять вас о любых изменениях, обновляя дату последнего обновления настоящих Условий использования, и вы отказываетесь от любого права на получение конкретного уведомления о каждом таком изменении. Пожалуйста, убедитесь, что вы проверяете применимые условия каждый раз, когда пользуетесь нашими платформами, чтобы понимать, какие условия применяются. Вы будете подвержены изменениям в любых пересмотренных Условиях использования, и будет считаться, что вы ознакомлены с ними и приняли их, продолжая использовать Платформу после даты публикации таких пересмотренных условий использования. Информация, предоставленная на Платформе, не предназначена для распространения или использования каким-либо физическим или юридическим лицом в какой-либо юрисдикции или стране, где такое распространение или использование противоречило бы закону или нормативным актам, или которое требовало бы от нас какой-либо регистрации в такой юрисдикции или стране. Соответственно, те лица, которые решают получить доступ к Платформе из других мест, делают это по своей инициативе и несут единоличную ответственность за соблюдение местных законов, если и в той мере, в какой они применимы. Платформа не адаптирована для соблюдения отраслевых нормативных актов (Закон о переносимости и подотчетности медицинского страхования (HIPAA), Федеральный закон об управлении информационной безопасностью (FISMA) и т.д.), поэтому, если ваши взаимодействия будут подпадать под действие таких законов, вы не имеете права использовать этот сайт. Вы не имеете права использовать Платформу таким образом, который нарушал бы Закон Грэмма-Лича-Блайли (GLBA). Платформа предназначена для пользователей, достигших возраста не менее 13 лет. Все пользователи, которые являются несовершеннолетними в юрисдикции, в которой они проживают (как правило, в возрасте до 18 лет), должны иметь разрешение своих родителей или опекунов и находиться под их непосредственным наблюдением для использования Сайта. Если вы несовершеннолетний, перед использованием сайта ваш родитель или опекун должен ознакомиться с настоящими Условиями использования и согласиться с ними.\n" +
            "2. ПРАВА ИНТЕЛЛЕКТУАЛЬНОЙ СОБСТВЕННОСТИ Если не указано иное, Платформа является нашей собственностью, а также весь исходный код, базы данных, функциональность, программное обеспечение, дизайн платформы, аудио, видео, текст, фотографии и графика на Платформе (совместно именуемые “Контент”) и содержащиеся в них товарные знаки, знаки обслуживания и логотипы. (“Торговые марки”) принадлежат нам, контролируются нами или лицензированы нами и защищены законами об авторском праве и товарных знаках, а также различными другими законами Соединенного Королевства о правах интеллектуальной собственности и недобросовестной конкуренции, международными законами об авторском праве и международными конвенциями. Контент и Метки предоставляются на Платформе “КАК ЕСТЬ” только для вашей информации и личного использования. За исключением случаев, прямо оговоренных в настоящих Условиях использования, никакая часть Платформы и никакой Контент или Товарные знаки не могут быть скопированы, воспроизведены, агрегированы, переизданы, загружены, размещены для публичного показа, закодированы, переведены, переданы, распространены, проданы, лицензированы или иным образом использованы в каких-либо коммерческих целях без нашего согласия. выраженное предварительное письменное разрешение. При условии, что вы имеете право пользоваться Сайтом, вам предоставляется ограниченная лицензия на доступ к Платформе и ее использование, а также на загрузку или распечатку копии любой части Контента, доступ к которому вы получили надлежащим образом, исключительно для вашего личного некоммерческого использования. Мы оставляем за собой все права, прямо не предоставленные вам, на Веб-сайт, Контент и Товарные знаки.\n" +
            "3. ЗАЯВЛЕНИЯ ПОЛЬЗОВАТЕЛЕЙ Используя Сайт, вы заявляете и гарантируете, что: (1) вся предоставленная вами регистрационная информация будет правдивой, точной, актуальной и полной; (2) вы обязуетесь поддерживать точность такой информации и своевременно обновлять регистрационную информацию по мере необходимости; (3) вы обладаете дееспособностью и соглашаетесь соблюдать настоящие Условия использования; (4) вам не исполнилось 13 лет; (5) вы не являетесь несовершеннолетним в юрисдикции, в которой вы проживаете, или если вы несовершеннолетний, вы получили разрешение родителей на использование Сайта; (6) у вас не будет доступа к платформе с помощью автоматизированных или нечеловеческими методами, будь то посредством бота, скрипт или иное; (7) вы не будете использовать платформу для каких-либо незаконных или несанкционированных целях; и (8) использование данной платформы позволит не нарушать никаких применимых законов и норм. Если вы предоставите какую-либо информацию, которая является недостоверной, неточной, неактуальной или неполной, мы имеем право приостановить или закрыть вашу учетную запись и отказать в любом текущем или будущем использовании Платформы (или любой ее части).\n" +
            "4. РЕГИСТРАЦИЯ ПОЛЬЗОВАТЕЛЯ Вам необходимо зарегистрироваться на Сайте. Вы соглашаетесь хранить свой пароль в тайне и несете ответственность за любое использование вашей учетной записи и пароля. Мы оставляем за собой право удалить, вернуть или изменить выбранное вами имя пользователя, если мы по собственному усмотрению определим, что такое имя пользователя является неуместным, непристойным или иным образом вызывающим возражения.\n" +
            "5. ЗАПРЕЩЕННЫЕ ДЕЙСТВИЯ Вы не имеете права получать доступ к Платформе или использовать ее для каких-либо иных целей, кроме тех, для которых мы предоставляем доступ к Платформе. Платформа не может использоваться в связи с какими-либо коммерческими проектами, за исключением тех, которые специально одобрены нами. Как пользователь Сайта, вы соглашаетесь не: Систематически извлекать данные или другой контент с Платформы для создания или компиляции, прямо или косвенно, коллекции, обобщения, базы данных или каталога без нашего письменного разрешения. Обман, выманивание или ввод в заблуждение нас и других пользователей, особенно при любых попытках узнать конфиденциальную информацию об учетной записи, такую как пароли пользователей. Обходить, отключать или иным образом вмешиваться в функции Сайта, связанные с безопасностью, включая функции, которые предотвращают или ограничивают использование или копирование любого Контента или вводят ограничения на использование Платформы и/или содержащегося на ней Контента. По нашему мнению, это унижает достоинство, очерняет или иным образом вредит нам и/или Сайту. Использовать любую информацию, полученную с Платформы, для преследования, оскорбления или нанесения вреда другому лицу. Ненадлежащим образом использовать наши службы поддержки или отправлять ложные сообщения о злоупотреблениях или неправомерном поведении. Использовать Платформу способом, противоречащим любым применимым законам или реестрам Regstaticcontent. Создавать несанкционированные рамки или ссылки на Сайт. Загружать или передавать (или пытаться загрузить или передать) вирусы, троянских коней или другие материалы, включая чрезмерное использование заглавных букв и рассылку спама (непрерывную публикацию повторяющегося текста), которые препятствуют непрерывному использованию Платформы любой стороной или модифицируют, ухудшают, прерывают работу, изменяют или препятствует использованию, возможностям, функционалу, эксплуатации или техническому обслуживанию Сайта. Участвуйте в любом автоматизированном использовании системы, например, в использовании скриптов для отправки комментариев или сообщений, а также в использовании любых средств интеллектуального анализа данных, роботов или аналогичных средств сбора и извлечения данных. Удалите уведомление об авторском праве или других правах собственности из любого контента. Попытайтесь выдать себя за другого пользователя или физическое лицо или использовать имя пользователя другого пользователя. Загружать или передавать (или пытаться загрузить или передать) любые материалы, которые действуют как пассивный или активный механизм сбора или передачи информации, включая, помимо прочего, форматы обмена четкой графикой (“GIF”), размером 1×1 пиксель, веб-ошибки, файлы cookie или другие подобные устройства (иногда называемые “шпионское ПО”, или “механизмы пассивного сбора данных”, или “PCM”). Вмешиваться, нарушать работу или создавать чрезмерную нагрузку на Платформу или сети или сервисы, подключенные к Сайту. Преследовать, раздражать, запугивать или угрожать любому из наших сотрудников или агентов, участвующих в предоставлении вам какой-либо части Платформы. Пытаться обойти любые меры Платформы, направленные на предотвращение или ограничение доступа к Сайту или любой части сайта. Копировать или адаптировать программное обеспечение Сайта, включая Flash, PHP, HTML, JavaScript или другой код, но не ограничиваясь этим. За исключением случаев, разрешенных применимым законодательством, расшифровывайте, декомпилируйте, дизассемблируйте или перепроектируйте любое программное обеспечение, содержащееся на Сайте или каким-либо образом составляющее его часть. За исключением случаев, когда это может быть результатом использования стандартной поисковой системы или интернет-браузера, используйте, запускайте, разрабатывайте или распространяйте любую автоматизированную систему, включая, помимо прочего, любого паука, робота, чит-утилиту, скребок или автономный считыватель, которые получают доступ к Сайту, или используйте или запускайте любой несанкционированный скрипт или другое программное обеспечение. Используйте посредника по закупкам или агента по закупкам для совершения покупок на Сайте. Осуществлять любое несанкционированное использование Сайта, включая сбор имен пользователей и/или адресов электронной почты пользователей электронными или иными способами для отправки нежелательных электронных писем, или создавать учетные записи пользователей автоматизированными средствами или под ложным предлогом. Используйте Платформу в рамках любых усилий по конкуренции с нами или иным образом используйте Платформу и/или Контент для любого приносящего доход предприятия или коммерческой деятельности. cryptoExchange не допускает никаких переводов третьим лицам, поэтому для выполнения заказа вы должны отправлять и получать деньги на свое имя со счета, который принадлежит вам. Если мы получим деньги со счета или на имя, которое не зарегистрировано в cryptoExchange, ваш заказ будет аннулирован. cryptoExchange регулярно меняет свои адреса во всех способах оплаты, пользователи всегда должны перепроверять адрес, указанный в заказе, а не из своей истории. cryptoExchange не несет ответственности за любые ошибки, которые могут возникнуть. Пользователям следует перепроверить предоставленные ими адреса TRC20, а также названия и номера способов оплаты. cryptoExchange не несет ответственности за любые переводы, отправленные в неправильные места; мы используем только ту информацию, которую вы нам предоставляете, для совершения транзакций.\n" +
            "Пользователям следует проявлять осторожность при выборе своих платформ, поскольку мы не несем ответственности за любые мошеннические платформы, которые пользователи используют в качестве своих кошельков, как указано выше, мы совершаем транзакции только с использованием того, что клиенты предоставляют нам в качестве своей информации.\n" +
            "6. МАТЕРИАЛЫ, СОЗДАННЫЕ ПОЛЬЗОВАТЕЛЯМИ Платформа не предлагает пользователям отправлять или публиковать контент. Мы можем предоставить вам возможность создавать, отправлять, размещать, демонстрировать, передавать, исполнять, публиковать, распространять или транслировать контент и материалы для нас или на Сайте, включая, но не ограничиваясь, текст, письменные работы, видео, аудио, фотографии, графику, комментарии, предложения или личную информацию или другие материалы (совместно именуемые \"Вклады\"). Материалы могут быть доступны для просмотра другими пользователями Платформы и через сторонние веб-сайты. Таким образом, любые материалы, которые вы передаете, могут обрабатываться в соответствии с Политикой конфиденциальности платформы. Создавая или предоставляя доступ к любым материалам, вы тем самым заявляете и гарантируете, что: Создание, распространение, передача, публичная демонстрация или исполнение, а также доступ, загрузка или копирование ваших материалов не нарушают и не будут нарушать права собственности, включая, помимо прочего, авторские права, патенты, товарные знаки, коммерческую тайну или личные неимущественные права любой третьей стороны. Вы являетесь создателем и владельцем или обладаете необходимыми лицензиями, правами, согласиями, релизами и разрешениями на использование и разрешаете нам, Сайту и другим пользователям Платформы использовать ваши материалы любым способом, предусмотренным Платформой и настоящими Условиями использования. У вас есть письменное согласие, разглашение и/или разрешение каждого идентифицируемого лица в ваших Материалах использовать имя или подобие каждого такого идентифицируемого лица, чтобы обеспечить включение и использование ваших материалов любым способом, предусмотренным Платформой и настоящими Условиями использования. Ваши материалы не являются ложными, неточными или вводящими в заблуждение. Ваши материалы не являются нежелательной или несанкционированной рекламой, промо-материалами, финансовыми пирамидами, письмами счастья, спамом, массовыми рассылками или другими формами привлечения внимания. Ваши материалы не являются непристойными, развратными, непристойно-маньячными, грязными, насильственными, беспокоящими, клеветническими или иным образом предосудительными (по нашему определению). Ваши материалы не содержат насмешек, издевательств, принижения, запугивания или оскорбления кого-либо. Ваши материалы не используются для преследования или угрозы (в юридическом смысле этих терминов) каким-либо другим лицам или для пропаганды насилия в отношении конкретного человека или группы людей. Ваши материалы не нарушают никаких применимых законов, нормативных актов или правил. Ваши материалы не нарушают права третьих лиц на неприкосновенность частной жизни или публичность. Ваши материалы не нарушают никаких применимых законов, касающихся детской порнографии, и не направлены иным образом на защиту здоровья или благополучия несовершеннолетних. Ваши материалы не содержат оскорбительных комментариев, связанных с расой, национальным происхождением, полом, сексуальными предпочтениями или физическими недостатками. Ваши материалы иным образом не нарушают и не содержат ссылок на материалы, которые нарушают какие-либо положения настоящих Условий использования или какие-либо применимые законы или нормативные акты.\n" +
            "Любое использование Платформы в нарушение вышеизложенного нарушает настоящие Условия использования и может привести, среди прочего, к прекращению или приостановке действия ваших прав на использование Сайта.\n" +
            "7. ВКЛАДЫ, СОЗДАННЫЕ ПОЛЬЗОВАТЕЛЯМИ, Вы и Платформа соглашаетесь с тем, что мы можем получать доступ, хранить, обрабатывать и использовать любую информацию и персональные данные, которые вы предоставляете, в соответствии с условиями Политики конфиденциальности и вашим выбором (включая настройки). Отправляя предложения или другие отзывы о Сайте, вы соглашаетесь с тем, что мы можем использовать и распространять такие отзывы в любых целях без какой-либо компенсации для вас. Мы не заявляем о какой-либо собственности на ваши материалы. Вы сохраняете за собой полное право собственности на все ваши Материалы и любые права интеллектуальной собственности или другие имущественные права, связанные с вашими материалами. Мы не несем ответственности за какие-либо заявления или заверения в ваших Материалах, предоставленных вами в любом разделе Сайта. Вы несете единоличную ответственность за свой вклад в Платформу и прямо соглашаетесь освободить нас от какой-либо ответственности и воздерживаться от любых юридических действий против нас в отношении вашего вклада.\n" +
            "8. РЕКОМЕНДАЦИИ ПО ОТЗЫВАМ Мы можем предоставить вам разделы на Платформе, где вы можете оставлять отзывы или оценки. При публикации отзыва вы должны соответствовать следующим критериям: (1) вы должны иметь непосредственное отношение к физическому или юридическому лицу, с которым проводилась проверка; (2) ваши отзывы не должны содержать оскорбительной ненормативной лексики или оскорбительных, расистских высказываний, вызывающих ненависть; (3) ваши отзывы не должны содержать дискриминационных ссылок по признаку религии, расы, пола, национального происхождения, возраста, семейного положения, сексуальной ориентации или инвалидности; (4) ваши отзывы должны не содержит ссылок на незаконную деятельность; (5) вы не должны быть связаны с конкурентами, если размещаете отрицательные отзывы; (6) вы не должны делать никаких выводов относительно законности поведения; (7) вы не можете публиковать какие-либо ложные или вводящие в заблуждение заявления; и (8) вы не можете организовывать кампанию, поощряющую других публиковать отзывы, будь то положительный или отрицательный. Мы можем принимать, отклонять или удалять отзывы по собственному усмотрению. Мы не несем абсолютно никаких обязательств по проверке отзывов или их удалению, даже если кто-либо считает отзывы неприемлемыми или неточными. Отзывы не одобрены нами и не обязательно отражают наше мнение или взгляды кого-либо из наших аффилированных лиц или партнеров. Мы не несем ответственности за какие-либо отзывы или претензии, обязательства или убытки, возникающие в результате любого обзора. Публикуя отзыв, вы тем самым предоставляете нам бессрочное, неисключительное, всемирное, безвозмездное, полностью оплачиваемое, переуступаемое и сублицензируемое право и лицензию на воспроизведение, модификацию, перевод, передачу любыми способами, демонстрацию, исполнение и/или распространение всего контента, относящегося к отзывам.\n" +
            "9. РЕКОМЕНДАЦИИ ПО ОТЗЫВАМ Мы можем предоставить вам разделы на Платформе, где вы можете оставлять отзывы или оценки. При публикации отзыва вы должны соответствовать следующим критериям: (1) вы должны иметь непосредственное отношение к физическому или юридическому лицу, с которым проводилась проверка; (2) ваши отзывы не должны содержать оскорбительной ненормативной лексики или оскорбительных, расистских высказываний, вызывающих ненависть; (3) ваши отзывы не должны содержать дискриминационных ссылок по признаку религии, расы, пола, национального происхождения, возраста, семейного положения, сексуальной ориентации или инвалидности; (4) ваши отзывы должны не содержит ссылок на незаконную деятельность; (5) вы не должны быть связаны с конкурентами, если размещаете отрицательные отзывы; (6) вы не должны делать никаких выводов относительно законности поведения; (7) вы не можете публиковать какие-либо ложные или вводящие в заблуждение заявления; и (8) вы не можете организовывать кампанию, поощряющую других публиковать отзывы, будь то положительный или отрицательный. Мы можем принимать, отклонять или удалять отзывы по собственному усмотрению. Мы не несем абсолютно никаких обязательств по проверке отзывов или их удалению, даже если кто-либо считает отзывы неприемлемыми или неточными. Отзывы не одобрены нами и не обязательно отражают наше мнение или взгляды кого-либо из наших аффилированных лиц или партнеров. Мы не несем ответственности за какие-либо отзывы или претензии, обязательства или убытки, возникающие в результате любого обзора. Публикуя отзыв, вы тем самым предоставляете нам бессрочное, неисключительное, всемирное, безвозмездное, полностью оплачиваемое, переуступаемое и сублицензируемое право и лицензию на воспроизведение, модификацию, перевод, передачу любыми способами, демонстрацию, исполнение и/или распространение всего контента, относящегося к отзывам.\n" +
            "10. МАТЕРИАЛЫ Вы признаете и соглашаетесь с тем, что любые вопросы, комментарии, предложения, идеи, отзывы или другая информация, касающаяся Платформы (\"Материалы\"), предоставленные вами нам, не являются конфиденциальными и становятся нашей исключительной собственностью. Нам принадлежат исключительные права, включая все права на интеллектуальную собственность, и мы имеем право на неограниченное использование и распространение этих Материалов в любых законных целях, коммерческих или иных, без вашего согласия или компенсации. Настоящим вы отказываетесь от всех моральных прав на любые подобные материалы и настоящим гарантируете, что любые такие материалы являются вашими оригинальными или что вы имеете право на их отправку. Вы соглашаетесь с тем, что в ваших материалах не будет никаких претензий к нам за любое предполагаемое или фактическое нарушение или незаконное присвоение каких-либо прав собственности.\n" +
            "11. УПРАВЛЕНИЕ платформой Мы оставляем за собой право, но не обязанность, (1) отслеживать Платформу на предмет нарушений настоящих Условий использования; (2) предпринимать соответствующие юридические действия против любого, кто, по нашему собственному усмотрению, нарушает закон или настоящие Условия использования, включая, помимо прочего, сообщение о таких нарушениях. пользователя правоохранительным органам; (3) по нашему собственному усмотрению и без каких-либо ограничений отказывать, ограничивать доступ, ограничивать доступность или отключать (насколько это технологически возможно) любые ваши материалы или любую их часть; (4) по нашему собственному усмотрению и без каких-либо ограничений, уведомления или ответственности удалять с Платформы или иным образом отключать все файлы и контент, которые являются чрезмерными по размеру или каким-либо образом обременительны для наших систем; и (5) иным образом управлять Платформой таким образом, чтобы защитить наши права и собственность и способствовать надлежащему функционированию Сайта.\n" +
            "12. ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ Мы заботимся о конфиденциальности и безопасности данных. Используя Сайт, вы соглашаетесь соблюдать нашу Политику конфиденциальности, размещенную на Сайте, которая включена в настоящие Условия использования. Обращаем ваше внимание, что Платформа размещена в Великобритании. Если вы получаете доступ к Платформе из любого другого региона мира, где законы или другие требования, регулирующие сбор, использование или раскрытие персональных данных, отличаются от применимых законов Соединенного Королевства, то, продолжая пользоваться Сайтом, вы передаете свои данные в Соединенное Королевство и соглашаетесь с тем, что: ваши данные передаются и обрабатываются в Соединенном Королевстве. Кроме того, мы сознательно не принимаем, не запрашиваем и не домогаемся информации от детей и сознательно не продаем ее детям. Таким образом, в соответствии с Законом Сша \"О защите конфиденциальности детей в Интернете\", если мы получим фактическую информацию о том, что кто-либо в возрасте до 13 лет предоставил нам личную информацию без предварительного согласия платформы и проверяемого согласия родителей, мы удалим эту информацию с Платформ так быстро, как это будет разумно целесообразно.\n" +
            "13. СРОК ДЕЙСТВИЯ И РАСТОРЖЕНИЕ Настоящие Условия использования остаются в полной силе до тех пор, пока вы пользуетесь Сайтом. Не ограничивая какие-либо другие положения настоящих условий использования, мы оставляем за собой право по нашему собственному усмотрению и без предварительного уведомления или ответственности отказать в доступе к Платформе и ее использовании (включая блокировку определенных IP-адресов) любому лицу по любой причине или без таковой, в том числе, без ограничений, за нарушение каких-либо заявления, гарантии или соглашения, содержащиеся в настоящих условиях использования или в любом применимом законодательстве или нормативных актах. мы можем прекратить ваше использование или участие в Платформе и удалить вашу учетную запись и любой контент или информацию, которые вы разместили, в любое время, без предупреждения, по нашему собственному усмотрению. Если мы по какой-либо причине закроем или приостановим действие вашей учетной записи, вам будет запрещено регистрироваться и создавать новую учетную запись под своим именем, поддельным или заимствованным именем или именем любой третьей стороны, даже если вы, возможно, действуете от имени третьей стороны. В дополнение к закрытию или приостановке действия вашей учетной записи, мы оставляем за собой право предпринять соответствующие юридические действия, включая, помимо прочего, гражданское, уголовное и судебное возмещение ущерба. ПРИМЕЧАНИЕ: cryptoExchange имеет право вернуть сумму, уплаченную источнику средств, если она отличается от суммы заказа.\n" +
            "14. МОДИФИКАЦИИ И ПЕРЕРЫВЫ В РАБОТЕ Мы оставляем за собой право изменять, модифицировать или удалять содержимое Платформы в любое время и по любой причине по нашему собственному усмотрению без предварительного уведомления. Однако мы не обязаны обновлять какую-либо информацию на нашем Сайте. Мы также оставляем за собой право изменять или прекращать работу всей Платформы или ее части без предварительного уведомления в любое время. Мы не несем ответственности перед вами или какой-либо третьей стороной за любые модификации, изменение цен, приостановку или прекращение работы Сайта. Мы не можем гарантировать, что Платформа будет доступна в любое время. У нас могут возникнуть аппаратные, программные или другие проблемы или возникнуть необходимость в проведении технического обслуживания, связанного с Сайтом, что может привести к перебоям, задержкам или ошибкам. Мы оставляем за собой право изменять, пересматривать, обновлять, приостанавливать, прекращать работу или иным образом модифицировать Платформу в любое время и по любой причине без предварительного уведомления вас. Вы соглашаетесь с тем, что мы не несем никакой ответственности за любые убытки, ущерб или неудобства, вызванные вашей неспособностью получить доступ к Платформе или использовать ее во время любого простоя или прекращения работы Сайта. Ничто в настоящих Условиях использования не может быть истолковано как обязывающее нас поддерживать Платформу или вносить какие-либо исправления, обновления или релизы в связи с этим; Кроме того, если вы отправите меньше суммы заказа, вам будут возвращены деньги после вычета комиссионных из суммы.\n" +
            "15. ПРИМЕНИМОЕ ПРАВО Настоящие условия регулируются и толкуются в соответствии с законодательством Германии, и использование Конвенции Организации Объединенных Наций о договорах международной купли-продажи товаров прямо исключено. Если вы обычно проживаете в ЕС и являетесь потребителем, вы дополнительно пользуетесь защитой, предоставляемой вам обязательными положениями законодательства вашей страны проживания. cryptoExchange и вы сами соглашаетесь подчиняться неисключительной юрисдикции судов Лондона, что означает, что вы можете подать иск о защите своих прав потребителей в отношении настоящих Условий использования в Германии или в стране ЕС, в которой вы проживаете.\n" +
            "16. РАЗРЕШЕНИЕ СПОРОВ Обязательный арбитраж Любой спор, вытекающий из настоящего контракта или в связи с ним, включая любой вопрос, касающийся его существования, действительности или расторжения, должен быть передан на рассмотрение и окончательно разрешен Международным коммерческим арбитражным судом при Европейской арбитражной палате (Бельгия, Брюссель, авеню Луиза, 146) в соответствии с регламент настоящего МКАС, который, в результате ссылки на него, рассматривается как часть настоящего пункта. Число арбитров должно составлять три (3). Местом или юридическим местом проведения арбитража является Лондон, Соединенное Королевство, Языком разбирательства является английский. Применимым правом к договору является материальное право Соединенного Королевства. Стороны соглашаются, что любое арбитражное разбирательство должно ограничиваться рассмотрением спора между Сторонами в индивидуальном порядке. В полном объеме, разрешенном законом, (а) арбитражное разбирательство не должно объединяться с каким-либо другим разбирательством; (b) нет права или полномочий для рассмотрения какого-либо спора в арбитражном порядке на основе коллективного иска или использования процедур коллективного иска, и (c) нет права или полномочий для рассмотрения какого-либо спора в качестве предполагаемого представителя от имени широкой общественности или любых других лиц.. Исключения из арбитражного разбирательства Стороны соглашаются, что вышеуказанные положения, касающиеся обязательного арбитражного разбирательства, не распространяются на следующие споры: (а) любые споры, направленные на обеспечение соблюдения или защиты, или касающиеся действительности каких-либо прав интеллектуальной собственности Стороны; (b) любой спор, связанный с обвинениями в краже, пиратстве, вторжении в частную жизнь или несанкционированном использовании или вытекающий из них; и (c) любое требование о судебном запрете. Если это положение будет признано незаконным или не имеющим законной силы, то ни одна из Сторон не будет прибегать к арбитражному разбирательству любого спора, подпадающего под действие той части этого положения, которая была признана незаконной или не имеющей законной силы, и такой спор должен быть разрешен судом компетентной юрисдикции в рамках судов, перечисленных выше для юрисдикции, и Стороны соглашаются представить к персональной юрисдикции этого суда.\n" +
            "17. ИСПРАВЛЕНИЯ На Платформе может содержаться информация, содержащая типографские ошибки, неточности или пропуски, включая описания, цены, доступность и различную другую информацию. Мы оставляем за собой право исправлять любые ошибки, неточности или упущения, а также изменять или обновлять информацию на Платформе в любое время без предварительного уведомления.\n" +
            "18. ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ Платформа предоставляется по принципу \"как есть\" и \"по мере доступности\". вы соглашаетесь с тем, что используете Платформу и наши услуги исключительно на свой страх и риск. в максимально возможной степени, разрешенной законом, мы отказываемся от всех гарантий, явных или подразумеваемых, в связи с Платформой и ее использованием вами, включая, помимо прочего, подразумеваемые гарантии товарной пригодности, пригодности для определенной цели и ненарушения прав. мы не даем никаких гарантий или заверений относительно точности или полноты содержимого сайта или содержимого любых веб-сайтов, связанных с Платформой, и мы не несем никакой ответственности за любые (1) ошибки, недочеты или неточности в содержании и материалах, (2) телесные повреждения или материальный ущерб, причиненный любого характера, возникающего в результате вашего доступа к сайту и его использования, (3) любого несанкционированного доступа или использования наших защищенных серверов и/или любой личной информации и/или финансовой информации, хранящейся на них, (4) любое прерывание или прекращение передачи данных на сайт или с сайта, (5) любые ошибки, вирусы, троянские программы и тому подобное, которые могут быть переданы на Платформу или через Платформу любой третьей стороной, и/или (6) любые ошибки или упущения в любом контенте и материалах или для любые убытки или ущерб любого рода, понесенные в результате использования любого контента, размещенного, переданного или иным образом ставшего доступным через сайт. мы не гарантируем, не одобряем, не даем гарантий и не берем на себя ответственность за какой-либо продукт или услугу, рекламируемые или предлагаемые третьей стороной через сайт, любой веб-сайт с гиперссылками или любую веб-платформу или мобильное приложение, представленные в любом баннере или другой рекламе, и мы никоим образом не будем участвовать в них. несет ответственность за мониторинг любых транзакций между вами и любыми сторонними поставщиками продуктов или услуг. как и при покупке продукта или услуги любым способом или в любой среде, вы должны руководствоваться своим здравым смыслом и проявлять осторожность там, где это уместно.\n" +
            "cryptoExchange запрещает все формы мошенничества, включая, но не ограничиваясь ими:\n" +
            "Попытки обмана других пользователей, использование ложной или вводящей в заблуждение информации для получения товаров или услуг, создание поддельных учетных записей или выдача себя за других пользователей, что также подразумевает отказ от приема платежей третьих лиц, совершение любых других действий, которые являются мошенническими или вводящими в заблуждение.\n" +
            "Если cryptoExchange заподозрит, что пользователь занимается мошенничеством, мы можем немедленно заморозить средства пользователя или сумму отправленного заказа и приостановить действие учетной записи пользователя.\n" +
            "cryptoExchange также оставляет за собой право подать в суд на любого пользователя, который занимается мошенничеством. Используя cryptoExchange, вы соглашаетесь с настоящими правилами и условиями и соглашаетесь с тем, что cryptoExchange имеет право предпринимать такие действия.\n" +
            "19. ОГРАНИЧЕНИЯ ОТВЕТСТВЕННОСТИ Ни при каких обстоятельствах мы или наши директора, сотрудники или агенты не несем ответственности перед вами или любой третьей стороной за какие-либо прямые, косвенные, вытекающие из практики, показательные, случайные, специальные или штрафные убытки, включая упущенную выгоду, упущенный доход, потерю данных или другие убытки, возникающие в результате вы пользуетесь сайтом, даже если мы были предупреждены о возможности такого ущерба. несмотря на все содержащиеся в настоящем документе положения об обратном, наша ответственность перед вами по любой причине и независимо от формы иска всегда будет ограничена суммой, уплаченной вами нам, если таковая была, в течение трех (3) месяцев до возникновения каких-либо оснований для иска. законы некоторых штатов и международные законы не допускают ограничения подразумеваемых гарантий или исключения или лимитирования определенных убытков. если эти законы применяются к вам, некоторые или все из вышеуказанных отказов от ответственности или ограничений могут к вам не относиться, и у вас могут быть дополнительные права.\n" +
            "20. ВОЗМЕЩЕНИЕ УБЫТКОВ Вы соглашаетесь защищать, возмещать убытки и обеспечивать нашу безопасность, включая наши дочерние компании, аффилированных лиц и всех наших соответствующих должностных лиц, агентов, партнеров и сотрудников, от любых потерь, ущерба, ответственности, претензий или требований, включая разумные гонорары адвокатов и расходы, предъявленные любая третья сторона вследствие или в результате: (1) использования Сайта; (2) нарушения настоящих Условий использования; (3) любого нарушения ваших заявлений и гарантий, изложенных в настоящих Условиях использования; (4) нарушения вами прав третьей стороны, включая, но не ограничивается правами интеллектуальной собственности; или (5) любое явное вредоносное действие по отношению к любому другому пользователю Платформы, с которым вы подключились через Сайт. Несмотря на вышеизложенное, мы оставляем за собой право за ваш счет взять на себя исключительную защиту и контроль по любому вопросу, по которому вы обязаны возместить нам убытки, и вы соглашаетесь сотрудничать за свой счет с нашей защитой по таким претензиям. Мы приложим разумные усилия, чтобы уведомить вас о любой такой претензии, иске или судебном разбирательстве, на которые распространяется данная компенсация, как только нам станет известно об этом.\n" +
            "21. ПОЛЬЗОВАТЕЛЬСКИЕ ДАННЫЕ Мы будем хранить определенные данные, которые вы передаете на Платформу для управления ее работой, а также данные, относящиеся к использованию вами Сайта. Несмотря на то, что мы выполняем регулярное резервное копирование данных, вы несете единоличную ответственность за все данные, которые вы передаете или которые относятся к любой деятельности, которую вы осуществляете с использованием Сайта. Вы соглашаетесь с тем, что мы не несем никакой ответственности перед вами за любую потерю или искажение любых таких данных, и настоящим вы отказываетесь от любого права предъявлять нам иски, вытекающие из любой такой потери или искажения таких данных.\n" +
            "22. ЭЛЕКТРОННЫЕ КОММУНИКАЦИИ, ТРАНЗАКЦИИ И ПОДПИСИ При посещении Сайта, отправке нам электронных писем и заполнении онлайн-форм представляют собой электронные коммуникации. Вы даете согласие на получение электронных сообщений и соглашаетесь с тем, что все соглашения, уведомления, раскрытие информации и другие сообщения, которые мы предоставляем вам в электронном виде, по электронной почте и на Сайте, удовлетворяют всем юридическим требованиям о том, что такие сообщения должны быть представлены в письменной форме. НАСТОЯЩИМ ВЫ СОГЛАШАЕТЕСЬ НА ИСПОЛЬЗОВАНИЕ ЭЛЕКТРОННЫХ ПОДПИСЕЙ, КОНТРАКТОВ, ЗАКАЗОВ И ДРУГИХ ЗАПИСЕЙ, А ТАКЖЕ НА ЭЛЕКТРОННУЮ ДОСТАВКУ УВЕДОМЛЕНИЙ, ПОЛИТИК И ЗАПИСЕЙ О ТРАНЗАКЦИЯХ, ИНИЦИИРОВАННЫХ ИЛИ ЗАВЕРШЕННЫХ НАМИ ИЛИ ЧЕРЕЗ САЙТ. Настоящим вы отказываетесь от любых прав или требований в соответствии с любыми законами, постановлениями, нормами, ордонансами или другими законами в любой юрисдикции, которые требуют оригинальной подписи, доставки или хранения неэлектронных записей, а также от платежей или предоставления кредитов любыми способами, отличными от электронных.\n" +
            "осторожность:\n" +
            "Если при получении заказа произошла ошибка в реквизитах, предоставленных пользователем для какой-либо транзакции, мы не несем ответственности за денежные средства или за то, куда они были направлены, а также не несем ответственности за внесение, возврат или возмещение каких-либо средств пользователю; таким образом, пользователь несет единоличную ответственность за информацию, предоставленную в заказ; мы отправляем только ту информацию, которая указана в заказе.\n" +
            "ВНИМАНИЕ: В случае возникновения каких-либо проблем, происшествий или потери средств, неправильного получения реквизитов, информации или удержания средств с онлайн-кошельков или средств борьбы с отмыванием денег, или любых других проблем, которые могут возникнуть, мы запросим у пользователя KYC, банковскую выписку, фотографии, видео и любые другие доказательства способ пополнения в зависимости от способа оплаты (онлайн-кошелек, банковский счет, криптовалютный кошелек и т.д.) В некоторых ситуациях потребуется онлайн-встреча, и все сообщения, касающиеся любого типа инцидентов или решения проблем, будут передаваться только по электронной почте. support@cryptoExchange.io ВНИМАНИЕ: Любой запрос на возврат средств, поданный после обработки заказа, может повлечь за собой удержание от 2% до 4%.\n" +
            "23. ПОЛЬЗОВАТЕЛИ И ЖИТЕЛИ КАЛИФОРНИИ Если какая-либо жалоба, направленная нам, не будет удовлетворительно разрешена, вы можете обратиться в Отдел рассмотрения жалоб Отдела обслуживания потребителей Калифорнийского департамента по делам потребителей в письменной форме по адресу: 1625 North Market Blvd, Suite N 112, Сакраменто, Калифорния 95834, или по телефону (800). 952-5210 или (916) 445-1254.\n" +
            "24.Общие условия использования Private Label Приступая к выбору тарифного плана private label, вы подтверждаете, что согласны с cryptoExchange и соблюдаете условия предоставления услуг, содержащиеся в Условиях использования, изложенных ниже. Настоящие Условия применяются ко всей платформе и к любой электронной почте или другому виду связи между вами и cryptoExchange. Ни при каких обстоятельствах cryptoExchange не несет ответственности за какие-либо прямые, косвенные, специальные, случайные или опосредованные убытки, включая ненадлежащее или ложное использование плана private label, мошенническое использование, неправильные переводы или вводящие в заблуждение заказы. Вы несете единоличную ответственность за результаты любых транзакций, совершенных на вашей платформе, после создания вашего плана платформы private label по своему усмотрению.\n" +
            "25. Процедура борьбы с отмыванием денег\n" +
            "Для осуществления Обмена в Сервисе обязательными требованиями являются регистрация и логин Пользователя, а также предоставление персональных данных. При регистрации пользователи должны предоставить необходимую информацию для подтверждения своей личности и соблюдения правил борьбы с отмыванием денег (AML). Однако в случаях, когда Пользователь отправляет средства, которые явно связаны с преступной деятельностью, выполнение Заказа Пользователя может быть временно приостановлено. Эта приостановка введена для того, чтобы позволить cryptoExchange запрашивать дополнительные сведения о происхождении средств до тех пор, пока запрашиваемая информация не будет предоставлена. cryptoExchange оставляет за собой право определять прямую связь с преступной деятельностью на основе информации от деловых партнеров, открытых источников, жалоб жертв на cryptoExchange и запросов правоохранительных органов. Принимая эти Условия, вы подтверждаете и соглашаетесь с тем, что отправляемая вами транзакция может быть проверена с помощью системы безопасности Сервиса. Кроме того, принимая эти Условия, вы подтверждаете и соглашаетесь предоставлять полную информацию о происхождении отправляемых вами средств. Вы также подтверждаете честность и законность получения этих средств после приостановки Заказа и соответствующего запроса cryptoExchange. Принимая эти Условия, вы также соглашаетесь и гарантируете, что будете предоставлять правдивую, точную, актуальную и полную информацию о происхождении отправленных средств. Вы принимаете на себя полную ответственность за точность, полноту и достоверность предоставленной информации. Данные о происхождении средств должны быть предоставлены непосредственно отправителем средств в процессе оформления заказа. Если вы отказываетесь предоставить данные о происхождении отправленных средств или предоставляете ложную информацию, и если предоставленные вами данные подтверждают вашу причастность к преступной деятельности, cryptoExchange оставляет за собой право заморозить средства для последующего возврата пострадавшим при содействии правоохранительных органов. В исключительных случаях, когда Пользователь не может предоставить достаточных доказательств источника полученных средств, или в ситуациях, когда отправитель средств лично знаком с предполагаемым преступником, отправившим средства, Пользователю может быть предложено пройти проверку личности в качестве исключения.\n" +
            "cryptoExchange оставляет за собой право изменять цены и пересматривать или прекращать действие тарифного плана в любой момент нарушения условий использования платформы или неправильного использования.\n" +
            "Оплата и соглашение Если выбран какой-либо из наших тарифных планов или дополнений, пользователь соглашается оплатить все сборы и суммы до создания private-label в соответствии с условиями выставления счетов и требованиями В зависимости от соглашения, Соглашение представляет собой полное соглашение между компанией и cryptoExchange. На вас могут распространяться дополнительные положения и условия, которые применяются при покупке у нас тарифного плана или других услуг, которые мы будем предоставлять вам во время его приобретения.\n" +
            "СВЯЖИТЕСЬ С НАМИ, пожалуйста, свяжитесь с нами по адресу: Электронная почта: support@cryptoExchange.Адрес ввода-вывода: Лондон, Великобритания."
      },
"how": {
        "nav": {
          "convert": "Обмен"
        },
        "steps": {
          "1": {
            "title": "Выбор валюты: отправка и получение",
            "description": "Выберите валюты для отправки и получения."
          },
          "2": {
            "title": "Ввод адреса получающей валюты",
            "description": "Введите адрес для получения выбранной валюты."
          },
          "3": {
            "title": "Завершение транзакции: отправка криптовалюты",
            "description": "Следуйте шагам и отправьте криптовалюту на указанный адрес."
          },
          "4": {
            "title": "Уведомление о получении: до 12 минут",
            "description": "Получите уведомление о поступлении средств в течение 12 минут."
          }
        },
        "note": {
          "title": "Примечание",
          "text": "Процесс полностью автоматизирован."
        },
        "cta": "Попробовать сейчас",
        "offer": {
          "title": "Обменяйте Ethereum или Solana прямо сейчас",
          "subtitle": "Получите на 3% больше USDT",
          "description": "Воспользуйтесь ограниченным предложением: обменяйте Ethereum или Solana на USDT и получите 3% бонуса к сумме обмена."
        },
        "features": {
          "bestRate": {
            "title": "Лучшие курсы обмена",
            "description": "Гарантированно лучшие условия для наших клиентов."
          },
          "fast": {
            "title": "Быстрые транзакции",
            "description": "Среднее время обработки обмена — всего 5 минут."
          },
          "care": {
            "title": "Забота и конфиденциальность",
            "description": "Мы уважаем вашу приватность и обеспечиваем полный контроль над вашими средствами."
          }
        }
      },
      contact: {
        heroTitle: "Наша команда готова помочь вам",
        bullet1: "Создание индивидуального решения для платежей и автоматизации",
        bullet2: "Ускорьте внедрение с поддержкой нашей команды",
        bullet3: "Получите индивидуальные цены со скидками на объём",
        form: {
          name: "Имя *",
          email: "Электронная почта *",
          message: "Сообщение *",
          namePlaceholder: "Ваше имя",
          emailPlaceholder: "you@company.com",
          messagePlaceholder: "Расскажите нам о своих потребностях...",
          send: "Отправить сообщение",
        },
        helpTitle: "Нужна дополнительная помощь? Мы рады помочь.",
        helpDescription:
            "Мы предлагаем различные способы связи. Выберите тот, который вам подходит.",
        emailSupportTitle: "Поддержка по электронной почте",
        emailSupportText: "Отправьте нам свои вопросы в любое время.",
        scheduleCallTitle: "Запланировать звонок",
        scheduleCallText: "Назначьте встречу с нашими экспертами.",
      },

      info_banner: {
        title: "Переводите и обменивайте\nкриптовалюту с легкостью",
        exchangeTitle: "Лучшие курсы обмена",
        exchangeDescription: "Получайте самые выгодные курсы для сделок",
        supportTitle: "Поддержка 24/7",
        supportDescription: "Наша команда поддержки всегда готова помочь!",
        securityTitle: "Безопасные транзакции",
        securityDescription:
          "Ваши средства защищены передовыми мерами безопасности",
      },
      top_pairs: {
        title: "Топ пары на CryptoExchange",
        subtitle: "Другие варианты обмена криптовалют",
        convertTab: "Конвертировать",
      },
      convertor: {
        "youPay": "Вы платите",
        "back": " Назад",
        "next": " Продолжить",
        "receive": "Вы получаете",
        "amount": "Сумма",
        "address": "Адрес получения",
        "walletDetails": "Детали кошелька",
        "currency": "Валюта",
        title: "Конвертация криптовалюты",
        youReceive: "Вы получаете",
        proceed: "Продолжить",
      },
      currency_menu: {
        selectCurrency: "Выберите валюту",
        search: "Поиск валют",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  supportedLngs: ["en", "ru"],
  debug: true,
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },
  pluralSeparator: "_",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
