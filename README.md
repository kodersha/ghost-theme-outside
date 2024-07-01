# outside
![Ghost](https://img.shields.io/badge/ghost-000?style=for-the-badge&logo=ghost&logoColor=%23F7DF1E) ![](https://img.shields.io/badge/theme-000?style=for-the-badge)

![Cover](/.screenshots/cover.png)

<details>
  <summary>More screenshots →</summary>
  
  ![Post](/.screenshots/post.png)

  ![Cover](/.screenshots/tag.png)

</details>

&nbsp;
&nbsp;
&nbsp;

## features
Responsive design, dark shades, minimalism, "Tilda Sans" font, remark42 custom styles.

&nbsp;
&nbsp;
&nbsp;

## installation
Just install `.zip` archive in the "Design & branding" section of your Ghost admin panel.

**remark42 styles**:\
To override Remark42 CSS, add the following to `nginx.conf`:
```
# Section for proxying CSS remark file.

location /comments/web/remark.css {
  alias /ghost/themes/outsude/assets/comments.css;
  types {
    text/css css;
  }
}
```
In the `location` line, specify the correct path to `remark.css`.

**rebuild CSS & JS**:\
To rebuild all CSS and JS files, run `yarn dev` in the `outside` folder.

**footer**:\
You can add your own link to telegram or another social network in the `partials/footer.hbs` file, line three.

**other**:\
You can use the internal tag `#archive` to display a post without a preview.
