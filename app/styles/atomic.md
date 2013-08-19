# Atomic CSS Structure for Zone Screens

### Utilities
Utility mixins and functions used throughout the stylesheets. Check if Compass has a built-in function/mixin for the functionality you need before adding anything here

### Quarks
> SMACSS base

The style for actual elements, eg `<p>` or `<input>`. This is the base style for the entire site and usually only defines 2 or 3 properties

### Atoms
> BEM elements / BEM simple blocks

Atoms make up highly reusable blocks of style. These are individual elements or simple constructs, including a search form, or a resuable element like a media or flag element.

### Molecules
> BEM blocks / complex blocks

Molecules are the blocks that add context to Atoms. Molecules are the site-header, the sidebar, the footer etc. A Collection of Atoms or other molecules.

## File structure

- main.scss
- _settings.scss

- Utilities/
  - _clearfix.scss (Do NOT use Compass clearfix)

- Quarks/
  - _body.scss
  - _headings.scss
  - _paragraph.scss

- Atoms/
  - _screen.scss
  - _sections.scss (Because this is a highly reusable, simple construct)
  
- Molecules/
