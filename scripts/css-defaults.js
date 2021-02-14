// Sample Data @https://stackoverflow.com/questions/6867254/browsers-default-css-for-html-elements

// Browser Rendering Engines
// - Chrome/Opera/Edge/Brave    : Blink (fork of WebKit)
// - Safari 				    : WebKit
// - Firefox				    : Gecko
// - IE						    : Trident
export const cssDefaults = [
    {
        element: 'html',
        type: ['Main root'],
        categories: [],
        use: 'Root element',
        description: 'The <strong>HTML <code>&lt;html&gt;</code> element</strong> represents the root (top-level element) of an HTML document, so it is also referred to as the <em>root element</em>. All other elements must be descendants of this element.',
        obsolete: false,
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
        element: 'html:focus, html:focus-visible',
        type: ['Main root'],
        categories: [],
        use: 'Root element',
        get description() { // set "lazy"/"memoized" getter - avoid recalculation on subsequent lookups
            delete this.description;
            let element = cssDefaults.find(entry => entry.element === 'html');
            return this.description = element['description'];
        },
        obsolete: false,
        defaults: {       
        },
        blink: {
            outline: 'none',
        },
        webkit: {
            outline: 'none',
        },
        gecko: {
            outlineStyle: 'none',
        },
        trident: {
        },
    },
    {
        element: 'base',
        type: ['Document metadata'],
        categories: ['metadata'],
        use: 'Base URL and default target browsing context for hyperlinks and forms',
        description: 'The <strong>HTML <code>&lt;base&gt;</code> element</strong> specifies the base URL to use for all relative URLs in a document.',
        obsolete: false,
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
        type: ['Document metadata'],
        categories: [],
        use: 'Container for document metadata',
        description: 'The <strong>HTML <code>&lt;head&gt;</code> element</strong> contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets.',
        obsolete: false,
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
        type: ['Document metadata'],
        categories: ['metadata', 'flow', 'phrasing'],
        use: 'Link metadata',
        description: 'The <strong>HTML External Resource Link element (<code>&lt;link&gt;</code>)</strong> specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.',
        obsolete: false,
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
        type: ['Document metadata'],
        categories: ['metadata', 'flow', 'phrasing'],
        use: 'Text metadata',
        description: 'The <strong>HTML <code>&lt;meta&gt;</code> element</strong> represents metadata that cannot be represented by other HTML meta-related elements, like <code>&lt;base&gt;</code>, <code>&lt;link&gt;</code>, <code>&lt;script&gt;</code>, <code>&lt;style&gt;</code> or <code>&lt;title&gt;</code>.',
        obsolete: false,
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
        type: ['Document metadata'],
        categories: ['metadata'],
        use: 'Embedded styling information',
        description: 'The <strong>HTML <code>&lt;style&gt;</code> element</strong> contains style information for a document, or part of a document.',
        obsolete: false,
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
        type: ['Document metadata'],
        categories: ['metadata'],
        use: 'Document title',
        description: 'The <strong>HTML Title element</strong> (<strong><code>&lt;title&gt;</code></strong>) defines the document\'s title that is shown in a browser\'s title bar or a page\'s tab.',
        obsolete: false,
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
        type: ['Sectioning root'],
        categories: ['sectioning root'],
        use: 'Document body',
        description: 'The <strong>HTML <code>&lt;body&gt;</code> Element</strong> represents the content of an HTML&nbsp;document. There can be only one <code>&lt;body&gt;</code> element in a document.',
        obsolete: false,
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
        type: ['Content sectioning'],
        categories: ['flow', 'palpable'],
        use: 'Contact information for a page or article element',
        description: 'The <strong>HTML <code>&lt;address&gt;</code> element</strong> indicates that the enclosed HTML provides contact information for a person or people, or for an organization.',
        obsolete: false,
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
        type: ['Content sectioning'],
        categories: ['flow', 'sectioning', 'palpable'],
        use: 'Self-contained syndicatable or reusable composition',
        description: 'The <strong>HTML <code>&lt;article&gt;</code> element</strong> represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication).',
        obsolete: false,
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
        type: ['Content sectioning'],
        categories: ['flow', 'sectioning', 'palpable'],
        use: 'Sidebar for tangentially related content',
        description: 'The <strong>HTML <code>&lt;aside&gt;</code> element</strong> represents a portion of a document whose content is only indirectly related to the document\'s main content.',
        obsolete: false,
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
        type: ['Content sectioning'],
        categories: ['flow', 'palpable'],
        use: 'Footer for a page or section',
        description: 'The<strong> HTML <code>&lt;footer&gt;</code> element</strong> represents a footer for its nearest sectioning content or sectioning root element. A footer typically contains information about the author of the section, copyright data or links to related documents.',
        obsolete: false,
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
        type: ['Content sectioning'],
        categories: ['flow', 'palpable'],
        use: 'Introductory or navigational aids for a page or section',
        description: 'The <strong>HTML <code>&lt;header&gt;</code> element</strong> represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.',
        obsolete: false,
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
        type: ['Content sectioning'],
        categories: ['flow', 'palpable'],
        use: 'Container for the dominant contents of the document',
        description: 'The <strong>HTML <code>&lt;main&gt;</code> element</strong> represents the dominant content of the <code>&lt;body&gt;</code> of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.',
        obsolete: false,
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
        type: ['Content sectioning'],
        categories: ['flow', 'sectioning', 'palpable'],
        use: 'Section with navigational links',
        description: 'The <strong>HTML <code>&lt;nav&gt;</code> element</strong> represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.',
        obsolete: false,
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
        type: ['Content sectioning'],
        categories: ['flow', 'sectioning', 'palpable'],
        use: 'Generic document or application section',
        description: 'The <strong>HTML <code>&lt;section&gt;</code> element</strong> represents a standalone section — which doesn\'t have a more specific semantic element to represent it — contained within an HTML document.',
        obsolete: false,
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
        type: ['Content sectioning'],
        categories: ['flow', 'heading', 'palpable'],
        use: 'Heading group',
        description: 'The <strong>HTML <code>&lt;hgroup&gt;</code> element</strong> represents a multi-level heading for a section of a document. It groups a set of <code>&lt;h1&gt;–&lt;h6&gt;</code> elements.',
        obsolete: false,
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
        type: ['Content sectioning'],
        categories: ['flow', 'heading', 'palpable'],
        use: 'Section heading',
        description: 'The <strong>HTML <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> elements</strong> represent six levels of section headings. <code>&lt;h1&gt;</code> is the highest section level and <code>&lt;h6&gt;</code> is the lowest.',
        obsolete: false,
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
        type: ['Content sectioning'],
        categories: ['flow', 'heading', 'palpable'],
        use: 'Section heading',
        description: 'The <strong>HTML <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> elements</strong> represent six levels of section headings. <code>&lt;h1&gt;</code> is the highest section level and <code>&lt;h6&gt;</code> is the lowest.',
        obsolete: false,
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
        type: ['Content sectioning'],
        categories: ['flow', 'heading', 'palpable'],
        use: 'Section heading',
        description: 'The <strong>HTML <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> elements</strong> represent six levels of section headings. <code>&lt;h1&gt;</code> is the highest section level and <code>&lt;h6&gt;</code> is the lowest.',
        obsolete: false,
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
        type: ['Content sectioning'],
        categories: ['flow', 'heading', 'palpable'],
        use: 'Section heading',
        description: 'The <strong>HTML <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> elements</strong> represent six levels of section headings. <code>&lt;h1&gt;</code> is the highest section level and <code>&lt;h6&gt;</code> is the lowest.',
        obsolete: false,
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
        type: ['Content sectioning'],
        categories: ['flow', 'heading', 'palpable'],
        use: 'Section heading',
        description: 'The <strong>HTML <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> elements</strong> represent six levels of section headings. <code>&lt;h1&gt;</code> is the highest section level and <code>&lt;h6&gt;</code> is the lowest.',
        obsolete: false,
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
        type: ['Content sectioning'],
        categories: ['flow', 'heading', 'palpable'],
        use: 'Section heading',
        description: 'The <strong>HTML <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> elements</strong> represent six levels of section headings. <code>&lt;h1&gt;</code> is the highest section level and <code>&lt;h6&gt;</code> is the lowest.',
        obsolete: false,
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
        type: ['Text content'],
        categories: ['flow', 'sectioning root', 'palpable'],
        use: 'A section quoted from another source',
        description: 'The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the <strong>cite</strong> attribute, while a text representation of the source can be given using the <code>&lt;cite&gt;</code> element.',
        obsolete: false,
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
        type: ['Text content'],
        categories: ['flow', 'sectioning root', 'palpable'],
        use: 'A section quoted from another source',
        description: 'The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the <strong>cite</strong> attribute, while a text representation of the source can be given using the <code>&lt;cite&gt;</code> element.',
        note: 'with attribute <code>type="cite"</code>',
        obsolete: false,
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
        type: ['Text content'],
        categories: [],
        use: 'Content for corresponding dt element(s)',
        description: 'The <strong>HTML <code>&lt;dd&gt;</code> element</strong> provides the description, definition, or value for the preceding term (<code>&lt;dt&gt;</code>) in a description list (<code>&lt;dl&gt;</code>).',
        obsolete: false,
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
        element: 'div',
        type: ['Text content'],
        categories: ['flow', 'palpable'],
        use: 'Generic flow container, or container for name-value groups in dl elements',
        description: 'The <strong>HTML Content Division element</strong> (<strong><code>&lt;div&gt;</code></strong>) is the generic container for flow content. It has no effect on the content or layout until styled using CSS.',
        obsolete: false,
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
        type: ['Text content'],
        categories: ['flow', 'palpable'],
        use: 'Association list consisting of zero or more name-value groups',
        description: 'The <strong>HTML <code>&lt;dl&gt;</code> </strong>element represents a description list. The element encloses a list of groups of terms (specified using the <code>&lt;dt&gt;</code> element) and descriptions (provided by <code>&lt;dd&gt;</code> elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).',
        obsolete: false,
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
        type: ['Text content'],
        categories: [],
        use: 'Legend for corresponding dd element(s)',
        description: 'The <strong>HTML <code>&lt;dt&gt;</code> element</strong> specifies a term in a description or definition list, and as such must be used inside a <code>&lt;dl&gt;</code> element.',
        obsolete: false,
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
        type: ['Text content'],
        categories: [],
        use: 'Caption for figure',
        description: 'The <strong>HTML <code>&lt;figcaption&gt;</code> or Figure Caption element</strong> represents a caption or legend describing the rest of the contents of its parent <code>&lt;figure&gt;</code> element.',
        obsolete: false,
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
        type: ['Text content'],
        categories: ['flow', 'sectioning root', 'palpable'],
        use: 'Figure with optional caption',
        description: 'The <strong>HTML <code>&lt;figure&gt;</code> (Figure With Optional Caption) element</strong> represents self-contained content, potentially with an optional caption, which is specified using the (<code>&lt;figcaption&gt;</code>) element.',
        obsolete: false,
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
        type: ['Text content'],
        categories: ['flow'],
        use: 'Thematic break',
        description: 'The <strong>HTML <code>&lt;hr&gt;</code> element</strong> represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.',
        obsolete: false,
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
        type: ['Text content'],
        categories: [],
        use: 'List item',
        description: 'The <strong>HTML <code>&lt;li&gt;</code> element</strong> is used to represent an item in a list.',
        obsolete: false,
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
        type: ['Text content'],
        categories: ['flow', 'palpable'],
        use: 'Ordered list',
        description: 'The <strong>HTML <code>&lt;ol&gt;</code> element</strong> represents an ordered list of items, typically rendered as a numbered list.',
        obsolete: false,
        defaults: {
            display: 'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            paddingInlineStart: '40px',
            listStyletype: 'decimal',
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
        type: ['Text content'],
        categories: ['flow', 'palpable'],
        use: 'Paragraph',
        description: 'The <strong>HTML <code>&lt;p&gt;</code> element</strong> represents a paragraph.',
        obsolete: false,
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
        type: ['Text content'],
        categories: ['flow', 'palpable'],
        use: 'Block of preformatted text',
        description: 'The <strong>HTML <code>&lt;pre&gt;</code> element</strong> represents preformatted text which is to be presented exactly as written in the HTML file.',
        obsolete: false,
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
        type: ['Text content'],
        categories: ['flow', 'palpable'],
        use: 'List',
        description: 'The<strong> HTML <code>&lt;ul&gt;</code> element</strong> represents an unordered list of items, typically rendered as a bulleted list.',
        obsolete: false,
        defaults: {
            display: 'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            paddingInlineStart: '40px',
            listStyletype: 'disc',
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
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'interactive', 'palpable'],
        use: 'Hyperlink',
        description: 'The <strong>HTML <code>&lt;a&gt;</code> element</strong> (or <em>anchor</em> element), with its <code>href</code> attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.',
        obsolete: false,
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
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'interactive', 'palpable'],
        use: 'Hyperlink',
        state: ':visited',
        description: 'The <strong>HTML <code>&lt;a&gt;</code> element</strong> (or <em>anchor</em> element), with its <code>href</code> attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.',
        note: 'during <code>:visited</code> state',
        obsolete: false,
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
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'interactive', 'palpable'],
        use: 'Hyperlink',
        state: ':active',
        description: 'The <strong>HTML <code>&lt;a&gt;</code> element</strong> (or <em>anchor</em> element), with its <code>href</code> attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.',
        note: 'during <code>:active</code> state',
        obsolete: false,
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
        element: 'abbr',
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Abbreviation',
        description: 'The <strong>HTML Abbreviation element </strong>(<strong><code>&lt;abbr&gt;</code></strong>) represents an abbreviation or acronym; the optional <code>title</code> attribute can provide an expansion or description for the abbreviation.',
        obsolete: false,
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
        element: 'abbr[title]',
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Abbreviation',
        description: 'The <strong>HTML Abbreviation element </strong>(<strong><code>&lt;abbr&gt;</code></strong>) represents an abbreviation or acronym; the optional <code>title</code> attribute can provide an expansion or description for the abbreviation.',
        note: 'with attribute <code>title</code>',
        obsolete: false,
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
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Keywords',
        description: 'The <strong>HTML Bring Attention To element (<code>&lt;b&gt;</code>)</strong>&nbsp; is used to draw the reader\'s attention to the element\'s contents, which are not otherwise granted special importance.',
        obsolete: false,
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
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Text directionality isolation',
        description: 'The HTML <strong>Bidirectional Isolate element</strong> (<strong><code>&lt;bdi&gt;</code></strong>)&nbsp; tells the browser\'s bidirectional algorithm to treat the text it contains in isolation from its surrounding text.',
        obsolete: false,
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
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Text directionality formatting',
        description: 'The <strong>HTML Bidirectional Text Override element</strong> (<strong><code>&lt;bdo&gt;</code></strong>) overrides the current directionality of text, so that the text within is rendered in a different direction.',
        obsolete: false,
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
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing'],
        use: 'Line break, e.g. in poem or postal address',
        description: 'The <strong>HTML <code>&lt;br&gt;</code> element</strong> produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.',
        obsolete: false,
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
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Title of a work',
        description: 'The <strong>HTML Citation element</strong> (<strong><code>&lt;cite&gt;</code></strong>) is used to describe a reference to a cited creative work, and must include the title of that work.',
        obsolete: false,
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
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Computer code',
        description: 'The <strong>HTML <code>&lt;code&gt;</code> element</strong> displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code.',
        obsolete: false,
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
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Machine-readable equivalent',
        description: 'The <strong>HTML <code>&lt;data&gt;</code> element</strong> links a given content with a machine-readable translation. If the content is time- or date-related, the <code>&lt;time&gt;</code> element must be used.',
        obsolete: false,
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
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Defining instance',
        description: 'The <strong>HTML Definition element</strong> (<strong><dfn>&lt;dfn&gt;</dfn></strong>) is used to indicate the term being defined within the context of a definition phrase or sentence.',
        obsolete: false,
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
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Stress emphasis',
        description: 'The <strong>HTML <code>&lt;em&gt;</code> element</strong> marks text that has stress emphasis. The <code>&lt;em&gt;</code> element can be nested, with each level of nesting indicating a greater degree of emphasis.',
        obsolete: false,
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
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Alternate voice',
        description: 'The <strong>HTML <code>&lt;i&gt;</code> element</strong> represents a range of text that is set off from the normal text for some reason. Some examples include technical terms, foreign language phrases, or fictional character thoughts. It is typically displayed in italic type.',
        obsolete: false,
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
        element: 'kbd',
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'User input',
        description: 'The <strong>HTML Keyboard Input element</strong> (<strong><code>&lt;kbd&gt;</code></strong>) represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device.',
        obsolete: false,
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
        element: 'mark',
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Highlight',
        description: 'The <strong>HTML Mark Text element</strong> (<strong><code>&lt;mark&gt;</code></strong>) represents text which is <strong>marked</strong> or <strong>highlighted</strong> for reference or notation purposes, due to the marked passage\'s relevance or importance in the enclosing context.',
        obsolete: false,
        defaults: {
            background: 'yellow',
            color: 'black',
        },
        blink: {
            backgroundColor: 'yellow',
            color: 'black',
        },
        webkit: {
            backgroundColor: 'yellow',
            color: 'black',
        },
        gecko: {
            background: 'yellow',
            color: 'black',
        },
        trident: {
        },
    },
    {
        element: 'q',
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Quotation',
        description: 'The <strong>HTML <code>&lt;q&gt;</code> element </strong> indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks.',
        obsolete: false,
        defaults: {
        },
        blink: {
            display: 'inline',
        },
        webkit: {
            display: 'inline',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'q:before',
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Quotation',
        description: 'The <strong>HTML <code>&lt;q&gt;</code> element </strong> indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks.',
        note: 'with <em>pseudo-element</em> <code>:before</code>',
        obsolete: false,
        defaults: {
            content: 'open-quote',
        },
        blink: {
            content: 'open-quote',
        },
        webkit: {
            content: 'open-quote',
        },
        gecko: {
            content: 'open-quote',
        },
        trident: {
        },
    },
    {
        element: 'q:after',
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Quotation',
        description: 'The <strong>HTML <code>&lt;q&gt;</code> element </strong> indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks.',
        note: 'with <em>pseudo-element</em> <code>:after</code>',
        obsolete: false,
        defaults: {
            content: 'close-quote',
        },
        blink: {
            content: 'close-quote',
        },
        webkit: {
            content: 'close-quote',
        },
        gecko: {
            content: 'close-quote',
        },
        trident: {
        },
    },
    {
        element: 'rb',
        type: ['Inline text semantics'],
        categories: ['none'],
        use: 'Ruby annotation(s)',
        description: 'The <strong>HTML Ruby Fallback Parenthesis (<code>&lt;rp&gt;</code>) element</strong> is used to provide fall-back parentheses for browsers that do not support display of ruby annotations using the <code>&lt;ruby&gt;</code> element.',
        obsolete: false,
        defaults: {
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
            display: 'ruby-base',
            whiteSpace: 'nowrap',
        },
        trident: {
        },
    },
    {
        element: 'rp',
        type: ['Inline text semantics'],
        categories: ['none'],
        use: 'Parenthesis for ruby annotation text',
        description: 'The <strong>HTML Ruby Fallback Parenthesis (<code>&lt;rp&gt;</code>) element</strong> is used to provide fall-back parentheses for browsers that do not support display of ruby annotations using the <code>&lt;ruby&gt;</code> element.',
        obsolete: false,
        defaults: {
            display: 'none',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
            display: 'none',
            unicodeBidi: 'isolate',
        },
        trident: {
            fontSize: '6pt',
        },
    },
    {
        element: 'ruby > rp',
        type: ['Inline text semantics'],
        categories: ['none'],
        use: 'Parenthesis for ruby annotation text',
        description: 'The <strong>HTML Ruby Fallback Parenthesis (<code>&lt;rp&gt;</code>) element</strong> is used to provide fall-back parentheses for browsers that do not support display of ruby annotations using the <code>&lt;ruby&gt;</code> element.',
        note: 'direct descendent of <code>ruby</code>',
        obsolete: false,
        defaults: {
        },
        blink: {
            display: 'none',
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'rt',
        type: ['Inline text semantics'],
        categories: ['none'],
        use: 'Ruby annotation text',
        description: 'The <strong>HTML Ruby Text (<code>&lt;rt&gt;</code>) element</strong> specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The <code>&lt;rt&gt;</code> element must always be contained within a <code>&lt;ruby&gt;</code> element.',
        obsolete: false,
        defaults: {
            display: 'ruby-text',
        },
        blink: {
            lineHeight: 'normal',
            textIndent: '0',
        },
        webkit: {
            lineHeight: 'normal',
            textIndent: '0',
        },
        gecko: {
            display: 'ruby-text',
            whiteSpace: 'nowrap',
            fontSize: '50%',
            lineHeight: '1',
            fontVariantEastAsian: 'ruby',
            textEmphasis: 'none',
            unicodeBidi: 'isolate',
        },
        trident: {
            display: 'ruby-text',
            fontSize: '6pt',
        },
    },
    {
        element: 'ruby > rt',
        type: ['Inline text semantics'],
        categories: ['none'],
        use: 'Ruby annotation text',
        description: 'The <strong>HTML Ruby Text (<code>&lt;rt&gt;</code>) element</strong> specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The <code>&lt;rt&gt;</code> element must always be contained within a <code>&lt;ruby&gt;</code> element.',
        note: 'direct descendent of <code>ruby</code>',
        obsolete: false,
        defaults: {
        },
        blink: {
            display: 'block',
            textAlign: 'start',
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'rtc > rt',
        type: ['Inline text semantics'],
        categories: ['none'],
        use: 'Ruby annotation text',
        description: 'The <strong>HTML Ruby Text (<code>&lt;rt&gt;</code>) element</strong> specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The <code>&lt;rt&gt;</code> element must always be contained within a <code>&lt;ruby&gt;</code> element.',
        note: 'direct descendent of <code>rtc</code>',
        obsolete: false,
        defaults: {
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
            fontSize: 'unset',
        },
        trident: {
        },
    },
    {
        element: 'rtc',
        type: ['Inline text semantics'],
        categories: ['none'],
        use: 'Ruby semantic annotation text',
        description: 'The <strong>HTML Ruby Text Container (<code>&lt;rtc&gt;</code>) element</strong> embraces semantic annotations of characters presented in a ruby of <code>&lt;rb&gt;</code> elements used inside of <code>&lt;ruby&gt;</code> element. <code>&lt;rb&gt;</code> elements can have both pronunciation (<code>&lt;rt&gt;</code>) and semantic (<code>&lt;rtc&gt;</code>) annotations.',
        obsolete: false,
        defaults: {
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
            display: 'ruby-text',
            whiteSpace: 'nowrap',
            fontSize: '50%',
            lineHeight: '1',
            fontVariantEastAsian: 'ruby',
            textEmphasis: 'none',
            unicodeBidi: 'isolate',
        },
        trident: {
        },
    },
    {
        element: 'ruby',
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Ruby annotation(s)',
        description: 'The <strong>HTML <code>&lt;ruby&gt;</code> element</strong> represents a ruby annotation. Ruby annotations are for showing pronunciation of East Asian characters.',
        obsolete: false,
        defaults: {
            display: 'ruby',
        },
        blink: {
            textIndent: '0',
        },
        webkit: {
            textIndent: '0',
        },
        gecko: {
            display: 'ruby',
            unicodeBidi: 'isolate',
        },
        trident: {
            display: 'ruby',
        },
    },
    {
        element: 's',
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Inaccurate text',
        description: 'The <strong>HTML <code>&lt;s&gt;</code> element</strong> renders text with a strikethrough, or a line through it. Use the <code>&lt;s&gt;</code> element to represent things that are no longer relevant or no longer accurate. However, <code>&lt;s&gt;</code> is not appropriate when indicating document edits; for that, use the <code>&lt;del&gt;</code> and <code>&lt;ins&gt;</code> elements, as appropriate.',
        obsolete: false,
        defaults: {
            textDecoration: 'line-through',
        },
        blink: {
            textDecoration: 'line-through',
        },
        webkit: {
            textDecoration: 'line-through',
        },
        gecko: {
            textDecoration: 'line-through',
        },
        trident: {
        },
    },
    {
        element: 'samp',
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Computer output',
        description: 'The <strong>HTML Sample Element</strong> (<strong><code>&lt;samp&gt;</code></strong>) is used to enclose inline text which represents sample (or quoted) output from a computer program.',
        obsolete: false,
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
        element: 'small',
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Side comment',
        description: 'The <strong>HTML <code>&lt;small&gt;</code></strong> <strong>element </strong>represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font-size small, such as from <code>small</code> to <code>x-small</code>.',
        obsolete: false,
        defaults: {
            fontSize: 'smaller',
        },
        blink: {
            fontSize: 'smaller',
        },
        webkit: {
            fontSize: 'smaller',
        },
        gecko: {
            fontSize: 'smaller',
        },
        trident: {
            fontSize: '0.83em',
        },
    },
    {
        element: 'span',
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Generic phrasing container',
        description: 'The <strong>HTML <code>&lt;span&gt;</code> element</strong> is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the <code>class</code> or <code>id</code> attributes), or because they share attribute values, such as <code>lang</code>.',
        obsolete: false,
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
        element: 'strong',
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Importance',
        description: 'The HTML <strong>Strong Importance Element</strong> (<strong><code>&lt;strong&gt;</code></strong>) indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type.',
        obsolete: false,
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
        element: 'sub',
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Subscript',
        description: 'The HTML <strong>Subscript element</strong> (<strong><code>&lt;sub&gt;</code></strong>) specifies inline text which should be displayed as subscript for solely typographical reasons.',
        obsolete: false,
        defaults: {
            verticalAlign: 'sub',
            fontSize: 'smaller',
            lineHeight: 'normal',
        },
        blink: {
            verticalAlign: 'sub',
            fontSize: 'smaller',
        },
        webkit: {
            verticalAlign: 'sub',
            fontSize: 'smaller',
        },
        gecko: {
            verticalAlign: 'sub',
            fontSize: 'smaller',
        },
        trident: {
            fontSize: '0.83em',
        },
    },
    {
        element: 'sup',
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Superscript',
        description: 'The <strong>HTML Superscript element</strong> (<strong><code>&lt;sup&gt;</code></strong>) specifies inline text which is to be displayed as superscript for solely typographical reasons.',
        obsolete: false,
        defaults: {
            verticalAlign: 'super',
            fontSize: 'smaller',
            lineHeight: 'normal',
        },
        blink: {
            verticalAlign: 'super',
            fontSize: 'smaller',
        },
        webkit: {
            verticalAlign: 'super',
            fontSize: 'smaller',
        },
        gecko: {
            verticalAlign: 'super',
            fontSize: 'smaller',
        },
        trident: {
            fontSize: '0.83em',
        },
    },
    {
        element: 'time',
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Machine-readable equivalent of date- or time-related data',
        description: 'The HTML <strong><code>&lt;time&gt;</code> element</strong> represents a specific period in time.',
        obsolete: false,
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
        element: 'u',
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Unarticulated annotation',
        description: 'The HTML <strong>Unarticulated Annotation Element</strong> (<strong><code>&lt;u&gt;</code></strong>) represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation.',
        obsolete: false,
        defaults: {
            textDecoration: 'underline',
        },
        blink: {
            textDecoration: 'underline',
        },
        webkit: {
            textDecoration: 'underline',
        },
        gecko: {
            textDecoration: 'underline',
        },
        trident: {
        },
    },
    {
        element: 'u',
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Unarticulated annotation',
        description: 'The HTML <strong>Unarticulated Annotation Element</strong> (<strong><code>&lt;u&gt;</code></strong>) represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation.',
        obsolete: false,
        defaults: {
            textDecoration: 'underline',
        },
        blink: {
            textDecoration: 'underline',
        },
        webkit: {
            textDecoration: 'underline',
        },
        gecko: {
            textDecoration: 'underline',
        },
        trident: {
        },
    },
    {
        element: 'var',
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Variable',
        description: 'The HTML <strong>Variable element</strong> (<strong><code>&lt;var&gt;</code></strong>) represents the name of a variable in a mathematical expression or a programming context.',
        obsolete: false,
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
        element: 'wbr',
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing'],
        use: 'Line breaking opportunity',
        description: 'The <strong>HTML <code>&lt;wbr&gt;</code> element</strong> represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location.',
        obsolete: false,
        defaults: {
            displayOutside: 'break-opportunity',
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
        element: 'nobr wbr',
        type: ['Inline text semantics'],
        categories: ['flow', 'phrasing'],
        use: 'Line breaking opportunity',
        description: 'The <strong>HTML <code>&lt;wbr&gt;</code> element</strong> represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location.',
        note: 'Descendent of <code>nobr</code>',
        obsolete: false,
        defaults: {
            whiteSpace: 'normal',
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
        element: 'area',
        type: ['Image and multimedia'],
        categories: ['flow', 'phrasing'],
        use: 'Hyperlink or dead area on an image map',
        description: 'The <strong>HTML <code>&lt;area&gt;</code> element</strong> defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <code>&lt;map&gt;</code> element.',
        obsolete: false,
        defaults: {
            display: 'none',
        },
        blink: {
            display: 'inline',
            cursor: 'pointer',
        },
        webkit: {
            display: 'none',
        },
        gecko: {
            display: 'none !important',
        },
        trident: {
        },
    },
    {
        element: 'audio',
        type: ['Image and multimedia'],
        categories: ['flow', 'phrasing', 'embedded', 'interactive', 'palpable'],
        use: 'Audio player',
        description: 'The <strong>HTML <code>&lt;audio&gt;</code> element</strong> is used to embed sound content in documents. It may contain one or more audio sources, represented using the <code>src</code> attribute or the <code>&lt;source&gt;</code> element:&nbsp;the browser will choose the most suitable one. It can also be the destination for streamed media, using a <code>MediaStream</code>.',
        obsolete: false,
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
        element: 'img',
        type: ['Image and multimedia'],
        categories: ['flow', 'phrasing', 'embedded', 'interactive', 'form-associated', 'palpable'],
        use: 'Image',
        description: 'The <strong>HTML <code>&lt;img&gt;</code> element</strong> embeds an image into the document.',
        obsolete: false,
        defaults: {
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
        element: 'map',
        type: ['Image and multimedia'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Image map',
        description: 'The <strong>HTML <code>&lt;map&gt;</code> element</strong> is used with <code>&lt;area&gt;</code> elements to define an image map (a clickable link area).',
        obsolete: false,
        defaults: {
        },
        blink: {
            display: 'inline',
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'track',
        type: ['Image and multimedia'],
        categories: [],
        use: 'Timed text track',
        description: 'The <strong>HTML <code>&lt;track&gt;</code> element</strong> is used as a child of the media elements <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code>. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format(<code>.vtt</code> files) — Web Video Text Tracks or&nbsp;Timed Text Markup Language (TTML).',
        obsolete: false,
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
        element: 'video',
        type: ['Image and multimedia'],
        categories: [],
        use: 'Video player',
        description: 'The&nbsp;<strong>HTML Video element</strong>&nbsp;(<strong><code>&lt;video&gt;</code></strong>) embeds a media player which supports video playback into the document.&nbsp;You can use&nbsp;<code>&lt;video&gt;</code>&nbsp;for audio content as well, but the <code>&lt;audio&gt;</code> element may provide a more appropriate user experience.',
        obsolete: false,
        defaults: {
            objectFit: 'contain',
        },
        blink: {
            objectFit: 'contain',
        },
        webkit: {
            objectFit: 'contain',
        },
        gecko: {
            objectFit: 'contain',
        },
        trident: {
        },
    },
    {
        element: 'embed',
        type: ['Embedded content'],
        categories: ['flow', 'phrasing', 'embedded', 'interactive', 'palpable'],
        use: 'Plugin',
        description: 'The <strong>HTML <code>&lt;embed&gt;</code> element</strong> embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in.',
        obsolete: false,
        defaults: {
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
        element: 'embed[hidden]',
        type: ['Embedded content'],
        categories: ['flow', 'phrasing', 'embedded', 'interactive', 'palpable'],
        use: 'Plugin',
        description: 'The <strong>HTML <code>&lt;embed&gt;</code> element</strong> embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in.',
        note: 'with attribute <code>hidden</code>',
        obsolete: false,
        defaults: {
            display: 'inline', 
            height: '0',
            width: '0',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
            display: 'none !important',
            visibility: 'hidden !important',
        },
        trident: {
        },
    },
    {
        element: 'iframe',
        type: ['Embedded content'],
        categories: ['flow', 'phrasing', 'embedded', 'interactive', 'palpable'],
        use: 'Nested browsing context',
        description: 'The <strong>HTML Inline Frame element (<code>&lt;iframe&gt;</code>)</strong> represents a nested browsing context, embedding another HTML page into the current one.',
        obsolete: false,
        defaults: {
            border: '2px inset',
        },
        blink: {
            border: '2px inset',
        },
        webkit: {
            border: '2px inset',
        },
        gecko: {
            border: '2px inset',
        },
        trident: {
            backgroundColor: '#ffffff',
            height: '150px',
            width: '300px',
            zoom: '1',
        },
    },
    {
        element: 'object',
        type: ['Embedded content'],
        categories: ['flow', 'phrasing', 'embedded', 'interactive', 'listed', 'submittable', 'form-associated', 'palpable'],
        use: 'Image, nested browsing context, or plugin',
        description: 'The <code><strong>&lt;noembed&gt;</strong></code> element is an obsolete, non-standard way to provide alternative, or "fallback", content for browsers that do not support the <code>&lt;embed&gt;</code> element or do not support the type of embedded content an author wishes to use.',
        obsolete: false,
        defaults: {
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
        element: 'param',
        type: ['Embedded content'],
        categories: [],
        use: 'Parameter for object',
        description: 'The <strong>HTML <code>&lt;param&gt;</code> element</strong> defines parameters for an <code>&lt;object&gt;</code> element.',
        obsolete: false,
        defaults: {
            display: 'none',
        },
        blink: {
            display: 'none',
        },
        webkit: {
            display: 'none',
        },
        gecko: {
            display: 'none',
        },
        trident: {
        },
    },
    {
        element: 'picture',
        type: ['Embedded content'],
        categories: ['flow', 'phrasing', 'embedded'],
        use: 'Image',
        description: 'The <strong>HTML <code>&lt;param&gt;</code> element</strong> defines parameters for an <code>&lt;object&gt;</code> element.',
        obsolete: false,
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
        element: 'source',
        type: ['Embedded content'],
        categories: [],
        use: 'Image source for img or media source for video or audio',
        description: 'The <strong>HTML <code>&lt;source&gt;</code> element</strong> specifies multiple media resources for the <code>&lt;picture&gt;</code>, the <code>&lt;audio&gt;</code> element, or the <code>&lt;video&gt;</code> element.',
        obsolete: false,
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
        element: 'canvas',
        type: ['Scripting'],
        categories: ['flow', 'phrasing', 'embedded', 'palpable'],
        use: 'Scriptable bitmap canvas',
        description: 'Use the <strong>HTML <code>&lt;canvas&gt;</code> element</strong> with either the canvas scripting API or the WebGL API to draw graphics and animations.',
        obsolete: false,
        defaults: {
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
            userSelect: 'none',
        },
        trident: {
        },
    },
    {
        element: 'noscript',
        type: ['Scripting'],
        categories: ['flow', 'phrasing', 'metadata'],
        use: 'Fallback content for script',
        description: 'The <strong>HTML <code>&lt;noscript&gt;</code> element</strong> defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.',
        obsolete: false,
        defaults: {
            display: 'none !important',
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
        element: 'script',
        type: ['Scripting'],
        categories: ['script-supporting', 'flow', 'phrasing', 'metadata'],
        use: 'Embedded script',
        description: 'The <strong>HTML <code>&lt;script&gt;</code> element</strong> is used to embed or reference executable code; this is typically used to embed or refer to JavaScript code.',
        obsolete: false,
        defaults: {
            display: 'none',
        },
        blink: {
            display: 'none',
        },
        webkit: {
            display: 'none',
        },
        gecko: {
            display: 'none',
        },
        trident: {
            display: 'none',
            zoom: '1',
        },
    },
    {
        element: 'del',
        type: ['Demarcating edits'],
        categories: ['flow', 'phrasing'],
        use: 'A removal from the document',
        description: 'The <strong>HTML <code>&lt;del&gt;</code> element</strong> represents a range of text that has been deleted from a document.',
        obsolete: false,
        defaults: {
            textDecoration: 'line-through',
        },
        blink: {
            textDecoration: 'line-through',
        },
        webkit: {
            textDecoration: 'line-through',
        },
        gecko: {
            textDecoration: 'line-through',
        },
        trident: {
            textDecoration: 'line-through',
        },
    },
    {
        element: 'ins',
        type: ['Demarcating edits'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'An addition to the document',
        description: 'The <strong>HTML <code>&lt;ins&gt;</code> element</strong> represents a range of text that has been added to a document.',
        obsolete: false,
        defaults: {
            textDecoration: 'underline',
        },
        blink: {
            textDecoration: 'underline',
        },
        webkit: {
            textDecoration: 'underline',
        },
        gecko: {
            textDecoration: 'underline',
        },
        trident: {
            textDecoration: 'underline',
        },
    },
    {
        element: 'caption',
        type: ['Table content'],
        categories: [],
        use: 'Table caption',
        description: 'The <strong>HTML Table Caption element</strong> (<strong><code>&lt;caption&gt;</code></strong>) specifies the caption (or title) of a table, and if used is <em>always</em> the first child of a <code>&lt;table&gt;</code>.',
        obsolete: false,
        defaults: {
            display: 'table-caption',
            textAlign: 'center',
        },
        blink: {
            display: 'table-caption',
            textAlign: 'center',
        },
        webkit: {
            display: 'table-caption',
            textAlign: 'center',
        },
        gecko: {
            display: 'table-caption',
            textAlign: 'center',
        },
        trident: {
            display: 'table-caption',
            textAlign: 'center',
            zoom: '1',
        },
    },
    {
        element: 'col',
        type: ['Table content'],
        categories: [],
        use: 'Table column',
        description: 'The <strong>HTML <code>&lt;col&gt;</code> element</strong> defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <code>&lt;colgroup&gt;</code> element.',
        obsolete: false,
        defaults: {
            display: 'table-column',
        },
        blink: {
            display: 'table-column',
        },
        webkit: {
            display: 'table-column',
        },
        gecko: {
            display: 'table-column',
        },
        trident: {
            display: 'table-column',
            boxSizing: 'border-box',
        },
    },
    {
        element: 'colgroup',
        type: ['Table content'],
        categories: [],
        use: 'Group of columns in a table',
        description: 'The <strong>HTML <code>&lt;colgroup&gt;</code> element</strong> defines a group of columns within a table.',
        obsolete: false,
        defaults: {
            display: 'table-column-group',
        },
        blink: {
            display: 'table-column-group',
        },
        webkit: {
            display: 'table-column-group',
        },
        gecko: {
            display: 'table-column-group',
        },
        trident: {
            display: 'table-column-group',
            boxSizing: 'border-box',
        },
    },
    {
        element: 'table',
        type: ['Table content'],
        categories: ['flow', 'palpable'],
        use: 'Table',
        description: 'The <strong>HTML <code>&lt;table&gt;</code> element</strong> represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.',
        obsolete: false,
        defaults: {
            display: 'table',
            boxSizing: 'border-box',
            borderSpacing: '2px',
            borderCollapse: 'separate',
            textIndent: 'initial',
        },
        blink: {
            display: 'table',
            borderSpacing: '2px',
            borderCollapse: 'separate',
            borderColor: 'gray',
        },
        webkit: {
            display: 'table',
            borderSpacing: '2px',
            borderCollapse: 'separate',
            borderColor: 'gray',
        },
        gecko: {
            display: 'table',
            borderSpacing: '2px',
            borderCollapse: 'separate',
            boxSizing: 'border-box',
            textIndent: '0',
        },
        trident: {
            borderColor: '#f0f0f0',
            borderSpacing: '2px 2px',
            boxSizing: 'border-box',
            display: 'table',
            zoom: '1',
        },
    },
    {
        element: 'tbody',
        type: ['Table content'],
        categories: [],
        use: 'Group of rows in a table',
        description: 'The <strong>HTML Table Body element</strong> (<strong><code>&lt;tbody&gt;</code></strong>) encapsulates a set of table rows (<code>&lt;tr&gt;</code> elements), indicating that they comprise the body of the table (<code>&lt;table&gt;</code>).',
        obsolete: false,
        defaults: {
            display: 'table-row-group',
            verticalAlign: 'middle',
            borderColor: 'inherit',
        },
        blink: {
            display: 'table-row-group',
            verticalAlign: 'middle',
            borderColor: 'inherit',
        },
        webkit: {
            display: 'table-row-group',
            verticalAlign: 'middle',
            borderColor: 'inherit',
        },
        gecko: {
            display: 'table-row-group',
            verticalAlign: 'middle',
        },
        trident: {
            boxSizing: 'border-box',
            display: 'table-row-group',
            verticalAlign: 'middle',
        },
    },
    {
        element: 'td',
        type: ['Table content'],
        categories: ['sectioning root'],
        use: 'Table cell',
        description: 'The <strong>HTML <code>&lt;td&gt;</code> element</strong> defines a cell of a table that contains data. It participates in the <em>table model</em>.',
        obsolete: false,
        defaults: {
            display: 'table-cell',
            padding: '1px',
            verticalAlign: 'inherit',
        },
        blink: {
            display: 'table-cell',
            verticalAlign: 'inherit',
        },
        webkit: {
            display: 'table-cell',
            verticalAlign: 'inherit',
        },
        gecko: {
            display: 'table-cell',
            padding: '1px',
            verticalAlign: 'inherit',
            textAlign: 'unset',
        },
        trident: {
            display: 'table-cell',
            padding: '1px',
            verticalAlign: 'middle',
            zoom: '1',
        },
    },
    {
        element: 'tfoot',
        type: ['Table content'],
        categories: [],
        use: 'Group of footer rows in a table',
        description: 'The <strong>HTML <code>&lt;tfoot&gt;</code> element</strong> defines a set of rows summarizing the columns of the table.',
        obsolete: false,
        defaults: {
            display: 'table-footer-group',
            borderColor: 'inherit',
        },
        blink: {
            display: 'table-footer-group',
            verticalAlign: 'middle',
            borderColor: 'inherit',
        },
        webkit: {
            display: 'table-footer-group',
            verticalAlign: 'middle',
            borderColor: 'inherit',
        },
        gecko: {
            display: 'table-footer-group',
            verticalAlign: 'middle',
        },
        trident: {
            display: 'table-footer-group',
            boxSizing: 'border-box',
            verticalAlign: 'middle',
        },
    },
    {
        element: 'th',
        type: ['Table content'],
        categories: ['interactive'],
        use: 'Table header cell',
        description: 'The <strong>HTML <code>&lt;th&gt;</code> element</strong> defines a cell as header of a group of table cells. The exact nature of this group is defined by the <code>scope</code> and <code>headers</code> attributes.',
        obsolete: false,
        defaults: {
            display: 'table-cell',
            padding: '1px',
            verticalAlign: 'inherit',
            fontWeight: 'bold',
        },
        blink: {
            display: 'table-cell',
            verticalAlign: 'inherit',
            fontWeight: 'bold',
        },
        webkit: {
            display: 'table-cell',
            verticalAlign: 'inherit',
            fontWeight: 'bold',
        },
        gecko: {
            display: 'table-cell',
            padding: '1px',
            verticalAlign: 'inherit',
            fontWeight: 'bold',
        },
        trident: {
            display: 'table-cell',
            padding: '1px',
            verticalAlign: 'middle',
            textAlign: 'center',
            zoom: '1',
            fontWeight: 'bold',
        },
    },
    {
        element: 'thead',
        type: ['Table content'],
        categories: [],
        use: 'Group of heading rows in a table',
        description: 'The <strong>HTML <code>&lt;thead&gt;</code> element</strong> defines a set of rows defining the head of the columns of the table.',
        obsolete: false,
        defaults: {
            display: 'table-header-group',
            verticalAlign: 'middle',
            borderColor: 'inherit',
        },
        blink: {
            display: 'table-header-group',
            verticalAlign: 'middle',
            borderColor: 'inherit',
        },
        webkit: {
            display: 'table-header-group',
            verticalAlign: 'middle',
            borderColor: 'inherit',
        },
        gecko: {
            display: 'table-header-group',
            verticalAlign: 'middle',
        },
        trident: {
            display: 'table-header-group',
            boxSizing: 'border-box',
            verticalAlign: 'middle',
        },
    },
    {
        element: 'tr',
        type: ['Table content'],
        categories: [],
        use: 'Table row',
        description: 'The <strong>HTML <code>&lt;tr&gt;</code> element</strong> defines a row of cells in a table. The row\'s cells can then be established using a mix of <code>&lt;td&gt;</code> (data cell) and <code>&lt;th&gt;</code> (header cell) elements.',
        obsolete: false,
        defaults: {
            display: 'table-row',
            borderColor: 'inherit',
            verticalAlign: 'inherit',
        },
        blink: {
            display: 'table-row',
            borderColor: 'inherit',
            verticalAlign: 'inherit',
        },
        webkit: {
            display: 'table-row',
            borderColor: 'inherit',
            verticalAlign: 'inherit',
        },
        gecko: {
            display: 'table-row',
            verticalAlign: 'inherit',
        },
        trident: {
            display: 'table-row',
            boxSizing: 'border-box',
            verticalAlign: 'middle',
            zoom: '1',
        },
    },
    {
        element: 'button',
        type: ['Forms'],
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'form-associated', 'palpable'],
        use: 'Button control',
        description: 'The <strong>HTML <code>&lt;button&gt;</code> element</strong> represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.',
        obsolete: false,
        defaults: {
            letterSpacing: 'initial',
            wordSpacing: 'initial',
            lineHeight: 'initial',
            textTransform: 'initial',
            textIndent: 'initial',
            textShadow: 'initial',
            textAlign: 'center',
            display: 'inline-block',
            boxSizing: 'border-box',
        },
        blink: {
            alignItems: 'flex-start',
            textAlign: 'center',
            cursor: 'default',
            boxSizing: 'border-box',
            padding: '2px 6px 3px 6px',
            color: 'initial',
            letterSpacing: 'normal',
            wordSpacing: 'normal',
            lineHeight: 'normal',
            textTransform: 'none',
            textIndent: '0',
            textShadow: 'none',
            display: 'inline-block',
            textAlign: 'start',
        },
        webkit: {
            alignItems: 'flex-start',
            textAlign: 'center',
            cursor: 'default',
            boxSizing: 'border-box',
            color: 'initial',
            letterSpacing: 'normal',
            wordSpacing: 'normal',
            lineHeight: 'normal',
            textTransform: 'none',
            textIndent: '0',
            textShadow: 'none',
            display: 'inline-block',
            textAlign: 'start',
        },
        gecko: {
        },
        trident: {
            backgroundColor: '#f0f0f0',
            borderWidth: '3px',
            boxSizing: 'border-box',
            fontFamily: 'sans-serif',
            fontSize: '10pt',
            overflow: 'hidden',
            padding: '1px 8px',
            textAlign: 'center',
            zoom: '1',
        },
    },
    {
        element: 'button:active',
        type: ['Forms'],
        state: ':active',
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'form-associated', 'palpable'],
        use: 'Button control',
        description: 'The <strong>HTML <code>&lt;button&gt;</code> element</strong> represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.',
        note: 'during <code>:active</code> state',
        obsolete: false,
        defaults: {
        },
        blink: {
            borderStyle: 'inset',
        },
        webkit: {
            borderStyle: 'inset',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'button:active:disabled ',
        type: ['Forms'],
        state: ':active:disabled',
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'form-associated', 'palpable'],
        use: 'Button control',
        description: 'The <strong>HTML <code>&lt;button&gt;</code> element</strong> represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.',
        note: 'during <code>:active:disabled</code> state',
        obsolete: false,
        defaults: {
        },
        blink: {
            borderStyle: 'outset',
        },
        webkit: {
            borderStyle: 'outset',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'datalist',
        type: ['Forms'],
        categories: ['flow', 'phrasing'],
        use: 'Container for options for combo box control',
        description: 'The <strong>HTML <code>&lt;datalist&gt;</code> element</strong> contains a set of <code>&lt;option&gt;</code> elements that represent the values available for other controls.',
        obsolete: false,
        defaults: {
            display: 'none',
        },
        blink: {
            display: 'none',
        },
        webkit: {
        },
        gecko: {
            display: 'none',
        },
        trident: {
        },
    },
    {
        element: 'fieldset',
        type: ['Forms'],
        categories: ['flow', 'phrasing'],
        use: 'Group of form controls',
        description: 'The <strong>HTML <code>&lt;fieldset&gt;</code> element</strong> is used to group several controls as well as labels (<code>&lt;label&gt;</code>) within a web form.',
        obsolete: false,
        defaults: {
            display: 'block',
            marginInlineStart: '2px',
            marginInlineEnd: '2px',
            border: 'groove 2px ThreeDFace',
            paddingBlockStart: '0.35em',
            paddingInlineEnd: '0.75em',
            paddingBlockEnd: '0.625em',
            paddingInlineStart: '0.75em',
            minInlineSize: 'min-content',
        },
        blink: {
            display: 'block',
            marginInlineStart: '2px',
            marginInlineEnd: '2px',
            border: 'groove 2px ThreeDFace',
            paddingBlockStart: '0.35em',
            paddingInlineEnd: '0.75em',
            paddingBlockEnd: '0.625em',
            paddingInlineStart: '0.75em',
            minInlineSize: 'min-content',
        },
        webkit: {
            display: 'block',
            marginInlineStart: '2px',
            marginInlineEnd: '2px',
            border: 'groove 2px ThreeDFace',
            paddingBlockStart: '0.35em',
            paddingInlineEnd: '0.75em',
            paddingBlockEnd: '0.625em',
            paddingInlineStart: '0.75em',
            minInlineSize: 'min-content',
        },
        gecko: {
        },
        trident: {
            borderStyle: 'groove',
            borderWidth: '2px',
            display: 'block',
            margin: '0 2px',
            padding: '0 2px 3px',
            zoom: '1',
        },
    },
    {
        element: 'form',
        type: ['Forms'],
        categories: ['flow', 'palpable'],
        use: 'User-submittable form',
        description: 'The <strong>HTML <code>&lt;form&gt;</code> element</strong> represents a document section that contains interactive controls for submitting information to a web server.',
        obsolete: false,
        defaults: {
            display: 'block',
        },
        blink: {
            display: 'block',
        },
        webkit: {
            display: 'block',
        },
        gecko: {
            display: 'block',
        },
        trident: {
            display: 'block',
        },
    },
    {
        element: 'input',
        type: ['Forms'],
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'Form control',
        description: 'The <strong>HTML <code>&lt;input&gt;</code> element</strong> is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.',
        obsolete: false,
        defaults: {
            letterSpacing: 'initial',
            wordSpacing: 'initial',
            lineHeight: 'initial',
            textTransform: 'initial',
            textIndent: 'initial',
            textShadow: 'initial',
            textAlign: 'initial',
        },
        blink: {
            color: 'initial',
            letterSpacing: 'normal',
            wordSpacing: 'normal',
            lineHeight: 'normal',
            textTransform: 'none',
            textIndent: '0',
            textShadow: 'none',
            display: 'inline-block',
            textAlign: 'start',
            padding: '1px',
            backgroundColor: 'white',
            border: '2px inset',
            cursor: 'auto',
        },
        webkit: {
            color: 'initial',
            letterSpacing: 'normal',
            wordSpacing: 'normal',
            lineHeight: 'normal',
            textTransform: 'none',
            textIndent: '0',
            textShadow: 'none',
            display: 'inline-block',
            textAlign: 'start',
            cursor: 'auto',
        },
        gecko: {
        },
        trident: {
            backgroundColor: '#ffffff',
            borderWidth: '2px',
            fontFamily: 'sans-serif',
            fontSize: '10pt',
            overflow: 'hidden',
            padding: '1px',
            zoom: '1',
        },
    },
    {
        element: 'input:focus',
        type: ['Forms'],
        state: ':focus',
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'Form control',
        description: 'The <strong>HTML <code>&lt;input&gt;</code> element</strong> is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.',
        note: 'during <code>:focus</code> state',
        obsolete: false,
        defaults: {
        },
        blink: {
            outline: 'auto 5px -webkit-focus-ring-color',
            outlineOffset: '-2px',
        },
        webkit: {
            outline: 'auto 5px -webkit-focus-ring-color',
            outlineOffset: '-2px',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'input[type=hidden]',
        type: ['Forms'],
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'Form control',
        description: 'The <strong>HTML <code>&lt;input&gt;</code> element</strong> is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.',
        note: 'with attribute <code>type="hidden"</code>',
        obsolete: false,
        defaults: {
            display: 'none !important',
        },
        blink: {
            display: 'none',
            padding: 'initial',
            backgroundColor: 'initial',
            border: 'initial',
        },
        webkit: {
            display: 'none',
            padding: 'initial',
            backgroundColor: 'initial',
            border: 'initial',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'input[type=hidden]:focus',
        type: ['Forms'],
        state: ':focus',
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'Form control',
        description: 'The <strong>HTML <code>&lt;input&gt;</code> element</strong> is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.',
        note: 'with attribute <code>type="hidden"</code> during <code>:focus</code> state',
        obsolete: false,
        defaults: {
        },
        blink: {
            outlineOffset: '0',
        },
        webkit: {
            outlineOffset: '0',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'input[type=search]',
        type: ['Forms'],
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'Form control',
        description: 'The <strong>HTML <code>&lt;input&gt;</code> element</strong> is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.',
        note: 'with attribute <code>type="search"</code>',
        obsolete: false,
        defaults: {
            boxSizing: 'border-box',
        },
        blink: {
            direction: 'ltr',
            boxSizing: 'border-box',
        },
        webkit: {
            boxSizing: 'border-box',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'input[type=search]:focus',
        type: ['Forms'],
        state: ':focus',
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'Form control',
        description: 'The <strong>HTML <code>&lt;input&gt;</code> element</strong> is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.',
        note: 'with attribute <code>type="search"</code> during <code>:focus</code> state',
        obsolete: false,
        defaults: {
        },
        blink: {
            outlineOffset: '0',
        },
        webkit: {
            outlineOffset: '0',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'input[type=reset]',
        type: ['Forms'],
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'Form control',
        description: 'The <strong>HTML <code>&lt;input&gt;</code> element</strong> is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.',
        note: 'with attribute <code>type="reset"</code>',
        obsolete: false,
        defaults: {
            textAlign: 'center',
            display: 'inline-block',
            boxSizing: 'border-box',
        },
        blink: {
            whiteSpace: 'pre',
            alignItems: 'flex-start',
            textAlign: 'center',
            cursor: 'default',
            color: 'ButtonText',
            padding: '2px 6px 3px 6px',
            border: '2px outset ButtonFace',
            backgroundColor: 'ButtonFace',
            boxSizing: 'border-box',
        },
        webkit: {
            whiteSpace: 'pre',
            alignItems: 'flex-start',
            textAlign: 'center',
            cursor: 'default',
            color: 'ButtonText',
            boxSizing: 'border-box',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'input[type=reset]:focus',
        type: ['Forms'],
        state: ':focus',
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'Form control',
        description: 'The <strong>HTML <code>&lt;input&gt;</code> element</strong> is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.',
        note: 'with attribute <code>type="reset"</code> during <code>:focus</code> state',
        obsolete: false,
        defaults: {
        },
        blink: {
            outlineOffset: '0',
        },
        webkit: {
            outlineOffset: '0',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'input[type=button]',
        type: ['Forms'],
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'Form control',
        description: 'The <strong>HTML <code>&lt;input&gt;</code> element</strong> is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.',
        note: 'with attribute <code>type="button"</code>',
        obsolete: false,
        defaults: {
            textAlign: 'center',
            display: 'inline-block',
            boxSizing: 'border-box',
        },
        blink: {
            whiteSpace: 'pre',
            alignItems: 'flex-start',
            textAlign: 'center',
            cursor: 'default',
            color: 'ButtonText',
            padding: '2px 6px 3px 6px',
            border: '2px outset ButtonFace',
            backgroundColor: 'ButtonFace',
            boxSizing: 'border-box',
        },
        webkit: {
            whiteSpace: 'pre',
            alignItems: 'flex-start',
            textAlign: 'center',
            cursor: 'default',
            color: 'ButtonText',
            boxSizing: 'border-box',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'input[type=button]:focus',
        type: ['Forms'],
        state: ':focus',
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'Form control',
        description: 'The <strong>HTML <code>&lt;input&gt;</code> element</strong> is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.',
        note: 'with attribute <code>type="button"</code> during <code>:focus</code> state',
        obsolete: false,
        defaults: {
        },
        blink: {
            outlineOffset: '0',
        },
        webkit: {
            outlineOffset: '0',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'input[type=submit]',
        type: ['Forms'],
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'Form control',
        description: 'The <strong>HTML <code>&lt;input&gt;</code> element</strong> is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.',
        note: 'with attribute <code>type="submit"</code>',
        obsolete: false,
        defaults: {
            textAlign: 'center',
            display: 'inline-block',
            boxSizing: 'border-box',
        },
        blink: {
            whiteSpace: 'pre',
            alignItems: 'flex-start',
            textAlign: 'center',
            cursor: 'default',
            color: 'ButtonText',
            padding: '2px 6px 3px 6px',
            border: '2px outset ButtonFace',
            backgroundColor: 'ButtonFace',
            boxSizing: 'border-box',
        },
        webkit: {
            whiteSpace: 'pre',
            alignItems: 'flex-start',
            textAlign: 'center',
            cursor: 'default',
            color: 'ButtonText',
            boxSizing: 'border-box',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'input[type=submit]:focus',
        type: ['Forms'],
        state: ':focus',
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'Form control',
        description: 'The <strong>HTML <code>&lt;input&gt;</code> element</strong> is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.',
        note: 'with attribute <code>type="submit"</code> during <code>:focus</code> state',
        obsolete: false,
        defaults: {
        },
        blink: {
            outlineOffset: '0',
        },
        webkit: {
            outlineOffset: '0',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'input[type=color]',
        type: ['Forms'],
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'Form control',
        description: 'The <strong>HTML <code>&lt;input&gt;</code> element</strong> is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.',
        note: 'with attribute <code>type="color"</code>',
        obsolete: false,
        defaults: {
            display: 'inline-block',
            boxSizing: 'border-box',
        },
        blink: {
            width: '44px',
            height: '23px',
            backgroundColor: 'ButtonFace',
            border: '1px #a9a9a9 solid',
            padding: '1px 2px',
        },
        webkit: {
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'input[type=radio]',
        type: ['Forms'],
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'Form control',
        description: 'The <strong>HTML <code>&lt;input&gt;</code> element</strong> is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.',
        note: 'with attribute <code>type="radio"</code>',
        obsolete: false,
        defaults: {
            boxSizing: 'border-box',
        },
        blink: {
            margin: '3px 0.5ex',
            padding: 'initial',
            backgroundColor: 'initial',
            border: 'initial',
            boxSizing: 'border-box',
        },
        webkit: {
            margin: '3px 0.5ex',
            padding: 'initial',
            backgroundColor: 'initial',
            border: 'initial',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'input[type=radio]:focus',
        type: ['Forms'],
        state: ':focus',
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'Form control',
        description: 'The <strong>HTML <code>&lt;input&gt;</code> element</strong> is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.',
        note: 'with attribute <code>type="radio"</code> during <code>:focus</code> state',
        obsolete: false,
        defaults: {
        },
        blink: {
            outlineOffset: '0',
        },
        webkit: {
            outlineOffset: '0',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'input[type=checkbox]',
        type: ['Forms'],
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'Form control',
        description: 'The <strong>HTML <code>&lt;input&gt;</code> element</strong> is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.',
        note: 'with attribute <code>type="checkbox"</code>',
        obsolete: false,
        defaults: {
            boxSizing: 'border-box',
        },
        blink: {
            margin: '3px 0.5ex',
            padding: 'initial',
            backgroundColor: 'initial',
            border: 'initial',
            boxSizing: 'border-box',
        },
        webkit: {
            margin: '3px 0.5ex',
            padding: 'initial',
            backgroundColor: 'initial',
            border: 'initial',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'input[type=checkbox]:focus',
        type: ['Forms'],
        state: ':focus',
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'Form control',
        description: 'The <strong>HTML <code>&lt;input&gt;</code> element</strong> is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.',
        note: 'with attribute <code>type="checkbox"</code> during <code>:focus</code> state',
        obsolete: false,
        defaults: {
        },
        blink: {
            outlineOffset: '0',
        },
        webkit: {
            outlineOffset: '0',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'input[type=image]',
        type: ['Forms'],
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'Form control',
        description: 'The <strong>HTML <code>&lt;input&gt;</code> element</strong> is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.',
        note: 'with attribute <code>type="image"</code>',
        obsolete: false,
        defaults: {
            boxSizing: 'border-box',
        },
        blink: {
            padding: 'initial',
            backgroundColor: 'initial',
            border: 'initial',
        },
        webkit: {
            padding: 'initial',
            backgroundColor: 'initial',
            border: 'initial',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'input[type=image]:focus',
        type: ['Forms'],
        state: ':focus',
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'Form control',
        description: 'The <strong>HTML <code>&lt;input&gt;</code> element</strong> is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.',
        note: 'with attribute <code>type="image"</code> during <code>:focus</code> state',
        obsolete: false,
        defaults: {
        },
        blink: {
            outlineOffset: '0',
        },
        webkit: {
            outlineOffset: '0',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'input[type=file]',
        type: ['Forms'],
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'Form control',
        description: 'The <strong>HTML <code>&lt;input&gt;</code> element</strong> is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.',
        note: 'with attribute <code>type="file"</code>',
        obsolete: false,
        defaults: {
            boxSizing: 'border-box',
        },
        blink: {
            alignItems: 'baseline',
            color: 'inherit',
            textAlign: 'start !important',
            padding: 'initial',
            backgroundColor: 'initial',
            border: 'initial',
        },
        webkit: {
            alignItems: 'baseline',
            color: 'inherit',
            textAlign: 'start !important',
            padding: 'initial',
            backgroundColor: 'initial',
            border: 'initial',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'input[type=file]:focus',
        type: ['Forms'],
        state: ':focus',
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'Form control',
        description: 'The <strong>HTML <code>&lt;input&gt;</code> element</strong> is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.',
        note: 'with attribute <code>type="file"</code> during <code>:focus</code> state',
        obsolete: false,
        defaults: {
        },
        blink: {
            outlineOffset: '0',
        },
        webkit: {
            outlineOffset: '0',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'input[type=range]',
        type: ['Forms'],
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'Form control',
        description: 'The <strong>HTML <code>&lt;input&gt;</code> element</strong> is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.',
        note: 'with attribute <code>type="range"</code>',
        obsolete: false,
        defaults: {
        },
        blink: {
            padding: 'initial',
            border: 'initial',
            margin: '2px',
            color: '#909090',
        },
        webkit: {
            padding: 'initial',
            border: 'initial',
            margin: '2px',
            color: '#909090',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'label',
        type: ['Forms'],
        categories: ['flow', 'phrasing', 'interactive', 'palpable'],
        use: 'Caption for a form control',
        description: 'The <strong>HTML <code>&lt;label&gt;</code> element</strong> represents a caption for an item in a user interface.',
        obsolete: false,
        defaults: {
        },
        blink: {
            cursor: 'default',
        },
        webkit: {
            cursor: 'default',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'legend',
        type: ['Forms'],
        categories: [],
        use: 'Caption for fieldset',
        description: 'The <strong>HTML <code>&lt;legend&gt;</code> element</strong> represents a caption for the content of its parent <code>&lt;fieldset&gt;</code>.',
        obsolete: false,
        defaults: {
            display: 'block',
            paddingInlineStart: '2px',
            paddingInlineEnd: '2px',
        },
        blink: {
            display: 'block',
            border: 'none',
        },
        webkit: {
            display: 'block',
            border: 'none',
        },
        gecko: {
        },
        trident: {
            padding: '0 2px',
            zoom: '1',
        },
    },
    {
        element: 'meter',
        type: ['Forms'],
        categories: ['flow', 'phrasing', 'labelable', 'palpable'],
        use: 'Gauge',
        description: 'The <strong>HTML <code>&lt;meter&gt;</code> element</strong> represents either a scalar value within a known range or a fractional value.',
        obsolete: false,
        defaults: {
        },
        blink: {
            boxSizing: 'border-box',
            display: 'inline-block',
            height: '1em',
            width: '5em',
            verticalAlign: '-0.2em,',
        },
        webkit: {
            boxSizing: 'border-box',
            display: 'inline-block',
            height: '1em',
            width: '5em',
            verticalAlign: '-0.2em,',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'optgroup',
        type: ['Forms'],
        categories: [],
        use: 'Group of options in a list box',
        description: 'The <strong>HTML <code>&lt;optgroup&gt;</code> element</strong> creates a grouping of options within a <code>&lt;select&gt;</code> element.',
        obsolete: false,
        defaults: {
        },
        blink: {
            fontWeight: 'bolder',
            display: 'block',
        },
        webkit: {
            fontWeight: 'bolder',
        },
        gecko: {
        },
        trident: {
            fontFamily: 'sans-serif',
            fontSize: '10pt',
            fontStyle: 'italic',
            fontWeight: 'bold',
        },
    },
    {
        element: 'option',
        type: ['Forms'],
        categories: [],
        use: 'Option in a list box or combo box control',
        description: 'The <strong>HTML <code>&lt;option&gt;</code> element</strong> is used to define an item contained in a <code>&lt;select&gt;</code>, an <code>&lt;optgroup&gt;</code>, or a <code>&lt;datalist&gt;</code>&nbsp;element. As such,&nbsp;<code>&lt;option&gt;</code>&nbsp;can represent menu items in popups and other lists of items in an HTML document.',
        obsolete: false,
        defaults: {
        },
        blink: {
            fontWeight: 'normal',
            display: 'block',
            padding: '0 2px 1px 2px',
            whiteSpace: 'pre',
            minHeight: '1.2em',
        },
        webkit: {
            fontWeight: 'normal',
        },
        gecko: {
        },
        trident: {
            fontFamily: 'sans-serif',
            fontSize: '10pt',
            fontStyle: 'italic',
            fontWeight: 'bold',
        },
    },
    {
        element: 'output',
        type: ['Forms'],
        categories: ['flow', 'phrasing', 'listed', 'labelable', 'resettable', 'form-associated', 'palpable'],
        use: 'Calculated output value',
        description: 'The <strong>HTML Output element</strong> (<strong><code>&lt;output&gt;</code></strong>) is a container element into which a site or app can inject the results of a calculation or the outcome of a user action.',
        obsolete: false,
        defaults: {
        },
        blink: {
            display: 'inline',
        },
        webkit: {
            display: 'inline',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'progress',
        type: ['Forms'],
        categories: ['flow', 'phrasing', 'labelable', 'palpable'],
        use: 'Progress bar',
        description: 'The <strong>HTML <code>&lt;progress&gt;</code> element</strong> displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
        obsolete: false,
        defaults: {
        },
        blink: {
            boxSizing: 'border-box',
            display: 'inline-block',
            height: '1em',
            width: '10em',
            verticalAlign: '-0.2em',
        },
        webkit: {
            boxSizing: 'border-box',
            display: 'inline-block',
            height: '1em',
            width: '10em',
            verticalAlign: '-0.2em',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'select',
        type: ['Forms'],
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'List box control',
        description: 'The <strong>HTML <code>&lt;select&gt;</code> element</strong> represents a control that provides a menu of options',
        obsolete: false,
        defaults: {
            letterSpacing: 'initial',
            wordSpacing: 'initial',
            lineHeight: 'initial',
            textTransform: 'initial',
            textIndent: 'initial',
            textShadow: 'initial',
            textAlign: 'initial',
            boxSizing: 'border-box',
        },
        blink: {
            color: 'initial',
            letterSpacing: 'normal',
            wordSpacing: 'normal',
            lineHeight: 'normal',
            textTransform: 'none',
            textIndent: '0',
            textShadow: 'none',
            display: 'inline-block',
            textAlign: 'start',
            borderRadius: '5px',
            boxSizing: 'border-box',
            alignItems: 'center',
            whiteSpace: 'pre',
            color: 'black',
            backgroundColor: 'white',
            cursor: 'default',
        },
        webkit: {
            color: 'initial',
            letterSpacing: 'normal',
            wordSpacing: 'normal',
            lineHeight: 'normal',
            textTransform: 'none',
            textIndent: '0',
            textShadow: 'none',
            display: 'inline-block',
            textAlign: 'start',
            borderRadius: '5px',
            boxSizing: 'border-box',
            alignItems: 'center',
            whiteSpace: 'pre',
            cursor: 'default',
        },
        gecko: {
        },
        trident: {
            backgroundColor: '#ffffff',
            borderWidth: '1px',
            boxSizing: 'border-box',
            fontFamily: 'sans-serif',
            fontSize: '10pt',
            overflow: 'hidden',
            zoom: '1',
        },
    },
    {
        element: 'select:focus',
        type: ['Forms'],
        state: ':focus',
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'List box control',
        description: 'The <strong>HTML <code>&lt;select&gt;</code> element</strong> represents a control that provides a menu of options',
        note: 'during <code>:focus</code> state',
        obsolete: false,
        defaults: {
        },
        blink: {
            outline: 'auto 5px -webkit-focus-ring-color',
            outlineOffset: '-2px',
        },
        webkit: {
            outline: 'auto 5px -webkit-focus-ring-color',
            outlineOffset: '-2px',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'textarea',
        type: ['Forms'],
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'Multiline text controls',
        description: 'The <strong>HTML <code>&lt;textarea&gt;</code> element</strong> represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.',
        obsolete: false,
        defaults: {
            letterSpacing: 'initial',
            wordSpacing: 'initial',
            lineHeight: 'initial',
            textTransform: 'initial',
            textIndent: 'initial',
            textShadow: 'initial',
            textAlign: 'initial',
            boxSizing: 'border-box',
            whiteSpace: 'pre-wrap',
        },
        blink: {
            color: 'initial',
            letterSpacing: 'normal',
            wordSpacing: 'normal',
            lineHeight: 'normal',
            textTransform: 'none',
            textIndent: '0',
            textShadow: 'none',
            display: 'inline-block',
            textAlign: 'start',
            backgroundColor: 'white',
            border: '1px solid',
            cursor: 'auto',
            flexDirection: 'column',
            resize: 'auto',
            padding: '2px',
            wordWrap: 'break-word',
            whiteSpace: 'pre-wrap',
        },
        webkit: {
            color: 'initial',
            letterSpacing: 'normal',
            wordSpacing: 'normal',
            lineHeight: 'normal',
            textTransform: 'none',
            textIndent: '0',
            textShadow: 'none',
            display: 'inline-block',
            textAlign: 'start',
            cursor: 'auto',
            borderRadius: '5px',
            flexDirection: 'column',
            resize: 'auto',
            wordWrap: 'break-word',
            whiteSpace: 'pre-wrap',
        },
        gecko: {
        },
        trident: {
            backgroundColor: '#ffffff',
            borderWidth: '1px',
            fontSize: '10pt',
            borderWidth: '1px',
            fontFamily: 'monospace',
            fontSize: '10pt',
            overflowX: 'hidden',
            overflowY: 'scroll',
            padding: '2px',
            whiteSpace: 'pre-wrap',
            zoom: '1',
        },
    },
    {
        element: 'textarea:focus',
        type: ['Forms'],
        state: ':focus',
        categories: ['flow', 'phrasing', 'interactive', 'listed', 'labelable', 'submittable', 'resettable', 'form-associated', 'palpable'],
        use: 'Multiline text controls',
        description: 'The <strong>HTML <code>&lt;textarea&gt;</code> element</strong> represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.',
        note: 'during <code>:focus</code> state',
        obsolete: false,
        defaults: {
        },
        blink: {
            outline: 'auto 5px -webkit-focus-ring-color',
            outlineOffset: '-2px',
        },
        webkit: {
            outline: 'auto 5px -webkit-focus-ring-color',
            outlineOffset: '-2px',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'details',
        type: ['Interactive elements'],
        categories: ['flow', 'sectioning root', 'interactive', 'palpable'],
        use: 'Disclosure control for hiding details',
        description: 'The <strong>HTML Details Element (<code>&lt;details&gt;</code>)</strong> creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state.',
        obsolete: false,
        defaults: {
        },
        blink: {
            display: 'block',
        },
        webkit: {
            display: 'block',
        },
        gecko: {
            display: 'block',
        },
        trident: {
        },
    },
    {
        element: 'dialog',
        type: ['Interactive elements'],
        categories: ['flow', 'sectioning root'],
        use: 'Dialog box or window',
        description: 'The <strong>HTML <code>&lt;dialog&gt;</code> element</strong> represents a dialog box or other interactive component, such as an inspector or window.',
        obsolete: false,
        defaults: {
            display: 'block',
            position: 'absolute',
            offsetInlineStart: '0',
            offsetInlineEnd: '0',
            width: 'fit-content',
            height: 'fit-content',
            margin: 'auto',
            border: 'solid',
            padding: '1em',
            background: 'white',
            color: 'black',
        },
        blink: {
            position: 'absolute',
            left: 0,
            right: 0,
            width: '-webkit-fit-content',
            height: '-webkit-fit-content',
            margin: 'auto',
            border: 'solid',
            padding: '1em',
            background: 'white',
            color: 'black',
        },
        webkit: {
        },
        gecko: {
            position: 'absolute',
            insetInlineStart: '0',
            insetInlineEnd: '0',
            color: 'black',
            margin: 'auto',
            borderWidth: 'initial',
            borderStyle: 'solid',
            borderColor: 'initial',
            borderImage: 'initial',
            padding: '1em',
            background: 'white',
            width: '-moz-fit-content',
        },
        trident: {
        },
    },
    {
        element: 'menu',
        type: ['Interactive elements'],
        categories: ['flow', 'palpable'],
        use: 'Menu of commands',
        description: 'The <strong>HTML <code>&lt;menu&gt;</code> element</strong> represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.',
        obsolete: false,
        defaults: {
            display: 'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            paddingInlineStart: '40px',
            listStyletype: 'disc',
        },
        blink: {
            display: 'block',
            listStyletype: 'disc',
            marginInlineEnd: '1em',
            marginBlockStart: '0',
            marginBlockEnd: '0',
            paddingInlineStart: '40px',
        },
        webkit: {
            display: 'block',
            listStyletype: 'disc',
            marginInlineEnd: '1em',
            marginBlockStart: '0',
            marginBlockEnd: '0',
            paddingInlineStart: '40px',
        },
        gecko: {
            display: 'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            paddingInlineStart: '40px',
            listStyletype: 'disc',
        },
        trident: {
            display: 'block',
            listStyleImage: 'none',
            listStylePosition: 'outside',
            listStyletype: 'decimal',
            margin: '1em 0',
            padding: '0 0 0 30pt',
        },
    },
    {
        element: 'summary',
        type: ['Interactive elements'],
        categories: [],
        use: 'Caption for details',
        description: 'The <strong>HTML Disclosure Summary element</strong> (<strong><code>&lt;summary&gt;</code></strong>) element specifies a summary, caption, or legend for a <code>&lt;details&gt;</code> element\'s disclosure box.',
        obsolete: false,
        defaults: {
            display: 'list-item',
            counterIncrement: 'list-item 0',
            listStyle: 'disclosure-closed inside',
        },
        blink: {
            display: 'block',
        },
        webkit: {
            display: 'block',
        },
        gecko: {
            display: 'block',
        },
        trident: {
        },
    },
    {
        element: 'slot',
        type: ['Web Components'],
        categories: ['flow', 'phrasing'],
        use: 'Shadow tree slot',
        description: 'The <strong>HTML <code>&lt;slot&gt;</code> element</strong>—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.',
        obsolete: false,
        defaults: {
            display: 'contents',
        },
        blink: {
        },
        webkit: {
            display: 'contents',
        },
        gecko: {
            display: 'contents',
        },
        trident: {
        },
    },
    {
        element: 'template',
        type: ['Web Components'],
        categories: ['metadata', 'flow', 'phrasing', 'script-supporting'],
        use: 'Template',
        description: 'The <strong>HTML Content Template (<code>&lt;template&gt;</code>) element</strong> is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.',
        obsolete: false,
        defaults: {
            display: 'none',
        },
        blink: {
            display: 'none',
        },
        webkit: {
            display: 'none',
        },
        gecko: {
            display: 'none',
        },
        trident: {
        },
    },
    {
        element: 'acronym',
        type: ['Obsolete and deprecated elements'],
        categories: [],
        use: 'Acronym',
        description: 'The HTML Acronym Element (<code>&lt;acronym&gt;</code>) allows authors to clearly indicate a sequence of characters that compose an acronym or abbreviation for a word. This element has been removed in HTML5. Use&nbsp;<code>&lt;abbr&gt;</code> instead.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
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
        element: 'applet',
        type: ['Obsolete and deprecated elements'],
        categories: ['flow', 'phrasing', 'embedded', 'interactive', 'listed', 'submittable', 'form-associated', 'palpable'],
        use: 'Java applet embedding',
        description: 'The obsolete <strong>HTML Applet Element</strong> (<strong><code>&lt;applet&gt;</code></strong>) embeds a Java applet into the document; this element has been deprecated in favor of <code>&lt;object&gt;</code>.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
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
        element: 'basefont',
        type: ['Obsolete and deprecated elements'],
        categories: [],
        use: 'Font default',
        description: 'The obsolete <strong>HTML Base Font element</strong> (<strong><code>&lt;basefont&gt;</code></strong>) sets a default font face, size, and color for the other elements which are descended from its parent element.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
        defaults: {
            display: 'none',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
            display: 'none',
        },
        trident: {
        },
    },
    {
        element: 'bgsound',
        type: ['Obsolete and deprecated elements'],
        categories: [],
        use: 'Audio player',
        description: 'The Internet Explorer only <strong>HTML Background Sound element</strong> (<strong><code>&lt;bgsound&gt;</code></strong>) sets up a sound file to play in the background while the page is used; use <code>&lt;audio&gt;</code> instead.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
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
        element: 'big',
        type: ['Obsolete and deprecated elements'],
        categories: [],
        use: 'Increase font size',
        description: 'The obsolete <strong>HTML Big Element</strong> (<strong><code>&lt;big&gt;</code></strong>) renders the enclosed text at a font size one level larger than the surrounding text (<code>medium</code> becomes <code>large</code>, for example).',
        note: 'Obsolete/Deprecated',
        obsolete: true,
        defaults: {
            fontSize: 'larger',
        },
        blink: {
            fontSize: 'larger',
        },
        webkit: {
            fontSize: 'larger',
        },
        gecko: {
            fontSize: 'larger',
        },
        trident: {
        },
    },
    {
        element: 'blink',
        type: ['Obsolete and deprecated elements'],
        categories: [],
        use: 'Flash text',
        description: 'The <strong>HTML Blink Element</strong> (<code>&lt;blink&gt;</code>) is a non-standard element which causes the enclosed text to flash slowly.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
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
        element: 'center',
        type: ['Obsolete and deprecated elements','Embedded content'],
        categories: [],
        use: 'Center text',
        description: 'The obsolete <strong>HTML Center Element</strong> (<strong><code>&lt;center&gt;</code></strong>) is a block-level element that displays its block-level or inline contents centered horizontally within its containing element.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
        defaults: {
            display: 'block',
        },
        blink: {
            display: 'block',
            textAlign: 'center',
        },
        webkit: {
            display: 'block',
            textAlign: 'center',
        },
        gecko: {
            display: 'block',
            textAlign: 'center',
        },
        trident: {
        },
    },
    {
        element: 'command',
        type: ['Obsolete and deprecated elements'],
        categories: [],
        use: 'Invoke command',
        description: 'The <strong>HTML Command element</strong> (<strong><code>&lt;command&gt;</code></strong>) represents a command which the user can invoke. Commands are often used as part of a context menu or toolbar.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
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
        element: 'content',
        type: ['Web Components','Obsolete and deprecated elements'],
        categories: [],
        use: 'Shadow DOM insertion point',
        description: 'The <strong>HTML <code>&lt;content&gt;</code> element</strong>—an obsolete part of the Web Components suite of technologies—was used inside of Shadow DOM as an insertion point, and wasn\'t meant to be used in ordinary HTML.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
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
        element: 'dir',
        type: ['Text content','Obsolete and deprecated elements'],
        categories: [],
        use: 'Directory container',
        description: 'The obsolete <strong>HTML Directory element</strong> (<strong><code>&lt;dir&gt;</code></strong>) is used as a container for a directory of files and/or folders, potentially with styles and icons applied by the user agent.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
        defaults: {
            display: 'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            listStyletype: 'disc',
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
        element: 'element',
        type: ['Obsolete and deprecated elements','Web Components'],
        categories: [],
        use: 'Define custom DOM elements',
        description: 'The obsolete <strong>HTML <code>&lt;element&gt;</code> element</strong> was part of the Web Components specification; it was intended to be used to define new custom DOM elements.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
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
        element: 'font',
        type: ['Obsolete and deprecated elements'],
        categories: [],
        use: 'Font default',
        description: 'The <strong>HTML <code>&lt;content&gt;</code> element</strong>—an obsolete part of the Web Components suite of technologies—was used inside of Shadow DOM as an insertion point, and wasn\'t meant to be used in ordinary HTML.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
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
        element: 'frame',
        type: ['Obsolete and deprecated elements'],
        categories: [],
        use: 'Nested browsing context',
        description: '<code>&lt;frame&gt;</code> is an HTML element which defines a particular area in which another HTML document can be displayed. A frame should be used within a <code>&lt;frameset&gt;</code>.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
        defaults: {
        },
        blink: {
            display: 'block',
        },
        webkit: {
            display: 'block',
        },
        gecko: {
            borderRadius: '0 ! important',
        },
        trident: {
        },
    },
    {
        element: 'frameset',
        type: ['Obsolete and deprecated elements'],
        categories: [],
        use: 'Nested browsing context container',
        description: 'The <strong>HTML <code>&lt;frameset&gt;</code> element</strong> is used to contain <code>&lt;frame&gt;</code> elements.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
        defaults: {
        },
        blink: {
            borderColor: 'inherit',
            display: 'block',
        },
        webkit: {
            borderColor: 'inherit',
            display: 'block',
        },
        gecko: {
            display: 'block ! important',
            overflow: 'hidden',
            position: 'static ! important',
            float: 'none ! important',
            border: 'none ! important',
        },
        trident: {
        },
    },
    {
        element: 'image',
        type: ['Obsolete and deprecated elements'],
        categories: [],
        use: 'Image',
        description: 'The obsolete <strong>HTML Image element (<code>&lt;image&gt;</code>)</strong> is an obsolete remnant of an ancient version of HTML lost in the mists of time; use the standard <code>&lt;img&gt;</code> element instead.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
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
        element: 'isindex',
        type: ['Obsolete and deprecated elements'],
        categories: [],
        use: 'Document querying',
        description: '<strong><code>&lt;isindex&gt;</code></strong> is an obsolete HTML element that puts a text field in a page for querying the document.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
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
        element: 'keygen',
        type: ['Obsolete and deprecated elements'],
        categories: [],
        use: 'Form certificate request',
        description: 'The HTML <code>&lt;keygen&gt;</code> element exists to facilitate generation of key material, and submission of the public key as part of an HTML form. This mechanism is designed for use with Web-based certificate management systems. It is expected that the <code>&lt;keygen&gt;</code> element will be used in an HTML form along with other information needed to construct a certificate request, and that the result of the process will be a signed certificate.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
        defaults: {
        },
        blink: {
            borderRadius: '5px',
            color: 'initial',
            letterSpacing: 'normal',
            wordSpacing: 'normal',
            lineHeight: 'normal',
            textTransform: 'none',
            textIndent: '0',
            textShadow: 'none',
            display: 'inline-block',
            textAlign: 'start',
        },
        webkit: {
            borderRadius: '5px',
            color: 'initial',
            letterSpacing: 'normal',
            wordSpacing: 'normal',
            lineHeight: 'normal',
            textTransform: 'none',
            textIndent: '0',
            textShadow: 'none',
            display: 'inline-block',
            textAlign: 'start',
        },
        gecko: {
        },
        trident: {
        },
    },
    {
        element: 'listing',
        type: ['Obsolete and deprecated elements'],
        categories: [],
        use: 'Block of preformatted text',
        description: 'The <em>HTML Listing Element</em> (<code>&lt;listing&gt;</code>) renders text between the start and end tags without interpreting the HTML in between and using a monospaced font. The HTML 2 standard recommended that lines shouldn\'t be broken when not greater than 132 characters.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
        defaults: {
            display: 'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            fontFamily: 'monospace',
            whiteSpace: 'pre',
        },
        blink: {
            display: 'block',
            fontFamily: 'monospace',
            whiteSpace: 'pre',
            margin: '0',
        },
        webkit: {
            display: 'block',
            fontFamily: 'monospace',
            whiteSpace: 'pre',
            margin: '0',
        },
        gecko: {
            display: 'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            fontSize: 'medium',
            fontFamily: 'monospace',
            whiteSpace: 'pre',
        },
        trident: {
        },
    },
    {
        element: 'marquee',
        type: ['Obsolete and deprecated elements'],
        categories: [],
        use: 'Scrolling text',
        description: 'The HTML <code>&lt;marquee&gt;</code> element is used to insert a scrolling area of text. You can control what happens when the text reaches the edges of its content area using its attributes.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
        defaults: {
            textAlign: 'initial',
        },
        blink: {
            display: 'inline-block',
        },
        webkit: {
            display: 'inline-block',
        },
        gecko: {
            display: 'inline-block',
            verticalAlign: 'text-bottom',
            textAlign: 'start',
        },
        trident: {
        },
    },
    {
        element: 'menuitem',
        type: ['Interactive elements','Obsolete and deprecated elements'],
        categories: [],
        use: 'Menu command item',
        description: 'The <strong>HTML <code>&lt;menuitem&gt;</code> element</strong> represents a command that a user is able to invoke through a popup menu. This includes context menus, as well as menus that might be attached to a menu button.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
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
        element: 'multicol',
        type: ['Obsolete and deprecated elements'],
        categories: [],
        use: 'Menu command item',
        description: 'The <strong>HTML Multi-Column Layout element</strong> (<strong><code>&lt;multicol&gt;</code></strong>) was an experimental element designed to allow multi-column layouts and must not be used.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
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
        },
        trident: {
        },
    },
    {
        element: 'nextid',
        type: ['Obsolete and deprecated elements'],
        categories: [],
        use: 'Auto-generate <code>NAME</code> labels for anchors',
        description: '<strong><code>&lt;nextid&gt;</code></strong> is an obsolete HTML element that served to enable the NeXT web designing tool to generate automatic NAME labels for its anchors.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
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
        element: 'nobr',
        type: ['Obsolete and deprecated elements'],
        categories: [],
        use: 'Prevent text wrapping',
        description: 'The non-standard, obsolete HTML <code>&lt;nobr&gt;</code> element prevents the text it contains from automatically wrapping across multiple lines, potentially resulting in the user having to scroll horizontally to see the entire width of the text.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
        defaults: {
            whiteSpace: 'nowrap',
        },
        blink: {
            whiteSpace: 'nowrap',
        },
        webkit: {
            whiteSpace: 'nowrap',
        },
        gecko: {
            whiteSpace: 'nowrap',
        },
        trident: {
        },
    },
    {
        element: 'noembed',
        type: ['Embedded content','Obsolete and deprecated elements'],
        categories: [],
        use: 'Fallback support for <code>&lt;embed&gt;</code>',
        description: 'The <code><strong>&lt;noembed&gt;</strong></code> element is an obsolete, non-standard way to provide alternative, or "fallback", content for browsers that do not support the <code>&lt;embed&gt;</code> element or do not support the type of embedded content an author wishes to use.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
        defaults: {
            display: 'none',
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
            display: 'none',
        },
        trident: {
        },
    },
    {
        element: 'noframes',
        type: ['Obsolete and deprecated elements'],
        categories: [],
        use: 'Fallback support for <code>&lt;frame&gt;</code>',
        description: 'The obsolete HTML <strong>No Frames</strong> or <strong>frame fallback</strong> element, <strong><code>&lt;noframes&gt;</code></strong>, provides content to be presented in browsers that don\'t support (or have disabled support for) the <code>&lt;frame&gt;</code> element.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
        defaults: {
            display: 'none',
        },
        blink: {
            display: 'none',
        },
        webkit: {
            display: 'none',
        },
        gecko: {
            display: 'none',
        },
        trident: {
        },
    },
    {
        element: 'plaintext',
        type: ['Obsolete and deprecated elements'],
        categories: [],
        use: 'Render in plain text',
        description: 'The <em>HTML Plaintext Element</em> (<code>&lt;plaintext&gt;</code>) renders everything following the start tag as raw text, ignoring any following HTML.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
        defaults: {
            display: 'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            fontFamily: 'monospace',
            whiteSpace: 'pre',
        },
        blink: {
            display: 'block',
            fontFamily: 'monospace',
            whiteSpace: 'pre',
            margin: '0',
        },
        webkit: {
            display: 'block',
            fontFamily: 'monospace',
            whiteSpace: 'pre',
            margin: '0',
        },
        gecko: {
            display: 'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            fontFamily: 'monospace',
            whiteSpace: 'pre',
        },
        trident: {
        },
    },
    {
        element: 'shadow',
        type: ['Web Components','Obsolete and deprecated elements'],
        categories: [],
        use: 'Shadow DOM insertion point',
        description: 'The <strong>HTML <code>&lt;shadow&gt;</code> element</strong>—an obsolete part of the Web Components technology suite—was intended to be used as a shadow DOM insertion point.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
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
        element: 'spacer',
        type: ['Obsolete and deprecated elements'],
        categories: [],
        use: 'Empty spaces',
        description: '<strong><code>&lt;spacer&gt;</code></strong> is an obsolete HTML element which allowed insertion of empty spaces on pages. It was devised by Netscape to accomplish the same effect as a single-pixel layout image, which was something web designers used to use to add white spaces to web pages without actually using an image. However, <code>&lt;spacer&gt;</code> no longer supported by any major browser and the same effects can now be achieved using simple CSS.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
        defaults: {
        },
        blink: {
        },
        webkit: {
        },
        gecko: {
            position: 'static ! important',
            float: 'none ! important',
        },
        trident: {
        },
    },
    {
        element: 'strike',
        type: ['Obsolete and deprecated elements'],
        categories: [],
        use: 'Inaccurate text',
        description: 'The <strong>HTML <code>&lt;strike&gt;</code> element</strong> (or <em>HTML Strikethrough Element</em>) places&nbsp;a strikethrough (horizontal line) over text.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
        defaults: {
            textDecoration: 'line-through',
        },
        blink: {
            textDecoration: 'line-through',
        },
        webkit: {
            textDecoration: 'line-through',
        },
        gecko: {
            textDecoration: 'line-through',
        },
        trident: {
        },
    },
    {
        element: 'tt',
        type: ['Inline text semantics','Obsolete and deprecated elements'],
        categories: ['flow', 'phrasing', 'palpable'],
        use: 'Formatting input/output',
        description: 'The obsolete <strong>HTML Teletype Text element</strong> (<strong><code>&lt;tt&gt;</code></strong>) creates inline text which is presented using the user agent\'s default monospace font face.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
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
        },
    },
    {
        element: 'xmp',
        type: ['Obsolete and deprecated elements'],
        categories: [],
        use: 'Computer code',
        description: 'The <em>HTML Example Element</em> (<code>&lt;xmp&gt;</code>) renders text between the start and end tags without interpreting the HTML in between and using a monospaced font. The HTML2 specification recommended that it should be rendered wide enough to allow 80 characters per line.',
        note: 'Obsolete/Deprecated',
        obsolete: true,
        defaults: {
            display: 'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            fontFamily: 'monospace',
            whiteSpace: 'pre',
        },
        blink: {
            display: 'block',
            margin: '0',
            fontFamily: 'monospace',
            whiteSpace: 'pre',
        },
        webkit: {
            display: 'block',
            margin: '0',
            fontFamily: 'monospace',
            whiteSpace: 'pre',
        },
        gecko: {
            display: 'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            fontFamily: 'monospace',
            whiteSpace: 'pre',
        },
        trident: {
        },
    },
]