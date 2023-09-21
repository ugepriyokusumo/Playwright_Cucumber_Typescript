# Playwright_Cucumber_Typescript
Playwright Typescript with cucumber

## Requirement
```
node installation
```

## Installation

- package.json
```
"devDependencies": {
    "@cucumber/cucumber": "^9.5.1",
    "@playwright/test": "^1.38.0",
    "@types/node": "^20.6.2",
    "cross-env": "^7.0.3",
    "dotenv": "^16.3.1",
    "ts-node": "^10.9.1"
  }
```

- install modules
```
npm install
```

## env

```
.env.prod
.env.staging
```
```
BASEURL = https://formy-project.herokuapp.com/
```
    
## How To Run
```
npm run test         #Running test
```

## Structure
```
│   .gitignore
│   package-lock.json
│   package.json
│   README.md
|   tsconfig.json
│   
└───config
│    └───cucumber.js
│   
└───src
│    │           
│    ├───helper
│    │   └───api_helper.ts
│    │   └───browser
│    │   │   └───browserOptions.ts
│    │   └───env
│    │   │   └───.env.prod
│    │   │   └───.env.staging
│    │   │   └───env.ts
│    │   └───types
│    │       └───env.d.ts
│    │           
│    ├───hooks
│    │   └───hooks.ts
│    │   └───pageFixture.ts
│    │       
│    ├───test
│        └───features
│        │  └───api
│        │  │    └───getBooking.feature
│        │  └───web
│        │       └───submit_form.feature
│        └───steps
│        │  └───api
│        │  │    └───apiRequest.ts
│        │  └───web
│        │       └───formSteps.ts
│                  
└───test-result
     └───cucumber-report.html
     └───cucumber-report.json
```
## Report

report it can be 3 type :
- Screeshoots
- html
- Json
