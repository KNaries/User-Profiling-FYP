
  //xhr
  var xhr = new XMLHttpRequest();
xhr.open("POST", "https://www.facebook.com/api/graphql/", true);
xhr.setRequestHeader("accept", "*/*");
xhr.setRequestHeader("accept-language", "en-US,en;q=0.9");
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("priority", "u=1, i");
xhr.setRequestHeader("sec-ch-prefers-color-scheme", "light");
xhr.setRequestHeader("sec-ch-ua", "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"");
xhr.setRequestHeader("sec-ch-ua-full-version-list", "\"Chromium\";v=\"128.0.6613.121\", \"Not;A=Brand\";v=\"24.0.0.0\", \"Google Chrome\";v=\"128.0.6613.121\"");
xhr.setRequestHeader("sec-ch-ua-mobile", "?0");
xhr.setRequestHeader("sec-ch-ua-model", "\"\"");
xhr.setRequestHeader("sec-ch-ua-platform", "\"Windows\"");
xhr.setRequestHeader("sec-ch-ua-platform-version", "\"15.0.0\"");
xhr.setRequestHeader("sec-fetch-dest", "empty");
xhr.setRequestHeader("sec-fetch-mode", "cors");
xhr.setRequestHeader("sec-fetch-site", "same-origin");
xhr.setRequestHeader("x-asbd-id", "129477");
xhr.setRequestHeader("x-fb-friendly-name", "CometSearchBootstrapKeywordsDataSourceQuery");
xhr.setRequestHeader("x-fb-lsd", `${lsd}`);


// var body = "av=61557109310327&__aaid=0&__user=61557109310327&__a=1&__req=9&__hs=19978.HYP%3Acomet_pkg.2.1..2.1&dpr=1&__ccg=GOOD&__rev=1016446991&__s=rn4v4r%3Alsbwy2%3A9wmz4o&__hsi=7413877628246213302&__dyn=7AzHK4HwkEng5K8G6EjBAg5S3G2O5U4e2C1vzEdE98K361twYwJyE24wJwpUe8hwaG0Z82_CxS320om78bbwto886C11wBz81s8hwGxu782lwv89kbxS1Fwc60D8vwRwlE-U2exi4UaEW2au0z9obrwh8lwUwgojUlwhEe88o4Wm7-2K0SEuwLKq2-azqwaW223908O3216xi4UK2K364UrwFg2fwxyo566E6C13xe3a3G1eKufxa3mUqwjVqwLwHw&__csr=gx95iiYGnjlq4dj59FnEIy8QykTKOReDRiRelGKD8CHtJitviFFt5LBlR-_T_lEzHy2aSHqWWB9-IGRqgG_8ZvCpvZfmBla6Ex3ax2HGquq7UCuQ49EDz49z8yE-A4KE9euUG4Goy4oS48KRxybyolyUS9LwMxqq5UKqfxacyEszE4ady8nwsE4C78c8nDwzxu1LzE2ewLDwNwuo99bwEwhE6G1xxS0CHw8G0pW3K08jw3Ik0he06dUDghw059Hg0KJ07ow43wko7au0bDw1Lbw64w6yw0y7w3D80jPw0uArw5Gw_w7Zw&__comet_req=15&fb_dtsg=NAcM_ysnXMMXNFTyjcv1VqAuqDe6tEGFnLsiQcpxBvukvR5ZoWdwVig%3A8%3A1715628043&jazoest=25827&lsd=WBm9d4-3neoEhK8DGDLJk5&__spin_r=1016446991&__spin_b=trunk&__spin_t=1726177900&qpl_active_flow_ids=1056839232&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=CometSearchBootstrapKeywordsDataSourceQuery&variables=%7B%22first%22%3A2000%7D&server_timestamps=true&doc_id=7163385847088980";


var body = "";
body += "av=61557109310327&";
body += "__aaid=0&";
body += "__user=61557109310327&";
body += "__a=1&";
body += "__req=9&";
body += "__hs=19978.HYP%3Acomet_pkg.2.1..2.1&";
body += "dpr=1&";
body += "__ccg=GOOD&";
body += "__rev=1016446991&";
body += "__s=rn4v4r%3Alsbwy2%3A9wmz4o&";
body += "__hsi=7413877628246213302&";
body += "__dyn=7AzHK4HwkEng5K8G6EjBAg5S3G2O5U4e2C1vzEdE98K361twYwJyE24wJwpUe8hwaG0Z82_CxS320om78bbwto886C11wBz81s8hwGxu782lwv89kbxS1Fwc60D8vwRwlE-U2exi4UaEW2au0z9obrwh8lwUwgojUlwhEe88o4Wm7-2K0SEuwLKq2-azqwaW223908O3216xi4UK2K364UrwFg2fwxyo566E6C13xe3a3G1eKufxa3mUqwjVqwLwHw&";
body += "__csr=gx95iiYGnjlq4dj59FnEIy8QykTKOReDRiRelGKD8CHtJitviFFt5LBlR-_T_lEzHy2aSHqWWB9-IGRqgG_8ZvCpvZfmBla6Ex3ax2HGquq7UCuQ49EDz49z8yE-A4KE9euUG4Goy4oS48KRxybyolyUS9LwMxqq5UKqfxacyEszE4ady8nwsE4C78c8nDwzxu1LzE2ewLDwNwuo99bwEwhE6G1xxS0CHw8G0pW3K08jw3Ik0he06dUDghw059Hg0KJ07ow43wko7au0bDw1Lbw64w6yw0y7w3D80jPw0uArw5Gw_w7Zw&";
body += "__comet_req=15&";
body += "fb_dtsg=NAcMGC9vfIlTQReNx7muMIBUcIfVCDQvPpr0SnRJ1nvce9cMDMquX2g:8:1715628043";
body += "jazoest=25827&";
body += "lsd=WBm9d4-3neoEhK8DGDLJk5&";
body += "__spin_r=1016446991&";
body += "__spin_b=trunk&";
body += "__spin_t=1726177900&";
body += "qpl_active_flow_ids=1056839232&";
body += "fb_api_caller_class=RelayModern&";
body += "fb_api_req_friendly_name=CometSearchBootstrapKeywordsDataSourceQuery&";
body += "variables=%7B%22first%22%3A2000%7D&";
body += "server_timestamps=true&";
body += "doc_id=7163385847088980";

xhr.send(body);

//working
