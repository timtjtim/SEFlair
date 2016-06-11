# SE Flair

Create a nicer (HD) flair using the Stack Exchange 2.2 API

 - This uses the Stack Exchange 2.2 API which is documented [here](http://api.stackexchange.com/). It uses the [`/users/{ids}`](http://api.stackexchange.com/docs/users-by-ids) section to get the following information:

  - User display name
  - User display image
  - User badge count
  - User reputation

 - It uses an API key, available from [stackapps.com](http://stackapps.com/apps/oauth/register). If you do not use an API key, it will allow only 300 requests per UTC day (meaning your page can only be loaded 300 times).

# Usage

Download the 3 files in [`Flair`](https://github.com/timtjtim/SEFlair/tree/master/Flair) - `flair.html`, `flair.css`, `flair.js`.

Do a find-replace for `SITENAME` and replace with the name of the Stack Exchange site (e.g. `meta` for meta.stackexchange or `askubuntu` for askubuntu.com)

This must be done in both `flair.html` and `flair.css`.

In `flair.html`, line 6, the `http://SITEURL.com` argumemt must change to the URL of the site (e.g. `http://meta.stackexchange.com` or `http://askubuntu.com`).

Also on line 6, the USERID must be changed to the user ID of your account **on the site you have chosen** (not your network profile id). You can find this by visiting `http://SITEURL.com/users/me`, and looking for the numbers in the URL bar.

On line 17 of `flair.js` replace `APIKEYHERE` with your API key, or leave it blank.

[Example is live here](http://timonline.tk/Flair/flair,html)

# Usage with 2 or more flairs on one page

Complete all steps above, however many times required.

Copy everything in the `flair.html` files into one - everything should be inside the body, at the level of the div with ID `flair-SITENAME-in-here` (line 8).

In the `flair.css` file, only the first 4 sections need duplicating.

In the `body` tag of `flair.html` is an `onload=` section. This must be amended to include the function call multiple times. For example, to have a flair on Meta Stack Exchange and Stackoverflow, use `makeAPIRequest('meta', 'http://meta.stackexchange.com', '-1'); makeAPIRequest('stackoverflow', 'http://stackoverflow.com', '-1')`. Follow the same pattern for more (semi-colon `;` delimited).

[Example is live here](http://timonline.tk/Flair/flair-2,html)

# Thanks to the following resources:

 - http://www.getpostman.com/
 - http://stackoverflow.com/q/2263096/
 - http://stackoverflow.com/q/10737166/
 - http://stackoverflow.com/q/18095639/
 - http://stackoverflow.com/q/2067472/
 - http://www.html5rocks.com/en/tutorials/cors/ **Javascript taken from here (Licened under Apache 2.0)**
 - http://stackoverflow.com/q/4935632/
 - http://stackoverflow.com/q/45015/
 - http://stackoverflow.com/q/9991805/
 - http://www.w3schools.com/js/js_arrays.asp
 - http://www.w3schools.com/js/js_errors.asp
 - http://www.w3schools.com/tags/att_td_rowspan.asp
 - http://stackoverflow.com/q/9402856/
 - http://www.granneman.com/webdev/coding/css/centertables/
 - http://stackoverflow.com/q/2281087/
 - http://stackoverflow.com/q/3576605/
 - http://stackoverflow.com/q/7051369/
 - http://stackoverflow.com/q/15022323/
 - http://www.w3schools.com/svg/svg_circle.asp
 - http://stackoverflow.com/q/21580527/
 - http://stackoverflow.com/q/12485818/
 - https://validator.w3.org/
 - http://www.computerhope.com/issues/ch000074.htm
 - http://www.w3schools.com/jsref/prop_img_src.asp
 - https://www.w3.org/Style/Examples/007/center.en.html
 - http://www.w3schools.com/cssref/pr_pos_vertical-align.asp
 - http://stackoverflow.com/q/23199454/
 - http://stackoverflow.com/q/195951/
 - http://stackoverflow.com/q/19353331/
 - http://www.w3schools.com/jsref/prop_html_classname.asp
 - http://stackoverflow.com/q/7125453/
 - http://stackoverflow.com/q/7125453/
 - http://stackoverflow.com/q/19353331/
 - http://stackoverflow.com/q/23199454/
 - http://css3.bradshawenterprises.com/animating_height/
 - https://coderwall.com/p/mn2a2g/how-to-use-css-transitions-for-height-and-width-from-0px-to-auto
 - http://www.w3schools.com/css/css3_transitions.asp
 - https://iamarunkumar.wordpress.com/2010/02/10/what-is-the-default-display-property-for-span-and-div/
 - http://learnlayout.com/display.html
 - http://stackoverflow.com/q/8228980/
 - http://jsbin.com/obElaNe/1/embed?output
 - https://www.impressivewebs.com/animate-display-block-none/
 - http://stackoverflow.com/q/1141302/
 - http://stackoverflow.com/q/951021/
 - http://www.freeformatter.com/html-formatter.html
 - https://chrome.google.com/webstore/detail/clear-cache/cppjkneekbjaeellbfkmgnhonkkjfpdn
 - http://www.w3schools.com/cssref/css3_pr_mediaquery.asp
 - https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
 - http://giona.net/tools/css3-mediaquery-generator/
 - https://tools.nasqueron.org/css/media-queries-generator
 - https://csscreator.com/topic/media-query
 - http://stackoverflow.com/q/14008781/
 - http://stackoverflow.com/q/7859336/
 - http://en.gravatar.com/site/implement/
 - http://www.puls200.de/?p=316
 - https://ma.tt/2008/04/identicons-from-gravatar/
 - https://jdenticon.com/
 - https://www.gitkraken.com/about
