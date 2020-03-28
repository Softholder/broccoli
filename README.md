# broccoli
A simple single-page web application built with Vue and elementUI

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Test cases
Visit "http://localhost:8022" after running "npm run serve".   Click "Request an invite" to open a form and input values as follows, click "Send" to see the result.
| No. | Full Name | Email | Confirm Email | Result |
| ------ | ------ | ------ | ------ | ------ |
| 1 | null | null | null | Prompt for input|
| 2 | AB | abc@abc.com | abc@abc.com | Display "Full name at least 3 characters long"|
| 3 | ABC | abc@abc | abc@abc | Display "Email needs to be in correct format" |
| 4 | ABC | abc@abc.com | abc@abc | Display "Confirm Email needs to match Email"|
| 5 | ABC | usedemail@airwallex.com | usedemail@airwallex.com | The server returns 400, the app displays"Error: Request failed with status code 400" |
| 6 | ABC | abc@abc.com | abc@abc.com | The server returns 200,  the current popup switches to another one. After clicking "OK" button,  the popup closes, it returns to the homepage. |


