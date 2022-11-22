This reproduces a bug in SWC minification in Next v13.

This code will generate this error when build for production (`next build`; `next start`)
        
    ReferenceError: isInit is not defined
        at 5868 (3ce19b13-8417618845047f9d.js:30:108567)
        at i (webpack-8fa1640cc84ba8fe.js:1:141)
        at 25 (index-c328007c068203ae.js:1:254)
        at i (webpack-8fa1640cc84ba8fe.js:1:141)
        at index-c328007c068203ae.js:1:151
        at main-6507aa597046591c.js:1:22513