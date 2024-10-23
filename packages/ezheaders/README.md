<p align="center">
  <a href="https://clerk.com?utm_source=github&utm_medium=clerk_javascript" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://images.clerk.com/static/logo-dark-mode-400x400.png">
      <img src="https://images.clerk.com/static/logo-light-mode-400x400.png" height="64">
    </picture>
  </a>
  <br />
</p>
<h1 align="center">
  ezheaders by Clerk
</h1>
<p align="center">
  <strong>
    Clerk helps developers build user management. We provide streamlined user experiences for your users to sign up, sign in, and manage their profile.
  </strong>
</p>

[![chat on Discord](https://img.shields.io/discord/856971667393609759.svg?logo=discord)](https://clerk.com/discord)
[![documentation](https://img.shields.io/badge/documentation-clerk-green.svg)](https://clerk.com/docs)
[![twitter](https://img.shields.io/twitter/follow/ClerkDev?style=social)](https://twitter.com/intent/follow?screen_name=ClerkDev)

---

**Clerk is Hiring!**

Would you like to work on Open Source software and help maintain this repository? [Apply today!](https://jobs.ashbyhq.com/clerk)

---

## Introduction
Enjoy a more readable API with `header()` and `cookie()` - no more juggling intermediate variables or extra parentheses when handling `await`.
Plus, a way to use `headers` and `cookies` as variable names without renaming the NextJS APIs upon import.

This lightweight package provides drop-in replacements and handy utilities that not only let you reclaim those variable names but also offer a more readable API.

## Why EZHeaders?

Because naming things is hard enough without your tools getting in the way. With `ezheaders`, you can keep your code intuitive and your variable names straightforward.

- **Simplified Async Access:** With `header()` and `cookie()`, you can access specific headers and cookies directly, without intermediate variables or extra `await` parentheses. This makes your asynchronous code cleaner and more readable.
- **No More Awkward Names:** Stop settling for `headerStore` or `cookieJar`.
- **Cleaner Code:** Write code that's easy to read and maintain.
- **Zero Configuration:** Just install and import. It's that easy!
- **Tree-shakable:** Only import what you need. No more bloated bundles.

## Installation

```bash
npm install ezheaders
```

## Usage examples

### Using `header()`

With the new async nature of `headers` in Next.js, accessing a specific header often requires extra steps. `header()` simplifies this by allowing you to retrieve a header value directly, without intermediate variables or extra parentheses.

```jsx
import { header } from 'ezheaders';

const contentType = await header('Content-Type');
```

### Using `cookie()`

Similarly, `cookie()` lets you access a specific cookie directly, making your code cleaner and more readable.

```jsx
import { cookie } from 'ezheaders';

const sessionId = await cookie('sessionId');
```

If you need to set a cookie, simply pass a value as the second argument.

```jsx
import { cookie } from 'ezheaders';
await cookie('sessionId', 'abc123')
```

### Using `getHeaders()`

If you prefer working with the entire headers object, `getHeaders()` lets you use `headers` as a variable name without conflicts.

```jsx
import { getHeaders } from 'ezheaders';

const headers = await getHeaders();
const contentType = headers.get('Content-Type');
```

### Using `getCookies()`

Likewise, `getCookies()` lets you use `cookies` as a variable name, keeping your code intuitive.

```jsx
import { getCookies } from 'ezheaders';

const cookies = await getCookies();
const theme = cookies.get('theme');
```

## API Reference

For detailed information on each function, refer to the inline documentation.

## Contributing

Contributions are welcome! If you have ideas for improvements or new features, feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-awesome-feature`)
3. Commit your changes (`git commit -am 'Add my awesome feature'`)
4. Push to the branch (`git push origin feature/my-awesome-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
