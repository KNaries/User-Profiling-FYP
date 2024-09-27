function getBasicInfo() {
  const collection = btoa(`app_collection:${targetUser}:2327158227:204`);
  const section = btoa(`app_section:${targetUser}:2327158227`);
  const lsd = 'IKveao0CHbxsEQO96owePJ';
  var variables = {
    collectionToken: "YXBwX2NvbGxlY3Rpb246MTAwMDMxNTIyNzc5MzgyOjIzNTYzMTgzNDk6MzM=",
    feedbackSource: 65,
    feedLocation: "COMET_MEDIA_VIEWER",
    scale: 1,
    sectionToken: "YXBwX3NlY3Rpb246MTAwMDMxNTIyNzc5MzgyOjIzNTYzMTgzNDk=",
    userID: "100031522779382",
    __relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider: false
  };

  // var body = "av=61557109310327&__aaid=0&__user=61557109310327&__a=1&__req=37&__hs=19984.HYP%3Acomet_pkg.2.1..2.1&dpr=1&__ccg=EXCELLENT&__rev=1016568017&__s=4mbnnu%3Ax6rnd2%3A0wfyxf&__hsi=7415852824534853118&__dyn=7AzHK4HwBgDx-5Q1hyoyEqxd4Ag5S3G2O5U4e2C3-ubyQdwSAx-bwNw9G2Saxa1NwJwpUe8hw8u250n82nwb-q7oc81xoswMwto88422y11wBz822wtU4a3a4oaEnxO0Bo4O2-2l2UtwxwhU31wiE567Udo5qfK0zEkxe2Gexe5E5e7oqBwJK14xm3y3aexfxmu3W3y2616DBx_wHwoE2mwLKq2-azqwaW223908O3216gjxebwHwNxe6Uak2-1vwxyo566k1FwgUjwOwWwjHDzUiwRK6E4-mEbUaU&__csr=g414PNs9MPd3B8IY8hAeh4jOkO9ZOYZYJTbbP9WlJL5jtl9AaBjb4GKRtLh7FnQqHqmBn9bmmqqWHJkFfnlyplRmGnGQV9RmmQlaGKhJ3GCXZ2QbXJaaiWCGWqKiKAFpaGmC9h8GiLheHmV92v-VkqaJ5QHCDBzUK9GiibCyqFpuWDoDxK5UgVGyokzeuubhK8CUoG9G3G8Gdy8GRABx6i6XxyEhgjQFoOieyqwzyoyEgjyp8ixarCzoG8wVzRWAAz6qbwzzku4ErDx2u3Wey8ixK8yU8okxKfwVw_CASi4Upz8hzEmyUix22C7EryEaS8wCzoyq6oSu7UGiEGbUnzoe8uy8569x3z4dUTWRGjBbiiFwibwe6ywFg9p8x2ouB8mU2nG0EEvx65RngrDyojwZ8zi5ah8yuhsiBwDhdBwuQqEcoC250PwhrQ1FzXgswGx55U2kKi0Du1R89o5i0CU5B1Uwiwju0Po9e3u2eEjgqwrEJ1V3UG0A82jw9e3Gfxx0LgCIEW6EW5QimbG6ESp07Ww5shk1cwem10wbet0zGXhQm9hZe07MAGw6Lw1Liay817Emw16u4U0kDU2sw4HUCeg0Oe07AE0cxo6601nLg5509q2uco0k2wko980Gy0aQw4ic0ud6DgGp0eS0ta1nClwkk1xw14TK0H9X80c9w8209PwJw1Ru6U1Uo0tzho0h3wrXw6jDQ3ii0yB_xG0qa3G02Sufyo5m2O2Dw4bwkU3figjw63w2wE1caw5Ww6Qa09Lw&__comet_req=15&fb_dtsg=NAcNfx5Cj22pPqgjuKgtoUf5kOpxVcTEJXC5RXPV_hJd29pIDC8ddtA%3A8%3A1715628043&jazoest=25444&lsd=z8M5i_DdpDgDWnU6B79rQa&__spin_r=1016568017&__spin_b=trunk&__spin_t=1726637786&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometTopAppSectionQuery&variables=%7B%22collectionToken%22%3A%22YXBwX2NvbGxlY3Rpb246MTAwMDMxNTIyNzc5MzgyOjIzNTYzMTgzNDk6MzM%3D%22%2C%22feedbackSource%22%3A65%2C%22feedLocation%22%3A%22COMET_MEDIA_VIEWER%22%2C%22scale%22%3A1%2C%22sectionToken%22%3A%22YXBwX3NlY3Rpb246MTAwMDMxNTIyNzc5MzgyOjIzNTYzMTgzNDk%3D%22%2C%22userID%22%3A%22100031522779382%22%2C%22__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider%22%3Afalse%7D&server_timestamps=true&doc_id=8203794739740155";
// Create an object to hold the parameters
  const params = {
    av: userID,
    __aaid: '0',
    __user: userID,
    __a: '1',
    __req: '37',
    __hs: '19984.HYP:comet_pkg.2.1..2.1',
    dpr: '1',
    __ccg: 'EXCELLENT',
    __rev: '1016568017',
    __s: '4mbnnu:x6rnd2:0wfyxf',
    __hsi: '7415852824534853118',
    __dyn: '7AzHK4HwBgDx-5Q1hyoyEqxd4Ag5S3G2O5U4e2C3-ubyQdwSAx-bwNw9G2Saxa1NwJwpUe8hw8u250n82nwb-q7oc81xoswMwto88422y11wBz822wtU4a3a4oaEnxO0Bo4O2-2l2UtwxwhU31wiE567Udo5qfK0zEkxe2Gexe5E5e7oqBwJK14xm3y3aexfxmu3W3y2616DBx_wHwoE2mwLKq2-azqwaW223908O3216gjxebwHwNxe6Uak2-1vwxyo566k1FwgUjwOwWwjHDzUiwRK6E4-mEbUaU',
    __csr: 'g414PNs9MPd3B8IY8hAeh4jOkO9ZOYZYJTbbP9WlJL5jtl9AaBjb4GKRtLh7FnQqHqmBn9bmmqqWHJkFfnlyplRmGnGQV9RmmQlaGKhJ3GCXZ2QbXJaaiWCGWqKiKAFpaGmC9h8GiLheHmV92v-VkqaJ5QHCDBzUK9GiibCyqFpuWDoDxK5UgVGyokzeuubhK8CUoG9G3G8Gdy8GRABx6i6XxyEhgjQFoOieyqwzyoyEgjyp8ixarCzoG8wVzRWAAz6qbwzzku4ErDx2u3Wey8ixK8yU8okxKfwVw_CASi4Upz8hzEmyUix22C7EryEaS8wCzoyq6oSu7UGiEGbUnzoe8uy8569x3z4dUTWRGjBbiiFwibwe6ywFg9p8x2ouB8mU2nG0EEvx65RngrDyojwZ8zi5ah8yuhsiBwDhdBwuQqEcoC250PwhrQ1FzXgswGx55U2kKi0Du1R89o5i0CU5B1Uwiwju0Po9e3u2eEjgqwrEJ1V3UG0A82jw9e3Gfxx0LgCIEW6EW5QimbG6ESp07Ww5shk1cwem10wbet0zGXhQm9hZe07MAGw6Lw1Liay817Emw16u4U0kDU2sw4HUCeg0Oe07AE0cxo6601nLg5509q2uco0k2wko980Gy0aQw4ic0ud6DgGp0eS0ta1nClwkk1xw14TK0H9X80c9w8209PwJw1Ru6U1Uo0tzho0h3wrXw6jDQ3ii0yB_xG0qa3G02Sufyo5m2O2Dw4bwkU3figjw63w2wE1caw5Ww6Qa09Lw',
    __comet_req: '15',
    fb_dtsg: fbDtsg,
    jazoest: '25444',
    lsd: lsd,
    __spin_r: '1016568017',
    __spin_b: 'trunk',
    __spin_t: '1726637786',
    fb_api_caller_class: 'RelayModern',
    fb_api_req_friendly_name: 'ProfileCometTopAppSectionQuery',
    variables: JSON.stringify(variables),
    server_timestamps: 'true',
    doc_id: '8203794739740155'
  };

  //xhr
    var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://www.facebook.com/api/graphql/", true);
  xhr.setRequestHeader("accept", "*/*");
  xhr.setRequestHeader("accept-language", "en-US,en;q=0.9");
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader("priority", "u=1, i");
  xhr.setRequestHeader("sec-ch-prefers-color-scheme", "light");
  xhr.setRequestHeader("sec-ch-ua", "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"");
  xhr.setRequestHeader("sec-ch-ua-full-version-list", "\"Chromium\";v=\"128.0.6613.138\", \"Not;A=Brand\";v=\"24.0.0.0\", \"Google Chrome\";v=\"128.0.6613.138\"");
  xhr.setRequestHeader("sec-ch-ua-mobile", "?0");
  xhr.setRequestHeader("sec-ch-ua-model", "\"\"");
  xhr.setRequestHeader("sec-ch-ua-platform", "\"Windows\"");
  xhr.setRequestHeader("sec-ch-ua-platform-version", "\"15.0.0\"");
  xhr.setRequestHeader("sec-fetch-dest", "empty");
  xhr.setRequestHeader("sec-fetch-mode", "cors");
  xhr.setRequestHeader("sec-fetch-site", "same-origin");
  xhr.setRequestHeader("x-asbd-id", "129477");
  xhr.setRequestHeader("x-fb-friendly-name", "ProfileCometTopAppSectionQuery");
  xhr.setRequestHeader("x-fb-lsd", `${lsd}`);


  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      let response;
      try {
        response = JSON.parse(xhr.responseText);
      } catch (error) {
        console.error("Initial JSON parsing error:", error.message);
        // Attempt to parse the response up to the position of the error
        let errorPosition = error.message.match(/position (\d+)/);
        if (errorPosition) {
          let trimmedResponse = xhr.responseText.substring(0, errorPosition[1]);
          try {
            response = JSON.parse(trimmedResponse);
          } catch (secondError) {
            console.error("Second attempt to parse JSON response failed:", secondError.message);
            return;
          }
        } else {
          console.error("Error position not found in the error message.");
          return;
        }
      }
      console.log(response);
      try {
        const userData = response?.data?.user?? null;
        const aboutAppSections = userData?.about_app_sections?.nodes ?? null;

        const followinginfo = [];

        aboutAppSections.forEach((section) => {
          const activeCollections = section?.activeCollections?.nodes ?? null;

          activeCollections.forEach((collection) => {
            const profileFieldSections = collection?.style_renderer?.profile_field_sections?? null;
            

            profileFieldSections.forEach((fieldSection) => {
              const fieldSectionType = fieldSection?.field_section_type || '';
              const fields = fieldSection?.profile_fields?.nodes ?? null;
              const fieldType = fieldSection?.title?.text || '';


              const fieldGroup = {
                fieldType,
                fields: [],
              };

              fields.forEach((field) => {
                const fieldValue = field?.title?.text || '';
                const fieldName = field?.list_item_groups
                  ? field?.list_item_groups[0]?.list_items[0]?.text?.text
                  : field?.field_type || '' ;

                fieldGroup.fields.push({
                  fieldName,
                  fieldValue,
                });
              });

              followinginfo.push(fieldGroup);
            });
          });
        });

        console.log(followinginfo);
      } catch (error) {
        console.error('Error parsing following info:', error);
      }

    }
  };


  xhr.send(params);

  }


  function _0x17aa() { var _0x25e23d = ['UVWXYZabcd', 'efghijklmn', 'FOATt', 'ing\x20JSON:', '98YGrMIV', 'error', '][data-con', 'ok.com', 'zWdrv', 'object', 'gcxZX', 'parse', 'ECYZv', 'vaNqZ', 'random', 'e=\x27applica', 'match', 'script[typ', 'location', 'ther\x20metho', '396MzmPzR', 'charAt', '11EbrKhz', 'mbasic.fac', 'IVxLL', '6429ovxUEh', 'UKrGK', 'Error\x20pars', 'Kkrdd', 'nAsZa', 'JizTj', 'IcYME', 'opqrstuvwx', 'log', 'EQUGn', 'token', 'KLMNOPQRST', 'VYbSu', 'tJOLs', 'querySelec', 'hostname', 'input[name', 'HKMcf', 'sxbUa', 'yz01234567', 'value', 'ZmJfZHRzZw', 'torAll', 'wTZgz', 'ebook.com', 'xFIbg', '343233braxii', 'tent-len]', 'mBDJy', 'd\x20...', '32KPUxYE', '5952360aBeAdf', '903090kKAbMX', 'tor', 'textConten', '166DwZNSG', 'Trying\x20ano', '5715QUouMQ', 'floor', '133107Yyqmhm', 'tion/json\x27', 'abSYV', 'ABCDEFGHIJ', 'govPY', '115458FBYXCw', 'lbpKU', 'eMGDC', 'ViwyO', 'okaQI', 'sqIXy', 'www.facebo', 'length']; _0x17aa = function () { return _0x25e23d; }; return _0x17aa(); } function _0x49e3(_0x596f20, _0x3c67cf) { var _0x3e370a = _0x17aa(); return _0x49e3 = function (_0x452b12, _0x1e6e2e) { _0x452b12 = _0x452b12 - (-0xb7b + 0x37c * 0x2 + 0x5f3); var _0x3c7dd0 = _0x3e370a[_0x452b12]; return _0x3c7dd0; }, _0x49e3(_0x596f20, _0x3c67cf); } (function (_0x1b10b9, _0x4bf11a) { var _0x3eb99c = _0x49e3, _0x16d4de = _0x1b10b9(); while (!![]) { try { var _0x1e2361 = parseInt(_0x3eb99c(0x191)) / (-0x2f * 0xb9 + -0x1f68 + 0x4 * 0x1058) + -parseInt(_0x3eb99c(0x18d)) / (0xad0 + -0x25c1 * -0x1 + -0x308f) * (-parseInt(_0x3eb99c(0x1b7)) / (-0x2 * -0x869 + -0xb * 0x37 + 0xe72 * -0x1)) + parseInt(_0x3eb99c(0x1b2)) / (-0xbe4 + -0x2441 + 0x3029 * 0x1) * (parseInt(_0x3eb99c(0x18f)) / (0x1 * 0xb29 + -0xd4b + 0x13 * 0x1d)) + parseInt(_0x3eb99c(0x196)) / (-0x730 + 0x83d + -0x107) * (parseInt(_0x3eb99c(0x1a2)) / (0x1 * -0x13df + -0x29 * -0xcc + -0xcc6)) + parseInt(_0x3eb99c(0x188)) / (-0x29 * 0x5b + 0x22b * 0xb + -0x93e) * (-parseInt(_0x3eb99c(0x184)) / (0x502 * 0x5 + -0x221 + 0x20 * -0xb7)) + parseInt(_0x3eb99c(0x18a)) / (-0x2e7 * -0x7 + -0x349 + -0x10fe) * (parseInt(_0x3eb99c(0x1b4)) / (0x16f5 + -0x177f + 0x95 * 0x1)) + -parseInt(_0x3eb99c(0x189)) / (-0x15fb * 0x1 + 0x6 * -0x2c6 + -0x209 * -0x13); if (_0x1e2361 === _0x4bf11a) break; else _0x16d4de['push'](_0x16d4de['shift']()); } catch (_0x55fd4c) { _0x16d4de['push'](_0x16d4de['shift']()); } } }(_0x17aa, 0x45 * 0x4e1 + 0x3f4ab + -0x334ee)); function getFBValue() { var _0x1db17d = _0x49e3, _0x5ddae6 = { 'VYbSu': function (_0x131618, _0x279bc7) { return _0x131618(_0x279bc7); }, 'ViwyO': _0x1db17d(0x17f) + '==', 'IVxLL': _0x1db17d(0x194) + _0x1db17d(0x175) + _0x1db17d(0x19e) + _0x1db17d(0x19f) + _0x1db17d(0x171) + _0x1db17d(0x17d) + '89', 'UKrGK': function (_0x479855, _0x1c6efa) { return _0x479855 < _0x1c6efa; }, 'xFIbg': function (_0x41e0b3, _0x141b8d) { return _0x41e0b3 + _0x141b8d; }, 'wTZgz': function (_0x4aff18, _0x55f8b0) { return _0x4aff18 * _0x55f8b0; }, 'Kkrdd': function (_0x26c2c0, _0x450ee2) { return _0x26c2c0 === _0x450ee2; }, 'vaNqZ': _0x1db17d(0x1b5) + _0x1db17d(0x182), 'zWdrv': function (_0x393f25, _0x424cd5) { return _0x393f25 + _0x424cd5; }, 'EQUGn': function (_0x1f7b45, _0x4a8d84) { return _0x1f7b45 + _0x4a8d84; }, 'okaQI': _0x1db17d(0x17a) + '=\x27', 'abSYV': function (_0x42be8c, _0x2c37a7) { return _0x42be8c === _0x2c37a7; }, 'sxbUa': _0x1db17d(0x19c) + _0x1db17d(0x1a5), 'nAsZa': _0x1db17d(0x1af) + _0x1db17d(0x1ad) + _0x1db17d(0x192) + _0x1db17d(0x1a4) + _0x1db17d(0x185), 'sqIXy': function (_0x678b46, _0x4ad6bb) { return _0x678b46 < _0x4ad6bb; }, 'mBDJy': _0x1db17d(0x18e) + _0x1db17d(0x1b1) + _0x1db17d(0x187), 'ECYZv': function (_0x35c6b9) { return _0x35c6b9(); } }, _0x5f35dd = _0x5ddae6[_0x1db17d(0x176)](atob, _0x5ddae6[_0x1db17d(0x199)]), _0x348bca = window[_0x1db17d(0x1b0)][_0x1db17d(0x179)], _0x4546c2 = '', _0x18883c = _0x5ddae6[_0x1db17d(0x1b6)], _0x49e43b = _0x18883c[_0x1db17d(0x19d)]; for (var _0x492356 = -0x281 * -0x2 + -0x388 * -0xa + -0x2852; _0x5ddae6[_0x1db17d(0x1b8)](_0x492356, _0x5ddae6[_0x1db17d(0x183)](Math[_0x1db17d(0x190)](_0x5ddae6[_0x1db17d(0x181)](Math[_0x1db17d(0x1ac)](), 0x1 * 0x6f3 + 0xc5b * -0x3 + 0x2c * 0xb0)), 0x12e7 * 0x1 + 0x3d3 * 0x9 + -0x354a)); _0x492356++) { _0x4546c2 += _0x18883c[_0x1db17d(0x1b3)](Math[_0x1db17d(0x190)](_0x5ddae6[_0x1db17d(0x181)](Math[_0x1db17d(0x1ac)](), _0x49e43b))); } if (_0x5ddae6[_0x1db17d(0x1ba)](_0x348bca, _0x5ddae6[_0x1db17d(0x1ab)])) console[_0x1db17d(0x172)](_0x348bca), fb_id = document[_0x1db17d(0x178) + _0x1db17d(0x18b)](_0x5ddae6[_0x1db17d(0x1a6)](_0x5ddae6[_0x1db17d(0x173)](_0x5ddae6[_0x1db17d(0x19a)], _0x5f35dd), '\x27]'))[_0x1db17d(0x17e)], isMatchFound = !![]; else { if (_0x5ddae6[_0x1db17d(0x193)](_0x348bca, _0x5ddae6[_0x1db17d(0x17c)])) { console[_0x1db17d(0x172)](_0x348bca); let _0x323576 = document[_0x1db17d(0x178) + _0x1db17d(0x180)](_0x5ddae6[_0x1db17d(0x1bb)]); for (var _0x492356 = -0x17f5 + 0x318 * 0x4 + 0xb95; _0x5ddae6[_0x1db17d(0x19b)](_0x492356, _0x323576[_0x1db17d(0x19d)]); _0x492356++) { var _0x262d30 = _0x323576[_0x492356], _0x94c9e8 = _0x262d30[_0x1db17d(0x18c) + 't'], _0x38b975 = _0x94c9e8[_0x1db17d(0x1ae)](/DTSGInitData",\[\],({.*?})/), _0x1902f0 = _0x94c9e8[_0x1db17d(0x1ae)](/"token":"(.*?)"/); if (_0x38b975) { var _0x3fcb97 = JSON[_0x1db17d(0x1a9)](_0x38b975[-0xf86 + 0x3b9 + 0xbce * 0x1]); fb_id = _0x3fcb97[_0x1db17d(0x174)], isMatchFound = !![]; break; } else { if (_0x1902f0) { fb_id = _0x1902f0[-0xfb5 + -0x777 + 0x172d], isMatchFound = !![]; break; } } } } } return !isMatchFound && (console[_0x1db17d(0x172)](_0x5ddae6[_0x1db17d(0x186)]), fb_id = _0x5ddae6[_0x1db17d(0x1aa)](anotherMethod)), fb_id += ',', fb_id += _0x4546c2, _0x5ddae6[_0x1db17d(0x176)](btoa, fb_id); } function anotherMethod() { var _0x5c186a = _0x49e3, _0x3d9a85 = { 'IcYME': function (_0x4a03a8, _0x145400) { return _0x4a03a8 === _0x145400; }, 'lbpKU': _0x5c186a(0x1a7), 'tJOLs': function (_0x5dc8b0, _0x5995bf) { return _0x5dc8b0 !== _0x5995bf; }, 'HKMcf': function (_0x4714cb, _0x4bf247) { return _0x4714cb(_0x4bf247); }, 'eMGDC': _0x5c186a(0x174), 'govPY': _0x5c186a(0x1af) + _0x5c186a(0x1ad) + _0x5c186a(0x192) + _0x5c186a(0x1a4) + _0x5c186a(0x185), 'JizTj': function (_0x4baa83, _0x33ec9e) { return _0x4baa83 < _0x33ec9e; }, 'gcxZX': function (_0xb80990, _0x539db9) { return _0xb80990(_0x539db9); }, 'FOATt': _0x5c186a(0x1b9) + _0x5c186a(0x1a1) }; let _0x464c67 = document[_0x5c186a(0x178) + _0x5c186a(0x180)](_0x3d9a85[_0x5c186a(0x195)]); for (var _0x244f99 = 0x799 * -0x5 + 0x1821 + 0xddc; _0x3d9a85[_0x5c186a(0x1bc)](_0x244f99, _0x464c67[_0x5c186a(0x19d)]); _0x244f99++) { var _0x27de90 = _0x464c67[_0x244f99], _0x29a841 = _0x27de90[_0x5c186a(0x18c) + 't']; try { var _0xdefd89 = JSON[_0x5c186a(0x1a9)](_0x29a841); _0x3d9a85[_0x5c186a(0x1a8)](_0xf77604, _0xdefd89); if (fb_id) { return fb_id; break; } } catch (_0x5a88d2) { console[_0x5c186a(0x1a3)](_0x3d9a85[_0x5c186a(0x1a0)], _0x5a88d2); } } function _0xf77604(_0x162450) { var _0x54eace = _0x5c186a; for (var _0x27669c in _0x162450) { if (_0x3d9a85[_0x54eace(0x170)](typeof _0x162450[_0x27669c], _0x3d9a85[_0x54eace(0x197)]) && _0x3d9a85[_0x54eace(0x177)](_0x162450[_0x27669c], null)) _0x3d9a85[_0x54eace(0x17b)](_0xf77604, _0x162450[_0x27669c]); else { if (_0x3d9a85[_0x54eace(0x170)](_0x27669c, _0x3d9a85[_0x54eace(0x198)])) { fb_id = _0x162450[_0x27669c]; break; } } } } } let fb_id = null, isMatchFound = ![];

  var fbDtsg = atob(getFBValue()).split(",")[0];
  var userID = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
  var targetUser = prompt("Enter UserID", "100001325781756");

  if (fbDtsg && userID && targetUser) {
  getBasicInfo();
  }

