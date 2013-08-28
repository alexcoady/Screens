## Adding new modules / sections
Each module consists of a number of files and settings through the system, these include:

### Backbone files

- Backbone Model `models/section-{sectionName}-model.js`
- Backbone View `views/sections/section-{sectionName}-view.js` 
- Template `templates/sections/section-{sectionName}.ejs`

### Update system files
- The section type needs adding to a switch statement in `section-collection-view.js`
- The model and view need initialising in `screen-view.js`

### Update Sass
- Provide a colour for the section in `styles/_settings.scss`
- Define the key colour in `styles/quarks/_key-colours.scss`
- Add `styles/molecules/_section-{sectionName}.scss`