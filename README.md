# outside

![Cover](/.screenshots/cover.png)

## features

Responsive design, dark shades, minimalism, "Tilda Sans" font, remark42 custom styles.\\

## installation

Just install `.zip` archive in the "Design & branding" section of your Ghost admin panel.\\

### remark42 styles

To override Remark42 CSS, add the following to `nginx.conf`:\\

``` conf
# Section for proxying CSS remark file.
# In the `location` line, specify the correct path to `remark.css`.

location /comments/web/remark.css {
  alias /ghost/themes/outsude/assets/comments.css;
  types {
    text/css css;
  }
}
```

### rebuild CSS & JS

To rebuild all CSS and JS files, run `yarn dev` in the `outside` folder.\\

### footer

You can add your own link to telegram or another social network in the `partials/footer.hbs` file, line three.