console.log("BLOG");

const params = {
    tag:"",
    keyword:""
}
const decodeParams = decodeURI(location.search);
paramsTag = decodeParams.match(/tag=([^&]+)/);
paramsKeyword = decodeParams.match(/keyword=([^&]+)/);
params.tag = paramsTag ? paramsTag[1] : "";
params.keyword = paramsKeyword ? paramsKeyword[1] : "";
if(params.tag){
    document.getElementById("select_tag").value = params.tag;
}
document.getElementById("search_text").value.value = params.keyword;

const serchParams = function(){
    let result = database;
    let articleHead = "";
    if(params.tag && params.tag !== "全てのタグ"){
        result = result.filter(e=>{
            return e.tags.includes(params.tag);
        });
    }
    if(params.keyword){
        result = result.filter(e=>{
            return e.title.includes(params.keyword);
        });
    }

    result.some((e, index)=>{
        if(index >= 20){
            // 1, 2, 3, といった20番目以上を表示するリンクを追加する処理を書く
            // return true;
        }
        let tagBlocks = "";
        e.tags.forEach(e2=>{
            tagBlocks = tagBlocks + `<a href="../../index.html?tag=${e2}" class="tagblock link-gray">
            <span class="material-icons">sell</span>${e2}</a>`
        });
        articleHead = `
        <a href="../../${String(e.number).padStart(5,"0")}.html">
        <div class="i-articlehead">
        <span class="i-date">${e.date}</span>
        <span class="i-modified">${e.modified}</span>
        <div class="i-title">${e.title}</div>
        <div class="i-tags">${tagBlocks}</div>
        </div>
        </a>\n` + articleHead;
        // console.log(articleHead)
    });
    // console.log(articleHead);
    document.getElementById("articles").innerHTML = articleHead;
}
if(params.tag || params.keyword){
    serchParams();
}

const serchKeyword = function() {
    console.log("serch");
    const elementTag = document.getElementById("select_tag").value;
    const elementKeyword = document.getElementById("search_text").value;
    if(!elementKeyword && elementTag === "全てのタグ"){
        console.log("NoInput");
        window.location.href = "../../index.html";
        return false;
    }
    params.tag = elementTag;
    params.keyword = elementKeyword;
    // window.location.search = "?" + new URLSearchParams(params).toString();
    window.location.href = "../../index.html?" + new URLSearchParams(params).toString();
    return false;
}