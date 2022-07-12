const database = [
  {
    _id: 5435,
    userID: '54fsdlj53',
    post_id: '1',
    post_title: 'gdfgfdg Meshup',
    thumbnail: 'https://api.lorem.space/image/shoes?w=400&h=225',
    image: '',
    time: 'dec 15, 2021',
    short_description: 'গিয়েছিলাম খিচুড়ি নিয়ে, সবাই আনন্দ করে খাইলো কিন্তু ৫০ টির মতো হিন্দু ধর্মাবলম্বী পরিবার খিচুড়ি গ্রহন কর         রেনি। কারণ তাদের ধর্মের বিধানানুযায়ী আজকের জন্য তা গ্রহন করতে নিষেধ করা হয়েছে। তাই তড়িঘড়ি করে এ ৫০ টি পরিবারের জন্য ফল-ফ্রুটসের        ব্যবস্থা করলাম।  আহা তাদের খুশি কে দেখে! কিছু কিছু সময় নিজেকে বিলিয়ে দিতে ইচ্ছে করে।',
    category: 'Vegetables',
    tags: ['html'],
    postBody: '<iframe  src="https://www.youtube.com/embed/ANSWToElgjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n',
    sort: '5345345345',
    postRefMode: 'video'
  },

  {
    _id: 55635435,
    userID: '54fsdlj53',
    post_id: '2',
    post_title: 'StackOverFlow',
    thumbnail: 'https://api.lorem.space/image/shoes?w=400&h=225',
    image: '',
    time: 'dec 15, 2021',
    short_description: 'গিয়েছিলাম খিচুড়ি নিয়ে, সবাই আনন্দ করে খাইলো কিন্তু ৫০ টির মতো হিন্দু ধর্মাবলম্বী পরিবার খিচুড়ি গ্রহন কর         রেনি। কারণ তাদের ধর্মের বিধানানুযায়ী আজকের জন্য তা গ্রহন করতে নিষেধ করা হয়েছে। তাই তড়িঘড়ি করে এ ৫০ টি পরিবারের জন্য ফল-ফ্রুটসের        ব্যবস্থা করলাম।  আহা তাদের খুশি কে দেখে! কিছু কিছু সময় নিজেকে বিলিয়ে দিতে ইচ্ছে করে।',

    postBody: `<script src="//d3js.org/d3.v3.min.js"></script>So, as has been mentioned, that really isn't possible. However, there are some ways you can still be smart about it.\n" +
          '\n' +
          'Three of the five major browsers all allow you to see the zoom level of the browser, furthermore, should the browser be zoomed a window.onresize event is fired.\n' +
          '\n' +
          'IE:      event.view.devicePixelRatio           OR window.view.devicePixelRatio\n' +
          'Chrome:  event.currentTarget.devicePixelRatio  OR window.devicePixelRatio\n' +
          'Firefox: event.originalTarget.devicePixelRatio OR window.devicePixelRatio\n' +
          'Safari:  /* Not possible */\n' +
          'Opera:   /* Not possible */\n' +
          "I think the stuff after OR works based on something I noticed as I was messing around. The first ones I know work in at least the latest version of each one. Note that Safari and Opera both have the devicePixelRatio, however both never change. It's always just 1.\n" +
          '\n' +
          "The above is your easy way if you don't care that much. If you do, then you could try out the detect-zoom script, which I came across while looking for solutions to Safari and Opera.\n" +
          '\n' +
          "So what you can now do is get the zoom level, and then offset your zoom to where it doesn't do anything. So if I force my browser to 50% zoom, you just go to 200%. Thus, no change. Of course it will be a bit more complicated, you'll have to store the last browser zoom, the new browser zoom, and do some slightly more complicated math, but based on what you already have, that should be a breeze.\n" +
          '\n' +
          'Another idea might be to just listen for a resize event, and calculate based off the new visible size, but that might cause issues if the window is just resized. I think the above is going to be your best option, with perhaps a fallback alert to warn the user not to zoom if necessary.',`,
    postBodyJs: `
          
          var w = 960,
          h = 500,
          z = 20,
          x = w / z,
          y = h / z;

          var svg = d3.select("body").append("svg")
          .attr("width", w)
          .attr("height", h);

          svg.selectAll("rect")
          .data(d3.range(x * y))
          .enter().append("rect")
          .attr("transform", translate)
          .attr("width", z)
          .attr("height", z)
          .style("fill", function(d) { return d3.hsl(d % x / x * 360, 1, Math.floor(d / x) / y); })
          .on("mouseover", mouseover);

          function translate(d) {
          return "translate(" + (d % x) * z + "," + Math.floor(d / x) * z + ")";
          }

          function mouseover(d) {
          this.parentNode.appendChild(this);
          
          d3.select(this)
            .style("pointer-events", "none")
          .transition()
            .duration(750)
            .attr("transform", "translate(480,480)scale(23)rotate(180)")
          .transition()
            .delay(1500)
            .attr("transform", "translate(240,240)scale(0)")
            .style("fill-opacity", 0)
            .remove();
          }

          `,
    postBodyCss: '',
    sort: '5345345345',

    category: 'Vegetables',
    tags: ['html'],
    postRefMode: 'text'
  },

  {
    _id: 55635435,
    userID: '54fsdlj53',
    post_id: '24',
    post_title: 'StackOverFlow',
    thumbnail: 'https://api.lorem.space/image/shoes?w=400&h=225',
    image: '',
    time: 'dec 15, 2021',
    short_description: 'গিয়েছিলাম খিচুড়ি নিয়ে, সবাই আনন্দ করে খাইলো কিন্তু ৫০ টির মতো হিন্দু ধর্মাবলম্বী পরিবার খিচুড়ি গ্রহন কর         রেনি। কারণ তাদের ধর্মের বিধানানুযায়ী আজকের জন্য তা গ্রহন করতে নিষেধ করা হয়েছে। তাই তড়িঘড়ি করে এ ৫০ টি পরিবারের জন্য ফল-ফ্রুটসের        ব্যবস্থা করলাম।  আহা তাদের খুশি কে দেখে! কিছু কিছু সময় নিজেকে বিলিয়ে দিতে ইচ্ছে করে।',

    postBody: '',
    sort: '5345345345',

    category: 'Vegetables',
    tags: ['html'],
    postRefMode: 'text'
  },
  {
    _id: 55635435,
    userID: '54fsdlj53',
    post_id: '25434',
    post_title: 'StackOverFlow',
    thumbnail: 'https://api.lorem.space/image/shoes?w=400&h=225',
    image: '',
    time: 'dec 15, 2021',
    short_description: 'গিয়েছিলাম খিচুড়ি নিয়ে, সবাই আনন্দ করে খাইলো কিন্তু ৫০ টির মতো হিন্দু ধর্মাবলম্বী পরিবার খিচুড়ি গ্রহন কর         রেনি। কারণ তাদের ধর্মের বিধানানুযায়ী আজকের জন্য তা গ্রহন করতে নিষেধ করা হয়েছে। তাই তড়িঘড়ি করে এ ৫০ টি পরিবারের জন্য ফল-ফ্রুটসের        ব্যবস্থা করলাম।  আহা তাদের খুশি কে দেখে! কিছু কিছু সময় নিজেকে বিলিয়ে দিতে ইচ্ছে করে।',

    postBody: '',
    sort: '5345345345',

    category: 'Vegetables',
    tags: ['html'],
    postRefMode: 'text'
  },
  {
    _id: 5435,
    userID: '54fsdlj53',
    post_id: '15345',
    post_title: 'gdfgfdg Meshup',
    thumbnail: 'https://api.lorem.space/image/shoes?w=400&h=225',
    image: '',
    time: 'dec 15, 2021',
    short_description: 'গিয়েছিলাম খিচুড়ি নিয়ে, সবাই আনন্দ করে খাইলো কিন্তু ৫০ টির মতো হিন্দু ধর্মাবলম্বী পরিবার খিচুড়ি গ্রহন কর         রেনি। কারণ তাদের ধর্মের বিধানানুযায়ী আজকের জন্য তা গ্রহন করতে নিষেধ করা হয়েছে। তাই তড়িঘড়ি করে এ ৫০ টি পরিবারের জন্য ফল-ফ্রুটসের        ব্যবস্থা করলাম।  আহা তাদের খুশি কে দেখে! কিছু কিছু সময় নিজেকে বিলিয়ে দিতে ইচ্ছে করে।',
    category: 'Vegetables',
    tags: ['html'],
    postBody: `
    <h2 class="specialT">HTML Color Values:</h2><div class="display">
<table BORDERCOLOR="black" BORDER="1" CELLPADDING="2" CELLSPACING="0" WIDTH="460" ALIGN="center">
<tr>
<td BGCOLOR="#000000"><font COLOR="#ffffff"><b>#000000</b></font></td>
<td BGCOLOR="#000033"><font COLOR="#ffffcd"><b>#000033</b></font></td>
<td BGCOLOR="#000066"><font COLOR="#ffff9a"><b>#000066</b></font></td>

<td BGCOLOR="#000099"><font COLOR="#ffff67"><b>#000099</b></font></td>
<td BGCOLOR="#0000CC"><font COLOR="#ffff34"><b>#0000CC</b></font></td>
<td BGCOLOR="#0000FF"><font COLOR="#ffff01"><b>#0000FF</b></font></td>
</tr>
<tr><td BGCOLOR="#003300"><font COLOR="#ffcd00"><b>#003300</b></font></td>
<td BGCOLOR="#003333"><font COLOR="#ffcccd"><b>#003333</b></font></td>
<td BGCOLOR="#003366"><font COLOR="#ffcc9a"><b>#003366</b></font></td>
<td BGCOLOR="#003399"><font COLOR="#ffcc67"><b>#003399</b></font></td>
<td BGCOLOR="#0033CC"><font COLOR="#ffcc34"><b>#0033CC</b></font></td>

<td BGCOLOR="#0033FF"><font COLOR="#ffcc01"><b>#0033FF</b></font></td>
</tr>
<tr><td BGCOLOR="#006600"><font COLOR="#ff9a00"><b>#006600</b></font></td>
<td BGCOLOR="#006633"><font COLOR="#ff99cd"><b>#006633</b></font></td>
<td BGCOLOR="#006666"><font COLOR="#ff999a"><b>#006666</b></font></td>
<td BGCOLOR="#006699"><font COLOR="#ff9967"><b>#006699</b></font></td>
<td BGCOLOR="#0066CC"><font COLOR="#ff9934"><b>#0066CC</b></font></td>
<td BGCOLOR="#0066FF"><font COLOR="#ff9901"><b>#0066FF</b></font></td>
</tr>
<tr><td BGCOLOR="#009900"><font COLOR="#ff6700"><b>#009900</b></font></td>

<td BGCOLOR="#009933"><font COLOR="#ff66cd"><b>#009933</b></font></td>
<td BGCOLOR="#009966"><font COLOR="#ff669a"><b>#009966</b></font></td>
<td BGCOLOR="#009999"><font COLOR="#ff6667"><b>#009999</b></font></td>
<td BGCOLOR="#0099CC"><font COLOR="#ff6634"><b>#0099CC</b></font></td>
<td BGCOLOR="#0099FF"><font COLOR="#ff6601"><b>#0099FF</b></font></td>
</tr>
<tr><td BGCOLOR="#00CC00"><font COLOR="#ff3400"><b>#00CC00</b></font></td>
<td BGCOLOR="#00CC33"><font COLOR="#ff33cd"><b>#00CC33</b></font></td>
<td BGCOLOR="#00CC66"><font COLOR="#ff339a"><b>#00CC66</b></font></td>

<td BGCOLOR="#00CC99"><font COLOR="#ff3367"><b>#00CC99</b></font></td>
<td BGCOLOR="#00CCCC"><font COLOR="#ff3334"><b>#00CCCC</b></font></td>
<td BGCOLOR="#00CCFF"><font COLOR="#ff3301"><b>#00CCFF</b></font></td>
</tr>
<tr><td BGCOLOR="#00FF00"><font COLOR="#ff0100"><b>#00FF00</b></font></td>
<td BGCOLOR="#00FF33"><font COLOR="#ff00cd"><b>#00FF33</b></font></td>
<td BGCOLOR="#00FF66"><font COLOR="#ff009a"><b>#00FF66</b></font></td>
<td BGCOLOR="#00FF99"><font COLOR="#ff0067"><b>#00FF99</b></font></td>
<td BGCOLOR="#00FFCC"><font COLOR="#ff0034"><b>#00FFCC</b></font></td>

<td BGCOLOR="#00FFFF"><font COLOR="#ff0001"><b>#00FFFF</b></font></td>
</tr>
<tr></tr></table><br /><table BORDERCOLOR="black" BORDER="1" CELLPADDING="2" CELLSPACING="0" WIDTH="460" ALIGN="center"><tr><td BGCOLOR="#330000"><font COLOR="#cd0000"><b>#330000</b></font></td>
<td BGCOLOR="#330033"><font COLOR="#ccffcd"><b>#330033</b></font></td>
<td BGCOLOR="#330066"><font COLOR="#ccff9a"><b>#330066</b></font></td>
<td BGCOLOR="#330099"><font COLOR="#ccff67"><b>#330099</b></font></td>
<td BGCOLOR="#3300CC"><font COLOR="#ccff34"><b>#3300CC</b></font></td>
<td BGCOLOR="#3300FF"><font COLOR="#ccff01"><b>#3300FF</b></font></td>
</tr>
<tr><td BGCOLOR="#333300"><font COLOR="#cccd00"><b>#333300</b></font></td>

<td BGCOLOR="#333333"><font COLOR="#cccccd"><b>#333333</b></font></td>
<td BGCOLOR="#333366"><font COLOR="#cccc9a"><b>#333366</b></font></td>
<td BGCOLOR="#333399"><font COLOR="#cccc67"><b>#333399</b></font></td>
<td BGCOLOR="#3333CC"><font COLOR="#cccc34"><b>#3333CC</b></font></td>
<td BGCOLOR="#3333FF"><font COLOR="#cccc01"><b>#3333FF</b></font></td>
</tr>
<tr><td BGCOLOR="#336600"><font COLOR="#cc9a00"><b>#336600</b></font></td>
<td BGCOLOR="#336633"><font COLOR="#cc99cd"><b>#336633</b></font></td>
<td BGCOLOR="#336666"><font COLOR="#cc999a"><b>#336666</b></font></td>

<td BGCOLOR="#336699"><font COLOR="#cc9967"><b>#336699</b></font></td>
<td BGCOLOR="#3366CC"><font COLOR="#cc9934"><b>#3366CC</b></font></td>
<td BGCOLOR="#3366FF"><font COLOR="#cc9901"><b>#3366FF</b></font></td>
</tr>
<tr><td BGCOLOR="#339900"><font COLOR="#cc6700"><b>#339900</b></font></td>
<td BGCOLOR="#339933"><font COLOR="#cc66cd"><b>#339933</b></font></td>
<td BGCOLOR="#339966"><font COLOR="#cc669a"><b>#339966</b></font></td>
<td BGCOLOR="#339999"><font COLOR="#cc6667"><b>#339999</b></font></td>
<td BGCOLOR="#3399CC"><font COLOR="#cc6634"><b>#3399CC</b></font></td>

<td BGCOLOR="#3399FF"><font COLOR="#cc6601"><b>#3399FF</b></font></td>
</tr>
<tr><td BGCOLOR="#33CC00"><font COLOR="#cc3400"><b>#33CC00</b></font></td>
<td BGCOLOR="#33CC33"><font COLOR="#cc33cd"><b>#33CC33</b></font></td>
<td BGCOLOR="#33CC66"><font COLOR="#cc339a"><b>#33CC66</b></font></td>
<td BGCOLOR="#33CC99"><font COLOR="#cc3367"><b>#33CC99</b></font></td>
<td BGCOLOR="#33CCCC"><font COLOR="#cc3334"><b>#33CCCC</b></font></td>
<td BGCOLOR="#33CCFF"><font COLOR="#cc3301"><b>#33CCFF</b></font></td>
</tr>
<tr><td BGCOLOR="#33FF00"><font COLOR="#cc0100"><b>#33FF00</b></font></td>

<td BGCOLOR="#33FF33"><font COLOR="#cc00cd"><b>#33FF33</b></font></td>
<td BGCOLOR="#33FF66"><font COLOR="#cc009a"><b>#33FF66</b></font></td>
<td BGCOLOR="#33FF99"><font COLOR="#cc0067"><b>#33FF99</b></font></td>
<td BGCOLOR="#33FFCC"><font COLOR="#cc0034"><b>#33FFCC</b></font></td>
<td BGCOLOR="#33FFFF"><font COLOR="#cc0001"><b>#33FFFF</b></font></td>
</tr>
<tr></tr></table><br /><table BORDERCOLOR="black" BORDER="1" CELLPADDING="2" CELLSPACING="0" WIDTH="460" ALIGN="center"><tr><td BGCOLOR="#660000"><font COLOR="#9a0000"><b>#660000</b></font></td>
<td BGCOLOR="#660033"><font COLOR="#99ffcd"><b>#660033</b></font></td>
<td BGCOLOR="#660066"><font COLOR="#99ff9a"><b>#660066</b></font></td>

<td BGCOLOR="#660099"><font COLOR="#99ff67"><b>#660099</b></font></td>
<td BGCOLOR="#6600CC"><font COLOR="#99ff34"><b>#6600CC</b></font></td>
<td BGCOLOR="#6600FF"><font COLOR="#99ff01"><b>#6600FF</b></font></td>
</tr>
<tr><td BGCOLOR="#663300"><font COLOR="#99cd00"><b>#663300</b></font></td>
<td BGCOLOR="#663333"><font COLOR="#99cccd"><b>#663333</b></font></td>
<td BGCOLOR="#663366"><font COLOR="#99cc9a"><b>#663366</b></font></td>
<td BGCOLOR="#663399"><font COLOR="#99cc67"><b>#663399</b></font></td>
<td BGCOLOR="#6633CC"><font COLOR="#99cc34"><b>#6633CC</b></font></td>

<td BGCOLOR="#6633FF"><font COLOR="#99cc01"><b>#6633FF</b></font></td>
</tr>
<tr><td BGCOLOR="#666600"><font COLOR="#999a00"><b>#666600</b></font></td>
<td BGCOLOR="#666633"><font COLOR="#9999cd"><b>#666633</b></font></td>
<td BGCOLOR="#666666"><font COLOR="#99999a"><b>#666666</b></font></td>
<td BGCOLOR="#666699"><font COLOR="#999967"><b>#666699</b></font></td>
<td BGCOLOR="#6666CC"><font COLOR="#999934"><b>#6666CC</b></font></td>
<td BGCOLOR="#6666FF"><font COLOR="#999901"><b>#6666FF</b></font></td>
</tr>
<tr><td BGCOLOR="#669900"><font COLOR="#996700"><b>#669900</b></font></td>

<td BGCOLOR="#669933"><font COLOR="#9966cd"><b>#669933</b></font></td>
<td BGCOLOR="#669966"><font COLOR="#99669a"><b>#669966</b></font></td>
<td BGCOLOR="#669999"><font COLOR="#996667"><b>#669999</b></font></td>
<td BGCOLOR="#6699CC"><font COLOR="#996634"><b>#6699CC</b></font></td>
<td BGCOLOR="#6699FF"><font COLOR="#996601"><b>#6699FF</b></font></td>
</tr>
<tr><td BGCOLOR="#66CC00"><font COLOR="#993400"><b>#66CC00</b></font></td>
<td BGCOLOR="#66CC33"><font COLOR="#9933cd"><b>#66CC33</b></font></td>
<td BGCOLOR="#66CC66"><font COLOR="#99339a"><b>#66CC66</b></font></td>

<td BGCOLOR="#66CC99"><font COLOR="#993367"><b>#66CC99</b></font></td>
<td BGCOLOR="#66CCCC"><font COLOR="#993334"><b>#66CCCC</b></font></td>
<td BGCOLOR="#66CCFF"><font COLOR="#993301"><b>#66CCFF</b></font></td>
</tr>
<tr><td BGCOLOR="#66FF00"><font COLOR="#990100"><b>#66FF00</b></font></td>
<td BGCOLOR="#66FF33"><font COLOR="#9900cd"><b>#66FF33</b></font></td>
<td BGCOLOR="#66FF66"><font COLOR="#99009a"><b>#66FF66</b></font></td>
<td BGCOLOR="#66FF99"><font COLOR="#990067"><b>#66FF99</b></font></td>
<td BGCOLOR="#66FFCC"><font COLOR="#990034"><b>#66FFCC</b></font></td>

<td BGCOLOR="#66FFFF"><font COLOR="#990001"><b>#66FFFF</b></font></td>
</tr>
<tr></tr></table>
</div>


<h2 class="specialT">HTML Color Values Continued:</h2><div class="display">
<table BORDERCOLOR="black" BORDER="1" CELLPADDING="2" CELLSPACING="0" WIDTH="460" ALIGN="center"><tr><td BGCOLOR="#990000"><font COLOR="#670000"><b>#990000</b></font></td>
<td BGCOLOR="#990033"><font COLOR="#66ffcd"><b>#990033</b></font></td>
<td BGCOLOR="#990066"><font COLOR="#66ff9a"><b>#990066</b></font></td>
<td BGCOLOR="#990099"><font COLOR="#66ff67"><b>#990099</b></font></td>
<td BGCOLOR="#9900CC"><font COLOR="#66ff34"><b>#9900CC</b></font></td>
<td BGCOLOR="#9900FF"><font COLOR="#66ff01"><b>#9900FF</b></font></td>
</tr>
<tr><td BGCOLOR="#993300"><font COLOR="#66cd00"><b>#993300</b></font></td>

<td BGCOLOR="#993333"><font COLOR="#66cccd"><b>#993333</b></font></td>
<td BGCOLOR="#993366"><font COLOR="#66cc9a"><b>#993366</b></font></td>
<td BGCOLOR="#993399"><font COLOR="#66cc67"><b>#993399</b></font></td>
<td BGCOLOR="#9933CC"><font COLOR="#66cc34"><b>#9933CC</b></font></td>
<td BGCOLOR="#9933FF"><font COLOR="#66cc01"><b>#9933FF</b></font></td>
</tr>
<tr><td BGCOLOR="#996600"><font COLOR="#669a00"><b>#996600</b></font></td>
<td BGCOLOR="#996633"><font COLOR="#6699cd"><b>#996633</b></font></td>
<td BGCOLOR="#996666"><font COLOR="#66999a"><b>#996666</b></font></td>

<td BGCOLOR="#996699"><font COLOR="#669967"><b>#996699</b></font></td>
<td BGCOLOR="#9966CC"><font COLOR="#669934"><b>#9966CC</b></font></td>
<td BGCOLOR="#9966FF"><font COLOR="#669901"><b>#9966FF</b></font></td>
</tr>
<tr><td BGCOLOR="#999900"><font COLOR="#666700"><b>#999900</b></font></td>
<td BGCOLOR="#999933"><font COLOR="#6666cd"><b>#999933</b></font></td>
<td BGCOLOR="#999966"><font COLOR="#66669a"><b>#999966</b></font></td>
<td BGCOLOR="#999999"><font COLOR="#666667"><b>#999999</b></font></td>
<td BGCOLOR="#9999CC"><font COLOR="#666634"><b>#9999CC</b></font></td>

<td BGCOLOR="#9999FF"><font COLOR="#666601"><b>#9999FF</b></font></td>
</tr>
<tr><td BGCOLOR="#99CC00"><font COLOR="#663400"><b>#99CC00</b></font></td>
<td BGCOLOR="#99CC33"><font COLOR="#6633cd"><b>#99CC33</b></font></td>
<td BGCOLOR="#99CC66"><font COLOR="#66339a"><b>#99CC66</b></font></td>
<td BGCOLOR="#99CC99"><font COLOR="#663367"><b>#99CC99</b></font></td>
<td BGCOLOR="#99CCCC"><font COLOR="#663334"><b>#99CCCC</b></font></td>
<td BGCOLOR="#99CCFF"><font COLOR="#663301"><b>#99CCFF</b></font></td>
</tr>
<tr><td BGCOLOR="#99FF00"><font COLOR="#660100"><b>#99FF00</b></font></td>

<td BGCOLOR="#99FF33"><font COLOR="#6600cd"><b>#99FF33</b></font></td>
<td BGCOLOR="#99FF66"><font COLOR="#66009a"><b>#99FF66</b></font></td>
<td BGCOLOR="#99FF99"><font COLOR="#660067"><b>#99FF99</b></font></td>
<td BGCOLOR="#99FFCC"><font COLOR="#660034"><b>#99FFCC</b></font></td>
<td BGCOLOR="#99FFFF"><font COLOR="#660001"><b>#99FFFF</b></font></td>
</tr>
<tr></tr></table><br /><table BORDERCOLOR="black" BORDER="1" CELLPADDING="2" CELLSPACING="0" WIDTH="460" ALIGN="center"><tr><td BGCOLOR="#CC0000"><font COLOR="#340000"><b>#CC0000</b></font></td>
<td BGCOLOR="#CC0033"><font COLOR="#33ffcd"><b>#CC0033</b></font></td>
<td BGCOLOR="#CC0066"><font COLOR="#33ff9a"><b>#CC0066</b></font></td>

<td BGCOLOR="#CC0099"><font COLOR="#33ff67"><b>#CC0099</b></font></td>
<td BGCOLOR="#CC00CC"><font COLOR="#33ff34"><b>#CC00CC</b></font></td>
<td BGCOLOR="#CC00FF"><font COLOR="#33ff01"><b>#CC00FF</b></font></td>
</tr>
<tr><td BGCOLOR="#CC3300"><font COLOR="#33cd00"><b>#CC3300</b></font></td>
<td BGCOLOR="#CC3333"><font COLOR="#33cccd"><b>#CC3333</b></font></td>
<td BGCOLOR="#CC3366"><font COLOR="#33cc9a"><b>#CC3366</b></font></td>
<td BGCOLOR="#CC3399"><font COLOR="#33cc67"><b>#CC3399</b></font></td>
<td BGCOLOR="#CC33CC"><font COLOR="#33cc34"><b>#CC33CC</b></font></td>

<td BGCOLOR="#CC33FF"><font COLOR="#33cc01"><b>#CC33FF</b></font></td>
</tr>
<tr><td BGCOLOR="#CC6600"><font COLOR="#339a00"><b>#CC6600</b></font></td>
<td BGCOLOR="#CC6633"><font COLOR="#3399cd"><b>#CC6633</b></font></td>
<td BGCOLOR="#CC6666"><font COLOR="#33999a"><b>#CC6666</b></font></td>
<td BGCOLOR="#CC6699"><font COLOR="#339967"><b>#CC6699</b></font></td>
<td BGCOLOR="#CC66CC"><font COLOR="#339934"><b>#CC66CC</b></font></td>
<td BGCOLOR="#CC66FF"><font COLOR="#339901"><b>#CC66FF</b></font></td>
</tr>
<tr><td BGCOLOR="#CC9900"><font COLOR="#336700"><b>#CC9900</b></font></td>

<td BGCOLOR="#CC9933"><font COLOR="#3366cd"><b>#CC9933</b></font></td>
<td BGCOLOR="#CC9966"><font COLOR="#33669a"><b>#CC9966</b></font></td>
<td BGCOLOR="#CC9999"><font COLOR="#336667"><b>#CC9999</b></font></td>
<td BGCOLOR="#CC99CC"><font COLOR="#336634"><b>#CC99CC</b></font></td>
<td BGCOLOR="#CC99FF"><font COLOR="#336601"><b>#CC99FF</b></font></td>
</tr>
<tr><td BGCOLOR="#CCCC00"><font COLOR="#333400"><b>#CCCC00</b></font></td>
<td BGCOLOR="#CCCC33"><font COLOR="#3333cd"><b>#CCCC33</b></font></td>
<td BGCOLOR="#CCCC66"><font COLOR="#33339a"><b>#CCCC66</b></font></td>

<td BGCOLOR="#CCCC99"><font COLOR="#333367"><b>#CCCC99</b></font></td>
<td BGCOLOR="#CCCCCC"><font COLOR="#333334"><b>#CCCCCC</b></font></td>
<td BGCOLOR="#CCCCFF"><font COLOR="#333301"><b>#CCCCFF</b></font></td>
</tr>
<tr><td BGCOLOR="#CCFF00"><font COLOR="#330100"><b>#CCFF00</b></font></td>
<td BGCOLOR="#CCFF33"><font COLOR="#3300cd"><b>#CCFF33</b></font></td>
<td BGCOLOR="#CCFF66"><font COLOR="#33009a"><b>#CCFF66</b></font></td>
<td BGCOLOR="#CCFF99"><font COLOR="#330067"><b>#CCFF99</b></font></td>
<td BGCOLOR="#CCFFCC"><font COLOR="#330034"><b>#CCFFCC</b></font></td>

<td BGCOLOR="#CCFFFF"><font COLOR="#330001"><b>#CCFFFF</b></font></td>
</tr>
<tr></tr></table><br /><table BORDERCOLOR="black" BORDER="1" CELLPADDING="2" CELLSPACING="0" WIDTH="460" ALIGN="center"><tr><td BGCOLOR="#FF0000"><font COLOR="#010000"><b>#FF0000</b></font></td>
<td BGCOLOR="#FF0033"><font COLOR="#00ffcd"><b>#FF0033</b></font></td>
<td BGCOLOR="#FF0066"><font COLOR="#00ff9a"><b>#FF0066</b></font></td>
<td BGCOLOR="#FF0099"><font COLOR="#00ff67"><b>#FF0099</b></font></td>
<td BGCOLOR="#FF00CC"><font COLOR="#00ff34"><b>#FF00CC</b></font></td>
<td BGCOLOR="#FF00FF"><font COLOR="#00ff01"><b>#FF00FF</b></font></td>
</tr>
<tr><td BGCOLOR="#FF3300"><font COLOR="#00cd00"><b>#FF3300</b></font></td>

<td BGCOLOR="#FF3333"><font COLOR="#00cccd"><b>#FF3333</b></font></td>
<td BGCOLOR="#FF3366"><font COLOR="#00cc9a"><b>#FF3366</b></font></td>
<td BGCOLOR="#FF3399"><font COLOR="#00cc67"><b>#FF3399</b></font></td>
<td BGCOLOR="#FF33CC"><font COLOR="#00cc34"><b>#FF33CC</b></font></td>
<td BGCOLOR="#FF33FF"><font COLOR="#00cc01"><b>#FF33FF</b></font></td>
</tr>
<tr><td BGCOLOR="#FF6600"><font COLOR="#009a00"><b>#FF6600</b></font></td>
<td BGCOLOR="#FF6633"><font COLOR="#0099cd"><b>#FF6633</b></font></td>
<td BGCOLOR="#FF6666"><font COLOR="#00999a"><b>#FF6666</b></font></td>

<td BGCOLOR="#FF6699"><font COLOR="#009967"><b>#FF6699</b></font></td>
<td BGCOLOR="#FF66CC"><font COLOR="#009934"><b>#FF66CC</b></font></td>
<td BGCOLOR="#FF66FF"><font COLOR="#009901"><b>#FF66FF</b></font></td>
</tr>
<tr><td BGCOLOR="#FF9900"><font COLOR="#006700"><b>#FF9900</b></font></td>
<td BGCOLOR="#FF9933"><font COLOR="#0066cd"><b>#FF9933</b></font></td>
<td BGCOLOR="#FF9966"><font COLOR="#00669a"><b>#FF9966</b></font></td>
<td BGCOLOR="#FF9999"><font COLOR="#006667"><b>#FF9999</b></font></td>
<td BGCOLOR="#FF99CC"><font COLOR="#006634"><b>#FF99CC</b></font></td>

<td BGCOLOR="#FF99FF"><font COLOR="#006601"><b>#FF99FF</b></font></td>
</tr>
<tr><td BGCOLOR="#FFCC00"><font COLOR="#003400"><b>#FFCC00</b></font></td>
<td BGCOLOR="#FFCC33"><font COLOR="#0033cd"><b>#FFCC33</b></font></td>
<td BGCOLOR="#FFCC66"><font COLOR="#00339a"><b>#FFCC66</b></font></td>
<td BGCOLOR="#FFCC99"><font COLOR="#003367"><b>#FFCC99</b></font></td>
<td BGCOLOR="#FFCCCC"><font COLOR="#003334"><b>#FFCCCC</b></font></td>
<td BGCOLOR="#FFCCFF"><font COLOR="#003301"><b>#FFCCFF</b></font></td>
</tr>
<tr><td BGCOLOR="#FFFF00"><font COLOR="#000100"><b>#FFFF00</b></font></td>

<td BGCOLOR="#FFFF33"><font COLOR="#0000cd"><b>#FFFF33</b></font></td>
<td BGCOLOR="#FFFF66"><font COLOR="#00009a"><b>#FFFF66</b></font></td>
<td BGCOLOR="#FFFF99"><font COLOR="#000067"><b>#FFFF99</b></font></td>
<td BGCOLOR="#FFFFCC"><font COLOR="#000034"><b>#FFFFCC</b></font></td>
<td BGCOLOR="#FFFFFF"><font COLOR="#000001"><b>#FFFFFF</b></font></td>
</tr></table>`,
    sort: '5345345345',
    postRefMode: 'text'
  },
  {
    _id: 55635435,
    userID: '54fsdlj53',
    post_id: '255643543434',
    post_title: 'StackOverFlow',
    thumbnail: 'https://api.lorem.space/image/shoes?w=400&h=225',
    image: '',
    time: 'dec 15, 2021',
    short_description: 'গিয়েছিলাম খিচুড়ি নিয়ে, সবাই আনন্দ করে খাইলো কিন্তু ৫০ টির মতো হিন্দু ধর্মাবলম্বী পরিবার খিচুড়ি গ্রহন কর         রেনি। কারণ তাদের ধর্মের বিধানানুযায়ী আজকের জন্য তা গ্রহন করতে নিষেধ করা হয়েছে। তাই তড়িঘড়ি করে এ ৫০ টি পরিবারের জন্য ফল-ফ্রুটসের        ব্যবস্থা করলাম।  আহা তাদের খুশি কে দেখে! কিছু কিছু সময় নিজেকে বিলিয়ে দিতে ইচ্ছে করে।',

    postBody: `
      <!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>

<body data-scroll="[gold,red,40]">
<div data-scroll="[red,white,4]">
  <div ></div>
  <p style="padding:30px;margin:20px">
  culpa animi optio saepe at voluptates repellendus consectetur eos ex? Consequatur illum corrupti alias
  magnam magni atque?
  Sequi rem repudiandae doloremque molestiae aperiam aut atque consequatur cumque iure magnam voluptates
  officiis architecto ipsa tenetur labore nam id, quaerat deserunt obcaecati minus non earum? Molestiae
  similique dicta sequi.
  Culpa, laborum ipsum accusamus magnam id officiis accusantium labore pariatur nemo voluptates animi sunt
  autem quo non sapiente molestias quis reprehenderit qui consequuntur esse, ratione possimus quisquam
  veritatis? Voluptates, odio.
  Repudiandae nisi veniam iure cumque, reprehenderit voluptates ut nemo nostrum id porro totam numquam facilis
  voluptatibus neque tenetur soluta libero impedit perferendis architecto laboriosam nam cum doloribus!
  Incidunt, exercitationem laudantium?
  Voluptate repellat sint, saepe vitae aliquid exercitationem quo deleniti quaerat repellendus ea commodi
  voluptas delectus ipsum unde accusantium corrupti itaque, cupiditate adipisci distinctio ipsam, velit
  dignissimos sunt? Delectus, pariatur eligendi.
  Quam, dolor! Nihil, sapiente exercitationem magnam sunt voluptas ullam eius, minima delectus laboriosam iste
  impedit aspernatur, dignissimos molestiae maxime necessitatibus dolores ducimus cumque? Iusto expedita
  sequi, itaque magnam nihil iure.
  Dolorum exercitationem dolores voluptates quia omnis sapiente, tempora ipsam maiores, vitae reprehenderit
  consectetur sequi blanditiis nam ab temporibus eius quidem ipsa et! Rem dolore doloremque nobis pariatur
  nemo exercitationem ullam?
  Enim, doloremque eum adipisci, fuga ratione dolor a aspernatur blanditiis provident voluptatum soluta! Porro
  suscipit rerum quibusdam, numquam praesentium perferendis voluptatum, voluptatem officia dolor dolorum
  maiores nulla, voluptatibus alias unde!
  Eum consequatur unde consequuntur ipsam quasi voluptatibus molestiae dolorum eveniet, fugit similique quis
  quas vitae libero praesentium laborum accusantium inventore ut velit sapiente. Consequuntur reprehenderit
  earum quidem eaque adipisci nulla.
  Similique quae error aperiam repellat quis officia, ipsam aspernatur et doloribus itaque commodi recusandae!
  Rerum molestias, reprehenderit pariatur adipisci ex, iure neque quidem, sequi sit minus quam laudantium illo
  maxime!
  Esse ex sapiente magnam pariatur voluptates perspiciatis, unde debitis. Ipsum maxime animi neque praesentium
  minima exercitationem. Laudantium, magnam pariatur, officiis atque quia voluptatibus amet nesciunt nostrum
  quam totam neque eos?
  Sint labore temporibus voluptas vero! Nulla repellat unde voluptate magni, quis sed, voluptates
  exercitationem, repellendus accusantium delectus libero tempore quaerat nesciunt hic. Illo porro excepturi,
  iste dolore laboriosam placeat rem!
  Quas aspernatur exercitationem voluptatum doloremque voluptas beatae accusamus, praesentium adipisci eveniet
  aliquid possimus et sint earum cupiditate? Consectetur optio quaerat vero cum a eius consequatur dignissimos
  nisi. Impedit, numquam sapiente!
  Ipsum doloremque quo officia excepturi nisi minima consectetur quia voluptas incidunt, distinctio, saepe
  velit non adipisci quae eveniet unde, rerum laudantium eum. Voluptates, aspernatur voluptas. Natus
  perspiciatis deserunt ex accusantium?
  Cupiditate at possimus inventore tempore. Eligendi iusto incidunt doloremque. Sed earum quia natus nobis
  recusandae commodi numquam delectus unde. Accusamus quisquam quaerat libero unde, maiores aut sapiente
  exercitationem ratione dolorum.
  Porro, non facilis. Voluptatem quia ab distinctio repudiandae sit porro quod odio quo. Impedit ipsa maiores
  voluptatibus pariatur culpa corrupti quis saepe dolorem sapiente quod, quibusdam ea nisi soluta delectus.
  Dolorum doloribus atque, aut cupiditate assumenda explicabo suscipit neque veniam voluptates alias ad rem
  minima in numquam expedita et sit? Repellendus quod nisi quia quas impedit voluptatum numquam! Consectetur,
  minus!
  Blanditiis facere itaque necessitatibus tempore asperiores eveniet officia reprehenderit adipisci aut rerum
  quasi expedita voluptate velit quae voluptatum possimus quo, molestias maiores iure. Vero accusantium atque
  est. Perspiciatis, suscipit dicta!
  Corporis quo molestias quibusdam autem nesciunt nemo ut neque sint, dicta impedit. Illum, accusantium!
  Autem, aliquam iusto maxime repellat eaque ducimus magnam quae, nesciunt aliquid delectus rem voluptate hic
  alias.
  Iure voluptate vel quibusdam incidunt omnis expedita iusto eum molestias atque quisquam deleniti aspernatur
  alias voluptatibus ex, explicabo exercitationem ipsam! Expedita quis cumque obcaecati explicabo voluptates
  perferendis eligendi optio velit.
  Porro minus blanditiis, fugiat, sapiente quisquam eveniet magnam ipsa culpa doloremque ut incidunt
  reiciendis accusamus asperiores at est nihil dolorum? Ea officiis amet et nemo nobis magni officia iusto
  enim.
  Quas, molestiae aspernatur excepturi sit neque dicta corporis eius et quae consectetur molestias, deleniti
  autem repellendus officiis natus fugit minus impedit aliquam maxime dolorum nobis. Distinctio doloremque
  officia soluta corporis!
  Eligendi delectus reprehenderit, neque nobis repellendus, quam eum adipisci fugiat tenetur expedita
  molestias architecto error saepe fuga vitae illum soluta. Officia dolorum deleniti nesciunt labore
  distinctio rem consequuntur similique adipisci!
  Soluta quas minima consequatur. Reprehenderit sint, error, inventore voluptate amet beatae illo eum delectus
  illum eius veniam fugiat laboriosam eveniet qui? Quia dolorem modi doloremque. Id pariatur non totam quos.
  Voluptatem, in harum dignissimos sit totam saepe odit unde vitae beatae voluptatum omnis laborum quos
  dolorum, esse animi iusto? Nostrum alias placeat nisi numquam, maxime dolorem recusandae libero quam
  deserunt!
  Nesciunt deleniti inventore dolor eveniet saepe, exercitationem voluptates mollitia excepturi quas. Ullam
  iste eum, nesciunt distinctio recusandae minus. Ipsa ipsam unde voluptatum voluptas aspernatur deleniti rem
  quod tenetur dolor eos.
  Assumenda consequatur, ab, quae ex quasi, cum nesciunt odit odio quis quaerat corrupti. Veritatis porro quo
  sapiente laborum! Earum ullam in officia minima adipisci laboriosam et. Illum cum consectetur possimus.
  Nulla nostrum libero numquam distinctio animi, sint fugiat, vel, dolorum cupiditate voluptate commodi
  molestias iure sit. Sapiente, laborum! Unde, distinctio et natus architecto exercitationem explicabo quas
  quibusdam facere deserunt quod.
  Totam cumque ea tempora, aut obcaecati saepe consequuntur delectus vel, animi, laborum quisquam voluptate
  recusandae ad quasi eaque ipsa aspernatur. A adipisci aliquam nisi vel libero nobis quod, temporibus
  tempora?
  Eum porro id, iusto, vero, laboriosam aliquam blanditiis aut officia quam quibusdam rerum ex minima aperiam
  ratione. Eius, a laboriosam alias sed iusto reiciendis et reprehenderit nisi iure omnis perspiciatis!
  Deserunt atque quidem blanditiis deleniti nemo dignissimos! Rem ratione in nam possimus consectetur
  consequuntur exercitationem quia repellendus modi provident, deserunt quo aut tempore commodi harum
  repudiandae illo reprehenderit ducimus cumque?
  Dolor repudiandae laborum beatae cumque animi nisi earum eligendi. Dolor atque impedit reprehenderit
  suscipit repellendus cum incidunt, quia iusto laboriosam quae corrupti quisquam vero odio ut doloribus autem
  consectetur similique?
  Commodi nihil pers
  mollitia.
  </p>
</div>
<script>
window.onscroll = () => {
  const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const getTotalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  const widthParentage = (windowScroll * 100) / getTotalHeight;

  const getChild = document.getElementById('topScrollView');

  let height = 5;
  let color = 'red';
  let defaultBgColor = ''
  console.log(document.documentElement.scrollHeight,getTotalHeight)
  console.log(document.documentElement.clientHeight)

  const divScroll = document.getElementsByTagName('div');
  for (const div of divScroll) {
      const scroll = div.getAttribute('data-scroll') || document.body.getAttribute('data-scroll');
      if (scroll) {
          const scrArr = scroll.slice(1, scroll.length - 1).split(',');
          color = scrArr[0] != 0 ? scrArr[0] : color;
          defaultBgColor = scrArr[1] != 0 ? scrArr[1] : defaultBgColor;
          height = scrArr[2] != 0 ? scrArr[2] : height;
      }
  }



  if (getChild) {
      const getParent = document.getElementById('topScrollViewParent');
      getParent.style.position = 'fixed';
      getParent.style.top = 0;
      getParent.style.left = 0;
      getParent.style.backgroundColor = defaultBgColor;
      getParent.style.width = '100%'
      getParent.style.height = height + 'px'

      getChild.style.width = widthParentage + '%';
      getChild.style.height = height + 'px'
      getChild.style.backgroundColor = color;

  }
  else {
      const divChild = document.createElement('div');
      divChild.id = 'topScrollView'
      const divParent = document.createElement('div');
      divParent.id = 'topScrollViewParent'

      divParent.appendChild(divChild)
      document.body.appendChild(divParent)
  }
}
</script>


</body>

</html>
      `,
    sort: '5345345345',

    category: 'Vegetables',
    tags: ['html'],
    postRefMode: 'text'
  },


]

