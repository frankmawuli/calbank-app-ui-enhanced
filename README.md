
# CalBank App UI Enhanced

This project is a modern, cross-platform mobile banking application UI built with [Expo](https://expo.dev), [React Native](https://reactnative.dev/), and [TypeScript](https://www.typescriptlang.org/). It provides a robust, user-friendly interface for CalBank customers to manage accounts, perform transactions, and access banking services securely and efficiently.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure login and PIN verification screens.
- **Dashboard**: Account overview, balance visibility toggle, quick actions (send money, pay bills, deposit checks, manage cards).
- **Payments**: Payment confirmation, success, and unsuccessful flows.
- **Services**: Access to banking services (beneficiaries, bulk transfers, investments, instant accounts, payments, card services, agent banking, shop, locator, etc.).
- **Support**: In-app chat support for customer assistance.
- **Profile & Settings**: Manage personal information, account settings, transaction history, and security options.
- **Onboarding**: Guided onboarding for new users.
- **Modern UI**: Responsive layouts, custom components, and branded visuals.

## Screenshots

> Add screenshots of key screens here (Dashboard, Login, Payment, Services, Support, etc.)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/frankmawuli/calbank-app-ui-enhanced.git
   cd calbank-app-ui-enhanced
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm start
   # or
   npx expo start
   ```
4. **Run on device/emulator:**
   - Android: `npm run android`
   - iOS: `npm run ios`
   - Web: `npm run web`

### File-based Routing

Edit screens and navigation in the `app/` directory. Routing is managed by [expo-router](https://expo.github.io/router/docs).

## Project Structure

```
├── app/                # Main app screens and navigation
│   ├── (tabs)/         # Tabbed navigation screens (dashboard, services, support, more)
│   ├── auth/           # Authentication screens (login, pin)
│   ├── confirmation/   # Payment confirmation screens
│   ├── onboarding/     # Onboarding screens
├── assets/             # Images and icons
├── components/         # Reusable UI components
├── libs/               # Shared libraries and types
├── package.json        # Project metadata and scripts
├── app.json            # Expo app configuration
├── tsconfig.json       # TypeScript configuration
├── eslint.config.js    # ESLint configuration
```

## Tech Stack

- **React Native**: UI development
- **Expo**: Cross-platform tooling
- **TypeScript**: Type safety
- **expo-router**: File-based navigation
- **react-hook-form & zod**: Form validation
- **@expo/vector-icons**: Iconography
- **Custom Components**: Modular, reusable UI elements

## Available Scripts

- `npm start` — Start the Expo development server
- `npm run android` — Run app on Android emulator/device
- `npm run ios` — Run app on iOS simulator/device
- `npm run web` — Run app in the browser
- `npm run lint` — Run ESLint for code quality
- `npm run reset-project` — Reset to a blank starter app

## Contributing

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request. For major changes, open an issue first to discuss your ideas.

## License

This project is licensed under the MIT License.
