# Swiss grey design: archive notes

Status: designed and prototyped October 2026. Built as draft pages on the Webflow preview site, then shelved. The launch site uses a different look. Everything here is kept so it can be rebuilt on another domain.

## What it is
A two-page prototype for a premium home electrification brand (placeholder name "[Brand]", Heataire Services behind it): a **pool heat pump** page and a **hot water heat pump** page. Swiss grey editorial style, one coral signal colour, big tight type, a sentence-style finder, and customer-chosen result views.

## Files
- `swiss.css`, `swiss.js`: the live bundle. The JS renders the whole page into `<div id="sw-root">` and runs both finders. `window.SW_PAGE` ('pool' or 'hw') chooses which page shows.
- `img/`: product photos (Rinnai GR, AR, 7kW split, Viessmann Vitocal 161-A, Sunlover Oasis iX small and large, Oasis Rapid). Rapid is stored but not wired in because the models were not in the CMS yet.
- `prototype/swiss-both-pages.html`: single self-contained file. Open it in any browser to see both pages with the nav switcher, dark mode and lightbox. This is the quickest way to review the design.
- `prototype/earlier-concepts/`: the other directions explored (concepts, editorial, revised, styles, variations). Swiss grey won.
- `source/`: build script and parts that assemble the prototype (`build_both.py`, `hw_markup.html`, `hw_script.js`, `pool-swiss-backup.html`).
- `screenshots/`: reference captures.

## Design system
- Ground: grey `#E6E6E3`, paper `#EFEFEC`, ink `#111110`, mute `#6F6F6A`, line `#C4C4BF`.
- Signal: coral `#E8401C`. Used only for "Our pick", key actions and the full-bleed "how it saves" band. Never decoration.
- Type: Inter Tight 400/500/600, large, tight tracking (-0.05em), lowercase hero headlines.
- Dark mode: Light/Dark toggle, follows the OS by default, choice remembered (localStorage key `poolTheme`).
- Mobile: full-screen numbered nav overlay. Works at 400px with no horizontal scroll.
- Thumbnails: small circles beside each model. Coral multiply overlay on hover, focus and for "Our pick". Click opens a large circle lightbox (Esc, click away or Close).
- No icons, illustrations or tinted boxes. Those read as AI-generated and were removed on purpose.

## Behaviour
- Sentence-style finder ("There are about [4 people] in our home.").
- Customer chooses how to see results: Plain English, Bars, or Our pick (remembered in `poolView`). A table view was tried and removed.
- Borderline sizing steps up to the next unit and says so plainly.
- Phone and calls are encouraged throughout. Phone: (03) 9564 8388. Locations: Dromana and Notting Hill.

## Sizing logic
Pool (Sunlover Melbourne chart, cool-weather kW per m2):
- Cover: Oct to Mar 0.298, Sep to Apr 0.438, year round 0.76.
- No cover: Oct to Mar 0.668, Sep to Apr 0.98, year round 1.7.
- Need = factor x pool area. Pick the smallest unit whose cool-weather kW covers it, preferring single phase. If it covers by less than 15%, step up one unit.
- Fit labels: under 1 "Too small", under 1.15 "Just enough", under 1.6 "Good fit", otherwise "More than you need".
- Models (heating / cool-weather kW): iX9 9.4/6.6, iX13 12.8/9.1, iX19 18.9/12.5, iX24 24.6/18.6, iX28 28.0/21.7, iX28T 28.9/21.4 (three phase), iX36T 36.0/27.0 (three phase).

Hot water:
- People 1 to 7 (7 means 7 or more). Need = people, plus one if 3 or more.
- Recommended = lowest sort-order unit within the chosen type with people-max at or above need.
- Fit: below people "Too small", below need "Just enough", up to need+1 "Good fit", else "More than you need".
- List shows the pick plus up to three close fits, with "Show all" for the rest.
- Models: Enviroflo GR 180/265/300 (plug-in), AR 300/340 (premium, Australian made), Viessmann Vitocal 161-A 200/270, Enviroflo S split 5kW and 7kW with 250/315/400L tanks.

## How it was wired into Webflow (for reuse)
- Site: brand-380474.webflow.io (site id 6ab09afecd9f8fa73510d6ed). Draft pages `/pool-heat-pumps-swiss` and `/hot-water-heat-pumps-swiss`, noindex, unlinked. Original pages were never changed.
- Each page: one empty `<div id="sw-root"></div>` in the body, head code loads the Google font and `swiss.css`, footer code sets `window.SW_PAGE` and loads `swiss.js`. Both from jsDelivr, pinned to a commit: `https://cdn.jsdelivr.net/gh/chewychewz/heataire-site-assets@<commit>/swiss.js`. Pin to a commit so edits never change a live page unexpectedly.
- Product photos were also loaded into the CMS `photo` field on hot water and pool items, so the CMS is ready for a CMS-driven build.
- Webflow builder limits found: it drops new class names, turns buttons into links, rejects a dropdown outside a form, and custom code boxes are too small for this bundle. Hosting the files externally solved it.
- Webflow limits publishing to once a minute.

## Not done yet (if rebuilt)
- Page copy is drawn by script, so not editable in Designer or visible to search engines. Better: real Webflow elements for copy, script only for finders.
- Finders read a model list inside the JS. Better: read from the CMS items.
- Photos for 5kW splits, and the Oasis Rapid models (photo stored, models not added).
- Real in-situ photos, testimonials and licence proof, final brand name.
- Heataire is meant to have a warmer look for an older audience that feeds into the electrification brand.

## Rebuilding on a new domain
1. Copy `swiss.css`, `swiss.js` and `img/` into a new repo (or reuse this one).
2. Create a blank page on the new site with `<div id="sw-root"></div>`.
3. Add the head and footer code as above, with `SW_PAGE` set to `pool` or `hw`. Change `SW_URLS` in `swiss.js` to the real page paths.
4. Replace `[Brand]` and the footer text in the markup string at the top of `swiss.js`.
