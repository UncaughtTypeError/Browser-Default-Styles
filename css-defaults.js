// Sample Data @https://stackoverflow.com/questions/6867254/browsers-default-css-for-html-elements

// Browser Rendering Engines
// - Chrome/Opera/Edge/Brave    : Blink (fork of WebKit)
// - Safari 				    : WebKit
// - Firefox				    : Gecko
// - IE						    : Trident
export const cssDefaults = [
    {
        element: 'html',
        type: 'Main root',
        description: 'The <strong>HTML <code>&lt;html&gt;</code> element</strong> represents the root (top-level element) of an HTML document, so it is also referred to as the <em>root element</em>. All other elements must be descendants of this element.',
        defaults: {
            display: 'block',        
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
            zoom: '1',
        },
    },
    {
        element: 'base',
        type: 'Document metadata',
        description: 'The <strong>HTML <code>&lt;base&gt;</code> element</strong> specifies the base URL to use for all relative URLs in a document.',
        defaults: {
            display: 'none',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'head',
        type: 'Document metadata',
        description: 'The <strong>HTML <code>&lt;head&gt;</code> element</strong> contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets.',
        defaults: {
            display: 'none',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'link',
        type: 'Document metadata',
        description: 'The <strong>HTML External Resource Link element (<code>&lt;link&gt;</code>)</strong> specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.',
        defaults: {
            display: 'none',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'meta',
        type: 'Document metadata',
        description: 'The <strong>HTML <code>&lt;meta&gt;</code> element</strong> represents metadata that cannot be represented by other HTML meta-related elements, like <code>&lt;base&gt;</code>, <code>&lt;link&gt;</code>, <code>&lt;script&gt;</code>, <code>&lt;style&gt;</code> or <code>&lt;title&gt;</code>.',
        defaults: {
            display: 'none',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'style',
        type: 'Document metadata',
        description: 'The <strong>HTML <code>&lt;style&gt;</code> element</strong> contains style information for a document, or part of a document.',
        defaults: {
            display: 'none',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
            zoom: 1,
        },
    },
    {
        element: 'title',
        type: 'Document metadata',
        description: 'The <strong>HTML Title element</strong> (<strong><code>&lt;title&gt;</code></strong>) defines the document\'s title that is shown in a browser\'s title bar or a page\'s tab.',
        defaults: {
            display: 'none',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'body',
        type: 'Sectioning root',
        description: 'The <strong>HTML <code>&lt;body&gt;</code> Element</strong> represents the content of an HTML&nbsp;document. There can be only one <code>&lt;body&gt;</code> element in a document.',
        defaults: {
            display: 'block',
            margin: '8px',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
            zoom: '1',
        },
    },
    {
        element: 'address',
        type: 'Content sectioning',
        description: 'The <strong>HTML <code>&lt;address&gt;</code> element</strong> indicates that the enclosed HTML provides contact information for a person or people, or for an organization.',
        defaults: {
            display: 'block',
            fontStyle: 'italic', 
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'article',
        type: 'Content sectioning',
        description: 'The <strong>HTML <code>&lt;article&gt;</code> element</strong> represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication).',
        defaults: {
            display: 'block', 
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'aside',
        type: 'Content sectioning',
        description: 'The <strong>HTML <code>&lt;aside&gt;</code> element</strong> represents a portion of a document whose content is only indirectly related to the document\'s main content.',
        defaults: {
            display: 'block',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'footer',
        type: 'Content sectioning',
        description: 'The<strong> HTML <code>&lt;footer&gt;</code> element</strong> represents a footer for its nearest sectioning content or sectioning root element. A footer typically contains information about the author of the section, copyright data or links to related documents.',
        defaults: {
            display: 'block',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'header',
        type: 'Content sectioning',
        description: 'The <strong>HTML <code>&lt;header&gt;</code> element</strong> represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.',
        defaults: {
            display: 'block', 
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'main',
        type: 'Content sectioning',
        description: 'The <strong>HTML <code>&lt;main&gt;</code> element</strong> represents the dominant content of the <code>&lt;body&gt;</code> of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.',
        defaults: {
            display: 'block', 
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'nav',
        type: 'Content sectioning',
        description: 'The <strong>HTML <code>&lt;nav&gt;</code> element</strong> represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.',
        defaults: {
            display: 'block',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'section',
        type: 'Content sectioning',
        description: 'The <strong>HTML <code>&lt;section&gt;</code> element</strong> represents a standalone section — which doesn\'t have a more specific semantic element to represent it — contained within an HTML document.',
        defaults: {
            display: 'block',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'hgroup',
        type: 'Content sectioning',
        description: 'The <strong>HTML <code>&lt;hgroup&gt;</code> element</strong> represents a multi-level heading for a section of a document. It groups a set of <code>&lt;h1&gt;–&lt;h6&gt;</code> elements.',
        defaults: {
            display: 'block',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'h1',
        type: 'Content sectioning',
        description: 'The <strong>HTML <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> elements</strong> represent six levels of section headings. <code>&lt;h1&gt;</code> is the highest section level and <code>&lt;h6&gt;</code> is the lowest.',
        defaults: {    
            display: 'block',
            fontWeight: 'bold',
            fontSize: '2em',
        },
        blink: {
            marginBlockStart: '0.67em',
            marginBlockEnd: '0.67em',
            marginInlineStart: '0',
            marginInlineEnd: '0',
        },
        webkit: {
            marginBlockStart: '0.67em',
            marginBlockEnd: '0.67em',
            marginInlineStart: '0',
            marginInlineEnd: '0',
        },
        gecko: {
            marginBlockStart: '0.67em',
            marginBlockEnd: '0.67em',
        },
        trident: {
            margin: '0.67em 0',
            pageBreakAfter: 'avoid',
        },
    },
    {
        element: 'h2',
        type: 'Content sectioning',
        description: 'The <strong>HTML <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> elements</strong> represent six levels of section headings. <code>&lt;h1&gt;</code> is the highest section level and <code>&lt;h6&gt;</code> is the lowest.',
        defaults: {
            display: 'block',
            fontWeight: 'bold',
            fontSize: '1.5em',
        },
        blink: {
            marginBlockStart: '0.83em',
            marginBlockEnd: '0.83em',
            marginInlineStart: '0',
            marginInlineEnd: '0',
        },
        webkit: {
            marginBlockStart: '0.83em',
            marginBlockEnd: '0.83em',
            marginInlineStart: '0',
            marginInlineEnd: '0',
        },
        gecko: {
            marginBlockStart: '0.83em',
            marginBlockEnd: '0.83em',
        },
        trident: {
            margin: '0.83em 0',
            pageBreakAfter: 'avoid',
        },
    },
    {
        element: 'h3',
        type: 'Content sectioning',
        description: 'The <strong>HTML <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> elements</strong> represent six levels of section headings. <code>&lt;h1&gt;</code> is the highest section level and <code>&lt;h6&gt;</code> is the lowest.',
        defaults: {
            display: 'block',
            fontWeight: 'bold',
            fontSize: '1.17em',
        },
        blink: {
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            marginInlineStart: '0',
            marginInlineEnd: '0',
        },
        webkit: {
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            marginInlineStart: '0',
            marginInlineEnd: '0',
        },
        gecko: {
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
        },
        trident: {
            margin: '1em 0',
            pageBreakAfter: 'avoid',
        },
    },
    {
        element: 'h4',
        type: 'Content sectioning',
        description: 'The <strong>HTML <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> elements</strong> represent six levels of section headings. <code>&lt;h1&gt;</code> is the highest section level and <code>&lt;h6&gt;</code> is the lowest.',
        defaults: {
            display: 'block',
            fontWeight: 'bold',
            fontSize: '1em',
        },
        blink: {
            marginBlockStart: '1.33em',
            marginBlockEnd: '1.33em',
            marginInlineStart: '0',
            marginInlineEnd: '0',
        },
        webkit: {
            marginBlockStart: '1.33em',
            marginBlockEnd: '1.33em',
            marginInlineStart: '0',
            marginInlineEnd: '0',
        },
        gecko: {
            marginBlockStart: '1.33em',
            marginBlockEnd: '1.33em',
        },
        trident: {
            margin: '1.33em 0',
            pageBreakAfter: 'avoid',
        },
    },
    {
        element: 'h5',
        type: 'Content sectioning',
        description: 'The <strong>HTML <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> elements</strong> represent six levels of section headings. <code>&lt;h1&gt;</code> is the highest section level and <code>&lt;h6&gt;</code> is the lowest.',
        defaults: {
            display: 'block',
            fontWeight: 'bold',
            fontSize: '0.83em',
        },
        blink: {
            marginBlockStart: '1.67em',
            marginBlockEnd: '1.67em',
            marginInlineStart: '0',
            marginInlineEnd: '0',
        },
        webkit: {
            marginBlockStart: '1.67em',
            marginBlockEnd: '1.67em',
            marginInlineStart: '0',
            marginInlineEnd: '0',
        },
        gecko: {
            marginBlockStart: '1.67em',
            marginBlockEnd: '1.67em',
        },
        trident: {
            margin: '1.67em 0',
            pageBreakAfter: 'avoid',
        },
    },
    {
        element: 'h6',
        type: 'Content sectioning',
        description: 'The <strong>HTML <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> elements</strong> represent six levels of section headings. <code>&lt;h1&gt;</code> is the highest section level and <code>&lt;h6&gt;</code> is the lowest.',
        defaults: {
            display: 'block',
            fontWeight: 'bold',
            fontSize: '0.67em',
        },
        blink: {
            marginBlockStart: '2.33em',
            marginBlockEnd: '2.33em',
            marginInlineStart: '0',
            marginInlineEnd: '0',
        },
        webkit: {
            marginBlockStart: '2.33em',
            marginBlockEnd: '2.33em',
            marginInlineStart: '0',
            marginInlineEnd: '0',
        },
        gecko: {
            marginBlockStart: '2.33em',
            marginBlockEnd: '2.33em',
        },
        trident: {
            margin: '2.33em 0',
            pageBreakAfter: 'avoid',
        },
    },
    {
        element: 'blockquote',
        type: 'Text content',
        description: 'The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the <strong>cite</strong> attribute, while a text representation of the source can be given using the <code>&lt;cite&gt;</code> element.',
        defaults: {
            display: 'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            marginInlineStart: '40px',
            marginInlineEnd: '40px',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
            margin: '1em 40px',
        },
    },
    {
        element: 'blockquote[type=cite]',
        type: 'Text content',
        description: 'The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the <strong>cite</strong> attribute, while a text representation of the source can be given using the <code>&lt;cite&gt;</code> element.',
        note: 'with attribute <code>type="cite"</code>',
        defaults: {
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
            display: 'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            marginInlineStart: '0',
            marginInlineEnd: '0',
            paddingInlineStart: '1em',
            borderInlineStart: 'solid',
            borderColor: 'blue',
            borderWidth: 'thin',
        },
        trident: {
        },
    },
    {
        element: 'dd',
        type: 'Text content',
        description: 'The <strong>HTML <code>&lt;dd&gt;</code> element</strong> provides the description, definition, or value for the preceding term (<code>&lt;dt&gt;</code>) in a description list (<code>&lt;dl&gt;</code>).',
        defaults: {
            display: 'block',
            marginInlineStart: '40px',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
            margin: '0 0 0 40px',
        },
    },
    {
        element: 'dir',
        type: 'Text content',
        description: 'The obsolete <strong>HTML Directory element</strong> (<strong><code>&lt;dir&gt;</code></strong>) is used as a container for a directory of files and/or folders, potentially with styles and icons applied by the user agent.',
        defaults: {
            display: 'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            listStyleType: 'disc',
            paddingInlineStart: '40px',
        },
        blink: {
            marginInlineStart: '0',
            marginInlineEnd: '0',
        },
        webkit: {
            marginInlineStart: '0',
            marginInlineEnd: '0',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'div',
        type: 'Text content',
        description: 'The <strong>HTML Content Division element</strong> (<strong><code>&lt;div&gt;</code></strong>) is the generic container for flow content. It has no effect on the content or layout until styled using CSS.',
        defaults: {
            display: 'block',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'dl',
        type: 'Text content',
        description: 'The <strong>HTML <code>&lt;dl&gt;</code> </strong>element represents a description list. The element encloses a list of groups of terms (specified using the <code>&lt;dt&gt;</code> element) and descriptions (provided by <code>&lt;dd&gt;</code> elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).',
        defaults: {
            display: 'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            marginInlineStart: '0',
            marginInlineEnd: '0',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
            margin: '1em 0',
        },
    },
    {
        element: 'dt',
        type: 'Text content',
        description: 'The <strong>HTML <code>&lt;dt&gt;</code> element</strong> specifies a term in a description or definition list, and as such must be used inside a <code>&lt;dl&gt;</code> element.',
        defaults: {
            display: 'block',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'figcaption',
        type: 'Text content',
        description: 'The <strong>HTML <code>&lt;figcaption&gt;</code> or Figure Caption element</strong> represents a caption or legend describing the rest of the contents of its parent <code>&lt;figure&gt;</code> element.',
        defaults: {
            display: 'block',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'figure',
        type: 'Text content',
        description: 'The <strong>HTML <code>&lt;figure&gt;</code> (Figure With Optional Caption) element</strong> represents self-contained content, potentially with an optional caption, which is specified using the (<code>&lt;figcaption&gt;</code>) element.',
        defaults: {
            display: 'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            marginInlineStart: '40px',
            marginInlineEnd: '40px',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'hr',
        type: 'Text content',
        description: 'The <strong>HTML <code>&lt;hr&gt;</code> element</strong> represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.',
        defaults: {
            display: 'block',
            color: 'gray',
            borderStyle: 'inset',
            borderWidth: '1px',
            marginBlockStart: '0.5em',
            marginBlockEnd: '0.5em',
            marginInlineStart: 'auto',
            marginInlineEnd: 'auto',
            overflow: 'hidden',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
            border: '1px inset',
            boxSizing: 'content-box',
        },
        trident: {
            marginBottom: '0.5em',
            marginTop: '0.5em',
            overflow: 'hidden',
            textAlign: 'center',
            zoom: '1',
        },
    },
    {
        element: 'li',
        type: 'Text content',
        description: 'The <strong>HTML <code>&lt;li&gt;</code> element</strong> is used to represent an item in a list.',
        defaults: {
            display: 'list-item',
        },
        blink: {
            textAlign: 'match-parent',
        },
        webkit: {
            textAlign: 'match-parent',
        },
        gecko: {
            textAlign: 'match-parent',
        },
        trident: {
        },
    },
    {
        element: 'ol',
        type: 'Text content',
        description: 'The <strong>HTML <code>&lt;ol&gt;</code> element</strong> represents an ordered list of items, typically rendered as a numbered list.',
        defaults: {
            display: 'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            paddingInlineStart: '40px',
            listStyleType: 'decimal',
        },
        blink: {
            marginInlineStart: '0',
            marginInlineEnd: '0',
        },
        webkit: {
            marginInlineStart: '0',
            marginInlineEnd: '0',
        },
        gecko: {
            counterReset: 'list-item',
        },
        trident: {
            listStyleImage: 'none',
            listStylePosition: 'outside',
            margin: '1em 0',
            padding: '0 0 0 30pt',
        },
    },
    {
        element: 'p',
        type: 'Text content',
        description: 'The <strong>HTML <code>&lt;p&gt;</code> element</strong> represents a paragraph.',
        defaults: {
            display: 'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
        },
        blink: {
            marginInlineStart: '0',
            marginInlineEnd: '0',
        },
        webkit: {
            marginInlineStart: '0',
            marginInlineEnd: '0',
        },
        gecko: {
        },
        trident: {
            margin: '1em 0',
        },
    },
    {
        element: 'pre',
        type: 'Text content',
        description: 'The <strong>HTML <code>&lt;pre&gt;</code> element</strong> represents preformatted text which is to be presented exactly as written in the HTML file.',
        defaults: {
            display: 'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            fontFamily: 'monospace',
            whiteSpace: 'pre',
        },
        blink: {
            margin: '1em 0',
        },
        webkit: {
            margin: '1em 0',
        },
        gecko: {
        },
        trident: {
            margin: '1em 0',
            fontSize: '10pt',
        },
    },
    {
        element: 'ul',
        type: 'Text content',
        description: 'The<strong> HTML <code>&lt;ul&gt;</code> element</strong> represents an unordered list of items, typically rendered as a bulleted list.',
        defaults: {
            display: 'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            paddingInlineStart: '40px',
            listStyleType: 'disc',
        },
        blink: {
            marginInlineStart: '0',
            marginInlineEnd: '0',
        },
        webkit: {
            marginInlineStart: '0',
            marginInlineEnd: '0',
        },
        gecko: {
            counterReset: 'list-item',
        },
        trident: {
            listStyleImage: 'none',
            listStylePosition: 'outside',
            margin: '1em 0',
            padding: '0 0 0 30pt',
        },
    },
    {
        element: 'a',
        type: 'Inline text semantics',
        description: 'The <strong>HTML <code>&lt;a&gt;</code> element</strong> (or <em>anchor</em> element), with <a href="#href">its <code>href</code> attribute</a>, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.',
        defaults: {
            color: '#0000EE',
            textDecoration: 'underline',
            cursor: 'pointed',
        },
        blink: {
            textDecoration: 'underline',
            cursor: 'auto',
        },
        webkit: {
            textDecoration: 'underline',
            cursor: 'auto',
        },
        gecko: {
        },
        trident: {
            color: '#0066cc',
            textDecoration: 'underline',
        },
    },
    {
        element: 'a:visited',
        type: 'Inline text semantics',
        state: ':visited',
        description: 'The <strong>HTML <code>&lt;a&gt;</code> element</strong> (or <em>anchor</em> element), with <a href="#href">its <code>href</code> attribute</a>, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.',
        defaults: {
            color: '#551A8B',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
            color: '#800080',
        },
    },
    {
        element: 'a:active',
        type: 'Inline text semantics',
        state: ':active',
        description: 'The <strong>HTML <code>&lt;a&gt;</code> element</strong> (or <em>anchor</em> element), with <a href="#href">its <code>href</code> attribute</a>, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.',
        defaults: {
            color: '#FF0000',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'abbr[title]',
        type: 'Inline text semantics',
        description: 'The <strong>HTML Abbreviation element </strong>(<strong><code>&lt;abbr&gt;</code></strong>) represents an abbreviation or acronym; the optional <code>title</code> attribute can provide an expansion or description for the abbreviation.',
        note: 'with attribute <code>title</code>',
        defaults: {
            textDecoration: 'dotted underline',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
            textDecoration: 'dotted underline',
        },
        trident: {
        },
    },
    {
        element: 'b',
        type: 'Inline text semantics',
        description: 'The <strong>HTML Bring Attention To element (<code>&lt;b&gt;</code>)</strong>&nbsp; is used to draw the reader\'s attention to the element\'s contents, which are not otherwise granted special importance.',
        defaults: {
            fontWeight: 'bolder',
        },
        blink: {
            fontWeight: 'bold',
        },
        webkit: {
            fontWeight: 'bold',
        },
        gecko: {
            fontWeight: 'bolder',
        },
        trident: {
            fontWeight: 'bold',
        },
    },
    {
        element: 'bdi',
        type: 'Inline text semantics',
        description: 'The HTML <strong>Bidirectional Isolate element</strong> (<strong><code>&lt;bdi&gt;</code></strong>)&nbsp; tells the browser\'s bidirectional algorithm to treat the text it contains in isolation from its surrounding text.',
        defaults: {
            unicodeBidi: 'isolate',
        },
        blink: {
            unicodeBidi: 'isolate',
        },
        webkit: {
            unicodeBidi: 'isolate',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'bdo',
        type: 'Inline text semantics',
        description: 'The <strong>HTML Bidirectional Text Override element</strong> (<strong><code>&lt;bdo&gt;</code></strong>) overrides the current directionality of text, so that the text within is rendered in a different direction.',
        defaults: {
            unicodeBidi: 'isolate-override',
        },
        blink: {
            unicodeBidi: 'bidi-override',
        },
        webkit: {
            unicodeBidi: 'bidi-override',
        },
        gecko: {
            unicodeBidi: 'isolate-override',
        },
        trident: {
            direction: 'rtl',
            unicodeBidi: 'bidi-override',
        },
    },
    {
        element: 'br',
        type: 'Inline text semantics',
        description: 'The <strong>HTML <code>&lt;br&gt;</code> element</strong> produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.',
        defaults: {
            displayOutside: 'newline',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'cite',
        type: 'Inline text semantics',
        description: 'The <strong>HTML Citation element</strong> (<strong><code>&lt;cite&gt;</code></strong>) is used to describe a reference to a cited creative work, and must include the title of that work.',
        defaults: {
            fontStyle: 'italic',
        },
        blink: {
            fontStyle: 'italic',
        },
        webkit: {
            fontStyle: 'italic',
        },
        gecko: {
            fontStyle: 'italic',
        },
        trident: {
            fontStyle: 'italic',
        },
    },
    {
        element: 'code',
        type: 'Inline text semantics',
        description: 'The <strong>HTML <code>&lt;code&gt;</code> element</strong> displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code.',
        defaults: {
            fontFamily: 'monospace',
        },
        blink: {
            fontFamily: 'monospace',
        },
        webkit: {
            fontFamily: 'monospace',
        },
        gecko: {
            fontFamily: 'monospace',
        },
        trident: {
            fontFamily: 'monospace',
            fontSize: '10pt',
        },
    },
    {
        element: 'data',
        type: 'Inline text semantics',
        description: 'The <strong>HTML <code>&lt;data&gt;</code> element</strong> links a given content with a machine-readable translation. If the content is time- or date-related, the <code>&lt;time&gt;</code> element must be used.',
        defaults: {
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'dfn',
        type: 'Inline text semantics',
        description: 'The <strong>HTML Definition element</strong> (<strong><dfn>&lt;dfn&gt;</dfn></strong>) is used to indicate the term being defined within the context of a definition phrase or sentence.',
        defaults: {
            fontStyle: 'italic',
        },
        blink: {
            fontStyle: 'italic',
        },
        webkit: {
            fontStyle: 'italic',
        },
        gecko: {
            fontStyle: 'italic',
        },
        trident: {
            fontStyle: 'italic',
        },
    },
    {
        element: 'em',
        type: 'Inline text semantics',
        description: 'The <strong>HTML <code>&lt;em&gt;</code> element</strong> marks text that has stress emphasis. The <code>&lt;em&gt;</code> element can be nested, with each level of nesting indicating a greater degree of emphasis.',
        defaults: {
            fontStyle: 'italic',
        },
        blink: {
            fontStyle: 'italic',
        },
        webkit: {
            fontStyle: 'italic',
        },
        gecko: {
            fontStyle: 'italic',
        },
        trident: {
            fontStyle: 'italic',
        },
    },
    {
        element: 'i',
        type: 'Inline text semantics',
        description: 'The <strong>HTML <code>&lt;i&gt;</code> element</strong> represents a range of text that is set off from the normal text for some reason. Some examples include technical terms, foreign language phrases, or fictional character thoughts. It is typically displayed in italic type.',
        defaults: {
            fontStyle: 'italic',
        },
        blink: {
            fontStyle: 'italic',
        },
        webkit: {
            fontStyle: 'italic',
        },
        gecko: {
            fontStyle: 'italic',
        },
        trident: {
            fontStyle: 'italic',
        },
    },
]