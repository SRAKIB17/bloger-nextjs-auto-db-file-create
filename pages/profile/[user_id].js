import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ProfileInfoSection from '../../components/BLOG/Profile/ProfileInfoSection';
import UserPost from '../../components/BLOG/Profile/UserPost';
import Header from '../../components/Header/Header';
import usePrivatePageCheckUser from '../../components/hooks/checkUser/privatePageCheckUser';
import Profile from '../../components/profile/Profile';

const Index = () => {
  const router = useRouter()
  const { user_id } = router.query
  // usePrivatePageCheckUser('/profile')

  const [theme, setTheme] = useState('')
  const docs =
    `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link href="/code_viewer_jquery/themes/css/blackboard.css" rel="stylesheet" type="text/css" media="screen">
    <style>
        *::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
        pre{
          overflow: scroll;
          width: 100%;
          height: 100%;
        }
        *::-webkit-scrollbar-thumb {
          background-color: rgb(183, 183, 183);
          border-radius: 10px;
        }
        
        *::-webkit-scrollbar-button {
          height: 70px;
          visibility: hidden;
        }
    </style>
</head>
<body>
<pre data-language="html">
<ul>
  <li><i class="fa fa-hand-o-right"></i> Custom <strong>WordPress</strong> theme from scratch. (I have my own theme at WordPress repository, so you will get latest best practiced WordPress standard coding from me.)</li>
  <li><i class="fa fa-hand-o-right"></i> <strong>WordPress</strong> theme customizations</li>
  <li><i class="fa fa-hand-o-right"></i> <strong>WordPress</strong> websites using Elementor</li>
  <li><i class="fa fa-hand-o-right"></i> <strong>WordPress</strong> websites using WP-Backery</li>
  <li><i class="fa fa-hand-o-right"></i> Custom Html5/CSS3 templates from scratch.</li>
  <li><i class="fa fa-hand-o-right"></i> Html5/CSS3 template customizations</li>
  <li><i class="fa fa-hand-o-right"></i> Knock me at imransdesign@gmail.com</li>
  <li><i class="fa fa-hand-o-right"></i> Custom <strong>WordPress</strong> theme from scratch. (I have my own theme at WordPress repository, so you will get latest best practiced WordPress standard coding from me.)</li>
  <li><i class="fa fa-hand-o-right"></i> <strong>WordPress</strong> theme customizations</li>
  <li><i class="fa fa-hand-o-right"></i> <strong>WordPress</strong> websites using Elementor</li>
  <li><i class="fa fa-hand-o-right"></i> <strong>WordPress</strong> websites using WP-Backery</li>
  <li><i class="fa fa-hand-o-right"></i> Custom Html5/CSS3 templates from scratch.</li>
  <li><i class="fa fa-hand-o-right"></i> Html5/CSS3 template customizations</li>
  <li><i class="fa fa-hand-o-right"></i> Knock me at imransdesign@gmail.com</li>
</ul>
</pre>
    <script src="/code_viewer_jquery/dist/rainbow.js"></script>
    <script src="/code_viewer_jquery/src/language/generic.js"></script>

    <!-- FOR C LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/c.js"></script>

    <!-- FOR CoffeeScript LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/coffeescript.js"></script>

    <!-- FOR C Sharp LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/csharp.js"></script>

    <!-- FOR CSS LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/css.js"></script>

    <!-- FOR D LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/d.js"></script>

    <!-- FOR GO LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/go.js"></script>

    <!-- FOR Haskell LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/haskell.js"></script>

    <!-- FOR Html LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/html.js"></script>

    <!-- FOR JAVASCRIPT LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/javascript.js"></script>

    <!-- FOR JSON LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/json.js"></script>

    <!-- FOR Lua LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/lua.js"></script>

    <!-- FOR PHP LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/php.js"></script>

    <!-- FOR Python LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/python.js"></script>

    <!-- FOR R LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/r.js"></script>

    <!-- FOR RUBY LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/ruby.js"></script>

    <!-- FOR RUBY LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/scheme.js"></script>

    <!-- FOR RUBY LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/shell.js"></script>

</html>

</body>

`
  return (
    <div>
      <div className='grid grid-cols-12 gap-4 md:gap-0 '>
        <div className='col-span-12 md:col-span-4  shadowEachPost '>
          <ProfileInfoSection user_id={user_id} />
        </div>

        <div className=' col-span-12 md:ml-4 md:col-span-8 overflow-auto hideScrollBar md:h-screen'>
          <select name="" id="changeTheme">
            <option value="all-hallows-eve.css">HALLOWS</option>
            <option value="blackboard.css">BLACKBOARD</option>
            <option value="dreamweaver.css">DREAMWEAVER</option>
            <option value="espresso-libre.css">ESPRESSO libre</option>
            <option value="github.css">GITHUB</option>
            <option value="kimbie-dark.css">KIMBIE dark</option>
            <option value="kimbie-light.css">KIMBIE Light</option>
            <option value="monokai.css">MONOKAI</option>
            <option value="obsidian.css">OBSIDIAN</option>
            <option value="paraiso-dark.css">PARAISO-dark</option>
            <option value="paraiso-light.css">PARAISO-light</option>
            <option value="pastie.css">PASTIE</option>
            <option value="rainbow.css">RAINBOW</option>
            <option value="solarized-dark.css">SOLARIZED dark</option>
            <option value="solarized-light.css">SOLARIZED light</option>
            <option value="sunburst.css">SUNBURST</option>
            <option value="tomorrow-night.css">TOMORROW-night</option>
            <option value="tricolore.css">TRICOLORE</option>
            <option value="twilight.css">TWILIGHT</option>
            <option value="zenburnesque.css">ZENBURNESQUE</option>
          </select>
          <iframe srcDoc={docs} frameborder="0" className='w-full h-screen'></iframe>
          <UserPost user_id={user_id} />
        </div>
      </div>
    </div>
  );
};

export default Index;
