# Headless Comments SDK

A JavaScript/TypeScript SDK for the Headless Comments API.

## Installation

```bash
npm install @headlesscomments/sdk
```

## Usage

```typescript
import { HeadlessComments } from "@headlesscomments/sdk";

const headlessComments = new HeadlessComments("YOUR_API_KEY", "YOUR_SITE_ID");

const comments = await headlessComments.comments.list();
```

## Documentation

For more information, please refer to the [Headless Comments API documentation](https://docs.headlesscomments.io/).

