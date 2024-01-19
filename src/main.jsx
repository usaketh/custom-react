
// Step 1: Create an object for React element with HTML anchor data
const reactElement = {
  type: 'a',
  props: {
    href: 'https://example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: 'Click me',
  },
};

// Step 2: Create a function to generate HTML code from React element
function generateHTML(reactElement) {
  const { type, props } = reactElement;
  const children = props.children || [];

  const childrenHTML = Array.isArray(children)
    ? children.map((child) => generateHTML(child)).join('')
    : children;

  return `<${type} ${Object.keys(props)
    .map((key) => `${key}="${props[key]}"`)
    .join(' ')}>${childrenHTML}</${type}>`;
}

// Step 3: Create a function customRender to render the HTML
function customRender(element, path) {
  const htmlCode = generateHTML(element);
  // Assuming 'path' is the ID or class of the HTML element where it will be rendered
  const container = document.querySelector(path);
  if (container) {
    container.innerHTML = htmlCode;
  }
}

// Example usage
customRender(reactElement, '#root');
