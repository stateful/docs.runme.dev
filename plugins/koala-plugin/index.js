module.exports = function (context, options) {
  return {
    name: "koala-plugin",
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: "script",
            innerHTML: `
              !function(t){if(window.ko)return;window.ko=[],["identify","track","removeListeners","open","on","off","qualify","ready"].forEach(function(t){ko[t]=function(){var n=[].slice.call(arguments);return n.unshift(t),ko.push(n),ko}});var n=document.createElement("script");n.async=!0,n.setAttribute("src","https://cdn.getkoala.com/v1/pk_69530cc97cda1184e3abab9c6b1e035b1f22/sdk.js"),(document.body || document.head).appendChild(n)}();
            `,
          },
        ],
      };
    },
  };
};
