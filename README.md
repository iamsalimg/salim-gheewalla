# Publish Salim Gheewalla’s website on GitHub Pages

## Upload the package
1. Extract salim-website-github-pages.zip on your computer. Do not upload the ZIP itself.
2. Open https://github.com/iamsalimg/salim-gheewalla and save a backup (Code → Download ZIP).
3. Check Settings → Pages for the existing publishing source. The current website uses GitHub Pages, with site files in the repository root. If set to “Deploy from a branch,” use main and /(root). Preserve an existing custom Actions publishing workflow if one is configured.
4. In the publishing folder, choose Add file → Upload files. Upload the CONTENTS of the extracted package, including the assets folder. index.html must be at the publishing root, not inside an extra folder. Include .nojekyll (a hidden empty file) and CNAME, which contains gheewalla.org. Commit the changes.
5. In Settings → Pages, retain gheewalla.org as the custom domain and enable Enforce HTTPS. The existing domain already points to GitHub Pages; no hosting migration or DNS change is needed.
6. Wait for the Pages deployment to succeed. Check https://gheewalla.org/ and https://gheewalla.org/press.html. Check photos, navigation, press downloads and email links. Email links should open salim@utilitise.com.

No installation or build command is required. The package is plain HTML, CSS, JavaScript and local assets. It contains no credentials or private Sites configuration. Revert the upload commit if a rollback is needed.

## Make the public site discoverable
1. Verify gheewalla.org in Google Search Console: https://search.google.com/search-console/
2. Submit https://gheewalla.org/sitemap.xml.
3. Use URL Inspection on the homepage and press page; confirm Google can access them, confirm its selected canonical and request indexing.
4. Run Google Rich Results Test against the public homepage: https://search.google.com/test/rich-results
5. Run PageSpeed Insights on the public homepage and review mobile performance: https://pagespeed.web.dev/
6. Keep your name, title, portrait, company and official website consistent across utilITise, OPEN Houston, LinkedIn, Forbes and event biographies. Link those profiles back to gheewalla.org where you control the link.
7. If Google creates a Knowledge Panel, use its “Claim this knowledge panel” link to verify your identity and suggest corrections.

Indexing, rankings, AI citations and a Knowledge Panel are not guaranteed. The separate private Sites preview is for review and cannot be indexed. Canonicals and sitemap target gheewalla.org intentionally.

## Editing
- index.html: homepage and main biography.
- press.html: press kit and speaker biographies.
- assets/salim-gheewalla-bios.txt: downloadable bios; keep consistent with press.html.
- styles.css: appearance and responsive styling.
- app.js: mobile navigation, bio-copy buttons and event date label.
- robots.txt / sitemap.xml: crawler access and canonical page inventory.

Event photos retain credits. Career brand and partner logos describe historical work, not current endorsements. Nonprofit leadership was supplied and approved by Salim. Dates and claims should be reviewed periodically, especially scheduled speaking appearances.

Official GitHub custom-domain guide:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