export default function handler(req, res) {
  const { post_id } = req.query;
  const codePreview = req.body

  const dbUser = 'social-blogdb'
  const dbPass = 'JdYT4aERpw0oqpjc'
  const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = `mongodb+srv://social-blogdb:${dbPass}@cluster0.wad1r.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

  // const run = async () => {

  //   await client.connect()

  //   try {
  //     const postDb = client.db('SocialBlog').collection('Posts');
  //     const postCollections = await postDb.find({}).toArray();
  //     const postBody = await postCollections.find(post => post?.post_id === post_id);

  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.write(postBody?.postBody || '<h1>Sorry Can\'t load document</h1>');
  //     res.end();
  //   }
  //   finally {

  //   }
  // }
  // run().catch(console.dir)
  const run = async () => {
    const post = await database.find(i => i?.post_id == post_id);

    const iframePostFullBody = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="/api/styleIframe.css" rel="stylesheet" type="text/css">
      <link href="/api/styleIframe.css?video=video" rel="stylesheet" type="text/css">
      <style>
      ${post?.postBodyCss}
      </style>
  </head>
  <body>
      ${post?.postBody}
      <script>
          ${post?.postBodyJs}
      </script>
  </body>
  </html>
  `
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(post ? iframePostFullBody : '<h1>Sorry Can\'t load document</h1>');
    res.end();
  }
  run()

}

